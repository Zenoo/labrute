import {
  ExpectedError, isUuid, LimitError, NotFoundError,
} from '@labrute/core';
import type {
  MultipleAccountCaseDetailResponse, MultipleAccountCaseExemption, ReviewMultipleAccountCaseRequest,
  UserMultipleAccountsListResponse,
} from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { createHash, randomUUID } from 'node:crypto';
import type { MultipleAccountObservationGroup } from './accountObservations.js';

const RULE_VERSION = 1;
const PAGE_SIZE = 25;

const validId = (id: unknown): id is string => typeof id === 'string'
  && id.length === 64 && /^[a-f0-9]{64}$/.test(id);

const validStatus = (status: unknown) => typeof status === 'string'
  && ['open', 'dismissed', 'needs-action'].includes(status);

const summary = {
  id: true, ruleVersion: true, signal: true, browserId: true, fingerprint: true, ip: true,
  accountCount: true, threshold: true, confidence: true, firstSeen: true, lastSeen: true,
  windowStart: true, windowEnd: true, detectedAt: true,
  excludedCount: true, status: true, revision: true,
} satisfies Prisma.MultipleAccountCaseSelect;

/** Snapshot changed evidence only; retries cannot overwrite evidence or reviewer decisions. */
export const createMultipleAccountCases = async (
  prisma: Pick<PrismaClient, '$queryRaw' | 'multipleAccountCase'>,
  groups: MultipleAccountObservationGroup[],
  now = new Date(),
) => {
  const windowStart = new Date(now.getTime() - 7 * 86400000);
  let created = 0;

  for (let offset = 0; offset < groups.length; offset += 100) {
    const batch = groups.slice(offset, offset + 100).map((group) => ({
      ...group,
      id: createHash('sha256').update(JSON.stringify([
        RULE_VERSION, group.signal, group.browserId, group.fingerprint, group.ip,
        group.userIds, group.firstSeen, group.lastSeen,
      ])).digest('hex'),
    }));

    const exclusions = await prisma.$queryRaw<{
      id: string; count: number; exemptions: MultipleAccountCaseExemption[];
    }[]>`
      WITH candidates AS (
        SELECT * FROM jsonb_to_recordset(${JSON.stringify(batch.map((row) => ({
      id: row.id, browserId: row.browserId, fingerprint: row.fingerprint, ip: row.ip,
    })))}::jsonb) AS c(id text, "browserId" text, fingerprint text, ip text)
      ), excluded AS (
        SELECT DISTINCT c.id, e."userId"::text, e."browserId", e.reason, e."createdAt"
        FROM candidates c
        JOIN "AccountObservation" o ON
          (c."browserId" IS NOT NULL AND o."browserId" = c."browserId"::uuid)
          OR (c."browserId" IS NULL AND o.fingerprint = c.fingerprint AND o.ip = c.ip)
        JOIN "SharedBrowserExemption" e ON e."userId" = o."userId"
          AND e."browserId" = o."browserId"::text
        JOIN "User" u ON u.id = o."userId" AND u."bannedAt" IS NULL
        WHERE o."formatVersion" = 2
          AND o."lastSeen" >= (${windowStart}::timestamptz AT TIME ZONE 'UTC')
          AND o."lastSeen" <= (${now}::timestamptz AT TIME ZONE 'UTC')
      ), numbered AS (
        SELECT *, ROW_NUMBER() OVER (PARTITION BY id ORDER BY "userId", "browserId") AS n
        FROM excluded
      )
      SELECT id, COUNT(*)::int AS count,
        jsonb_agg(jsonb_build_object('userId', "userId", 'browserId', "browserId",
          'reason', reason, 'createdAt', "createdAt") ORDER BY n) FILTER (WHERE n <= 100) AS exemptions
      FROM numbered GROUP BY id
    `;

    const byId = new Map(exclusions.map((row) => [row.id, row]));

    const result = await prisma.multipleAccountCase.createMany({
      data: batch.map((row) => ({
        id: row.id, ruleVersion: RULE_VERSION, signal: row.signal,
        browserId: row.browserId, fingerprint: row.fingerprint, ip: row.ip,
        userIds: row.userIds, accountCount: row.userIds.length,
        threshold: row.signal === 'browser' ? 3 : 30, confidence: 'uncalibrated',
        firstSeen: row.firstSeen, lastSeen: row.lastSeen,
        windowStart, windowEnd: now, detectedAt: now,
        exemptions: (byId.get(row.id)?.exemptions ?? []) as unknown as Prisma.InputJsonValue,
        excludedCount: byId.get(row.id)?.count ?? 0,
      })),
      skipDuplicates: true,
    });

    created += result.count;
  }
  return created;
};

export const listMultipleAccountCases = async (
  prisma: PrismaClient, status: unknown = 'open', cursor?: unknown,
): Promise<UserMultipleAccountsListResponse> => {
  if (!validStatus(status) || (cursor !== undefined && !validId(cursor))) {
    throw new ExpectedError('Invalid case filter or cursor');
  }

  const rows = await prisma.multipleAccountCase.findMany({
    where: { status: String(status) }, select: summary,
    orderBy: [{ detectedAt: 'desc' }, { id: 'desc' }], take: PAGE_SIZE + 1,
    ...(typeof cursor === 'string' ? { cursor: { id: cursor }, skip: 1 } : {}),
  });

  return {
    cases: rows.slice(0, PAGE_SIZE),
    nextCursor: rows.length > PAGE_SIZE
      ? rows[PAGE_SIZE - 1]?.id ?? null
      : null
  };
};

export const getMultipleAccountCase = async (
  prisma: PrismaClient, id: unknown, offset: unknown = '0',
): Promise<MultipleAccountCaseDetailResponse> => {
  if (!validId(id) || typeof offset !== 'string' || !/^\d{1,8}$/.test(offset)) {
    throw new ExpectedError('Invalid case ID or account offset');
  }

  const index = Number(offset);

  const row = await prisma.multipleAccountCase.findUnique({
    where: { id },
    select: { ...summary, exemptions: true }
  });

  if (!row) throw new NotFoundError('Case not found');

  const [members, reviews] = await Promise.all([
    prisma.$queryRaw<{ id: string }[]>`
      SELECT member.id::text AS id FROM "MultipleAccountCase" c
      CROSS JOIN LATERAL unnest(c."userIds"[${index + 1}::int : ${index + PAGE_SIZE + 1}::int])
        WITH ORDINALITY AS member(id, position)
      WHERE c.id = ${id} ORDER BY member.position
    `,
    prisma.multipleAccountCaseReview.findMany({
      where: { caseId: id },
      orderBy: { revision: 'desc' }, take: 25
    }),
  ]);

  const selected = members.slice(0, PAGE_SIZE);

  const accounts = await prisma.user.findMany({
    where: { id: { in: selected.map((user) => user.id) } },
    select: { id: true, name: true, bannedAt: true },
  });

  const byId = new Map(accounts.map((user) => [user.id, user]));

  const { exemptions, ...caseSummary } = row;

  return {
    case: caseSummary, users: selected.map((user) => byId.get(user.id)
      ?? { id: user.id, name: null, bannedAt: null }),
    nextAccountOffset: members.length > PAGE_SIZE ? index + PAGE_SIZE : null,
    exemptions: exemptions as unknown as MultipleAccountCaseExemption[], reviews,
  };
};

export const reviewMultipleAccountCase = async (
  prisma: PrismaClient, id: unknown, actorId: string, input: ReviewMultipleAccountCaseRequest,
) => {
  const reason = typeof input?.reason === 'string' ? input.reason.trim() : '';

  if (!validId(id) || !isUuid(actorId) || !Number.isSafeInteger(input?.revision)
    || input.revision < 1 || input.revision > 2147483646
    || !validStatus(input?.decision) || !reason || reason.length > 500) {
    throw new ExpectedError('Case, revision, decision and reason (1-500 characters) are required');
  }

  return prisma.$transaction(async (tx) => {
    const updated = await tx.multipleAccountCase.updateMany({
      where: { id, revision: input.revision },
      data: { status: input.decision, revision: { increment: 1 } },
    });

    if (!updated.count) {
      const current = await tx.multipleAccountCase.findUnique({
        where: { id }, select: { revision: true },
      });

      if (!current) throw new NotFoundError('Case not found');

      const retry = current.revision === input.revision + 1
        ? await tx.multipleAccountCaseReview.findFirst({
          where: {
            caseId: id, revision: current.revision, reviewerId: actorId,
            decision: input.decision, reason,
          }
        }) : null;

      if (retry) return { revision: current.revision };

      throw new LimitError('Case changed. Reload before reviewing.');
    }

    await tx.multipleAccountCaseReview.create({
      data: {
        id: randomUUID(), caseId: id, revision: input.revision + 1,
        reviewerId: actorId, decision: input.decision, reason,
      }
    });

    return { revision: input.revision + 1 };
  });
};
