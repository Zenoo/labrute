import type { PrismaClient } from '@labrute/prisma';
import type { MultipleAccountObservationGroup } from './accountObservations.js';

type Name = { userId: string; name: string; kind: 'user' | 'brute' };

const genericNames = new Set(['account', 'brute', 'fighter', 'guest', 'player', 'test', 'user']);

/** Conservative name families: punctuation, accents and numeric suffixes are not identity. */
export const normalizeAccountName = (name: string) => {
  const stem = name.normalize('NFKD').toLowerCase().replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]/gu, '').replace(/\p{N}+$/u, '');

  if (stem.length > 64 || (stem.match(/\p{L}/gu)?.length ?? 0) < 5 || genericNames.has(stem)) {
    return null;
  }

  return stem;
};

export const findSharedNameFamily = (names: Name[], kind: Name['kind']) => {
  const families = new Map<string, { owners: Set<string>; examples: string[] }>();

  for (const entry of names) {
    if (entry.kind !== kind) {
      continue;
    }

    const stem = normalizeAccountName(entry.name);

    if (!stem) {
      continue;
    }

    let family = families.get(stem);

    if (!family) {
      family = {
        owners: new Set(),
        examples: [],
      };
      families.set(stem, family);
    }

    if (!family.owners.has(entry.userId) && family.examples.length < 3) {
      family.examples.push(`${entry.userId}: ${entry.name}`);
    }

    family.owners.add(entry.userId);
  }

  // A stable tie break keeps unchanged evidence from creating different snapshots.
  const best = [...families.entries()].sort(([a, left], [b, right]) => (
    right.owners.size - left.owners.size || a.localeCompare(b)
  ))[0]?.[1];

  return {
    accounts: best && best.owners.size > 1 ? best.owners.size : 0,
    examples: best && best.owners.size > 1 ? best.examples : [],
  };
};

/** Enrich only detected groups, inside the detection transaction's consistent snapshot. */
export const enrichMultipleAccountGroups = async (
  prisma: Pick<PrismaClient, '$queryRaw'>,
  groups: MultipleAccountObservationGroup[],
  now: Date,
) => {
  const since = new Date(now.getTime() - 7 * 86400000);

  for (const group of groups) {
    if (!group.metrics) {
      continue;
    }

    const names = await prisma.$queryRaw<Name[]>`
      WITH members AS (
        SELECT id FROM "User" WHERE id = ANY(${group.userIds}::uuid[])
      )
      SELECT u.id::text AS "userId", u.name, 'user' AS kind
      FROM "User" u JOIN members m ON m.id = u.id
      UNION ALL
      SELECT m.id::text AS "userId", b.name, 'brute' AS kind
      FROM members m CROSS JOIN LATERAL (
        SELECT name FROM "Brute" WHERE "userId" = m.id AND "deletedAt" IS NULL
        ORDER BY "createdAt", id LIMIT 10
      ) b
      ORDER BY "userId", kind, name
    `;

    const userNames = findSharedNameFamily(names, 'user');
    const bruteNames = findSharedNameFamily(names, 'brute');

    const [switches] = await prisma.$queryRaw<{ accounts: number }[]>`
      WITH browsers AS (
        SELECT DISTINCT "browserId" FROM "AccountObservation"
        WHERE "userId" = ANY(${group.userIds}::uuid[]) AND "formatVersion" = 2
          AND "lastSeen" >= (${since}::timestamptz AT TIME ZONE 'UTC')
          AND "lastSeen" <= (${now}::timestamptz AT TIME ZONE 'UTC')
          AND ((${group.browserId}::uuid IS NOT NULL AND "browserId" = ${group.browserId}::uuid)
            OR (${group.browserId}::uuid IS NULL AND fingerprint = ${group.fingerprint} AND ip = ${group.ip}))
      ), instants AS (
        -- Simultaneous different-account requests are ambiguous; keep a boundary, not a switch.
        SELECT s."browserId", s."observedAt",
          CASE WHEN COUNT(s."userId") = COUNT(*) AND COUNT(DISTINCT s."userId") = 1
            THEN MIN(s."userId"::text) END AS "userId",
          CASE WHEN COUNT(DISTINCT s.fingerprint) = 1 THEN MIN(s.fingerprint) END AS fingerprint,
          CASE WHEN COUNT(s.ip) = COUNT(*) AND COUNT(DISTINCT s.ip) = 1 THEN MIN(s.ip) END AS ip
        FROM "AccountActivitySample" s JOIN browsers b ON b."browserId" = s."browserId"
        WHERE s."observedAt" >= (${since}::timestamptz AT TIME ZONE 'UTC')
          AND s."observedAt" <= (${now}::timestamptz AT TIME ZONE 'UTC')
        GROUP BY s."browserId", s."observedAt"
      ), timeline AS (
        SELECT *, LAG("userId") OVER w AS previous,
          LAG("observedAt") OVER w AS "previousAt",
          LAG(fingerprint) OVER w AS "previousFingerprint", LAG(ip) OVER w AS "previousIp"
        FROM instants WINDOW w AS (PARTITION BY "browserId" ORDER BY "observedAt")
      ), rapid AS (
        SELECT t.* FROM timeline t
        WHERE t."userId" <> t.previous AND t."observedAt" - t."previousAt" <= INTERVAL '10 minutes'
          AND t."userId"::uuid = ANY(${group.userIds}::uuid[])
          AND t.previous::uuid = ANY(${group.userIds}::uuid[])
          AND (${group.browserId}::uuid IS NOT NULL OR (
            t.fingerprint = ${group.fingerprint} AND t."previousFingerprint" = ${group.fingerprint}
            AND t.ip = ${group.ip} AND t."previousIp" = ${group.ip}
          ))
          AND NOT EXISTS (
            SELECT 1 FROM "SharedBrowserExemption" e WHERE e."browserId" = t."browserId"::text
              AND e."userId"::text IN (t."userId", t.previous)
          )
      ), involvement AS (
        SELECT "userId" FROM rapid UNION ALL SELECT previous FROM rapid
      ), supported AS (
        SELECT "userId" FROM involvement GROUP BY "userId" HAVING COUNT(*) >= 3
      )
      SELECT COUNT(*)::int AS accounts FROM supported
    `;

    Object.assign(group.metrics, {
      switchingAccounts: switches?.accounts ?? 0,
      similarUserNames: userNames.accounts,
      similarBruteNames: bruteNames.accounts,
      userNameExamples: userNames.examples,
      bruteNameExamples: bruteNames.examples,
    });
  }
};
