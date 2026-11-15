import {
  ExpectedError, isUuid, NotFoundError,
} from '@labrute/core';
import type { UserRelatedAccountsResponse } from '@labrute/core';
import type { PrismaClient } from '@labrute/prisma';
import { traced } from './trace.js';

const PAGE_SIZE = 25;

type Database = Pick<PrismaClient, '$queryRaw' | 'user'>;
type Identifiers = { browserIds: string[]; fingerprints: string[]; ips: string[] };

const mergeIdentifiers = (historical: Identifiers, observed?: Identifiers): Identifiers => {
  const merge = (key: keyof Identifiers) => [...new Set([
    ...historical[key], ...(observed?.[key] ?? []),
  ])].filter(Boolean).sort();

  return {
    browserIds: merge('browserIds'),
    fingerprints: merge('fingerprints'),
    ips: merge('ips'),
  };
};

/** Aggregate observations for the target or one page, rather than loading individual event rows. */
const loadObservedIdentifiers = async (prisma: Database, userIds: string[]) => {
  const rows = await traced('relatedAccounts.observedIdentifiers', () => prisma.$queryRaw<(
    Identifiers & { userId: string }
  )[]>`
    SELECT "userId"::text AS "userId",
      array_agg(DISTINCT "browserId"::text) AS "browserIds",
      array_agg(DISTINCT fingerprint) AS fingerprints,
      COALESCE(array_agg(DISTINCT ip) FILTER (WHERE ip IS NOT NULL), '{}') AS ips
    FROM "AccountObservation" WHERE "userId" = ANY(${userIds}::uuid[]) GROUP BY "userId"
  `);

  return new Map(rows.map((row) => [row.userId, row]));
};

/** Investigative leads only. Historical arrays do not establish co-occurrence or ownership. */
export const findRelatedAccounts = async (
  prisma: Database, userId: unknown, cursor?: unknown,
): Promise<UserRelatedAccountsResponse> => {
  if (typeof userId !== 'string' || !isUuid(userId)
    || (cursor !== undefined && (typeof cursor !== 'string' || !isUuid(cursor)))) {
    throw new ExpectedError('Invalid user ID or related-account cursor');
  }

  const id = userId.toLowerCase();

  const target = await traced('relatedAccounts.target', () => prisma.user.findUnique({
    where: { id },
    select: {
      browserIds: true,
      fingerprints: true,
      ips: true,
    },
  }));

  if (!target) {
    throw new NotFoundError('User not found');
  }

  const observedTarget = await loadObservedIdentifiers(prisma, [id]);
  const identifiers = mergeIdentifiers(target, observedTarget.get(id));

  const identifierCounts = {
    browsers: identifiers.browserIds.length,
    fingerprints: identifiers.fingerprints.length,
    ips: identifiers.ips.length,
  };

  if (!identifierCounts.browsers && !identifierCounts.fingerprints && !identifierCounts.ips) {
    return {
      accounts: [],
      nextCursor: null,
      identifierCounts,
    };
  }

  // Historical browser IDs may predate signed UUID cookies. Only UUIDs can match observation rows.
  const observedBrowsers = identifiers.browserIds.filter(isUuid);

  const rows = await traced('relatedAccounts.candidates', () => prisma.user.findMany({
    where: {
      id: {
        not: id,
        ...(typeof cursor === 'string' ? { gt: cursor.toLowerCase() } : {}),
      },
      OR: [
        { browserIds: { hasSome: identifiers.browserIds } },
        { fingerprints: { hasSome: identifiers.fingerprints } },
        { ips: { hasSome: identifiers.ips } },
        {
          accountObservations: {
            some: {
              OR: [
                { browserId: { in: observedBrowsers } },
                { fingerprint: { in: identifiers.fingerprints } },
                { ip: { in: identifiers.ips } },
              ],
            },
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      bannedAt: true,
      banReason: true,
      browserIds: true,
      fingerprints: true,
      ips: true,
    },
    orderBy: { id: 'asc' },
    take: PAGE_SIZE + 1,
  }));

  const page = rows.slice(0, PAGE_SIZE);

  const observedPage = page.length
    ? await loadObservedIdentifiers(prisma, page.map((row) => row.id))
    : new Map<string, Identifiers>();

  const targetValues = {
    browserIds: new Set(identifiers.browserIds),
    fingerprints: new Set(identifiers.fingerprints),
    ips: new Set(identifiers.ips),
  };

  const sharedValues = (values: string[], key: keyof Identifiers) => (
    values.filter((value) => targetValues[key].has(value))
  );

  return {
    accounts: page.map(({
      browserIds, fingerprints, ips, ...account
    }) => {
      const merged = mergeIdentifiers({
        browserIds,
        fingerprints,
        ips,
      }, observedPage.get(account.id));

      const browsers = sharedValues(merged.browserIds, 'browserIds');
      const prints = sharedValues(merged.fingerprints, 'fingerprints');
      const addresses = sharedValues(merged.ips, 'ips');

      return {
        ...account,
        sharedBrowserIds: browsers.slice(0, 10),
        sharedFingerprints: prints.slice(0, 10),
        sharedIps: addresses.slice(0, 10),
        browserCount: browsers.length,
        fingerprintCount: prints.length,
        ipCount: addresses.length,
      };
    }),
    nextCursor: rows.length > PAGE_SIZE ? page[PAGE_SIZE - 1]?.id ?? null : null,
    identifierCounts,
  };
};
