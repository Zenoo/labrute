import { BanReason } from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import type { MultipleAccountCase } from '@labrute/prisma';
import { lockMultipleAccountPolicy } from './multipleAccountPolicyLock.js';
import { banUserInTransaction } from './user/banUser.js';
import { lockAccountSanction } from './user/accountSanctionLock.js';

const POLICY_VERSION = 1;

type Case = Pick<MultipleAccountCase, 'id' | 'signal' | 'browserId' | 'fingerprint' | 'ip'
  | 'ruleVersion' | 'revision' | 'status' | 'threshold' | 'detectedAt' | 'appealCode'>;

const supported = (row: Case) => row.ruleVersion === 1 && row.revision === 1 && row.status === 'open'
  && ((row.signal === 'browser' && row.threshold === 3 && row.browserId)
    || (row.signal === 'fingerprint-ip' && row.threshold === 30 && row.fingerprint && row.ip));

const lockCase = async (tx: Prisma.TransactionClient, id: string) => {
  const [row] = await tx.$queryRaw<Case[]>`
    SELECT id, signal, "browserId", fingerprint, ip, "ruleVersion", revision, status, threshold, "detectedAt", "appealCode"
    FROM "MultipleAccountCase" WHERE id = ${id} FOR UPDATE
  `;
  return row;
};

// A tuple must still be observed recently and must still be non-exempt at execution time.
const evidence = (row: Case, now: Date) => Prisma.sql`
  EXISTS (
    SELECT 1 FROM "AccountObservation" o WHERE o."userId" = u.id AND o."formatVersion" = 2
      AND o."lastSeen" >= (${new Date(now.getTime() - 7 * 86400000)}::timestamptz AT TIME ZONE 'UTC')
      AND o."lastSeen" <= (${now}::timestamptz AT TIME ZONE 'UTC')
      AND ((${row.signal} = 'browser' AND o."browserId" = ${row.browserId}::uuid)
        OR (${row.signal} = 'fingerprint-ip' AND o.fingerprint = ${row.fingerprint} AND o.ip = ${row.ip}))
      AND NOT EXISTS (SELECT 1 FROM "SharedBrowserExemption" e
        WHERE e."userId" = o."userId" AND e."browserId" = o."browserId"::text)
  ) AND (${row.signal} <> 'fingerprint-ip' OR NOT EXISTS (
    SELECT 1 FROM "KnownFingerprint" k WHERE k.id = ${row.fingerprint}
  )) AND NOT EXISTS (
    SELECT 1 FROM "SecurityAction" a WHERE a."subjectType" = 'account' AND a."subjectId" = u.id::text
      AND a.action = 'unban' AND a."createdAt" >= ${row.detectedAt}
  )
`;

// Overlapping cases must not lose their qualifying cohort as the same run bans shared members.
const activeOrAutomaticallyBanned = (row: Case) => Prisma.sql`
  u."bannedAt" IS NULL OR EXISTS (
    SELECT 1 FROM "MultipleAccountCaseAction" completed
    WHERE completed."userId" = u.id AND completed.status = 'banned'
      AND completed."policyVersion" = ${POLICY_VERSION} AND completed."updatedAt" >= ${row.detectedAt}
  )
`;

const prepare = async (
  prisma: PrismaClient, id: string, now: Date,
) => prisma.$transaction(async (tx) => {
  await lockMultipleAccountPolicy(tx);

  const row = await lockCase(tx, id);

  if (!row || !supported(row)) return;

  // Freeze a qualified cohort once. Successful bans must not shrink the rule count mid-batch.
  await tx.$executeRaw`
    WITH eligible AS (
      SELECT u.id FROM "User" u JOIN "MultipleAccountCase" c ON c.id = ${id}
      WHERE u.id = ANY(c."userIds") AND (${activeOrAutomaticallyBanned(row)})
        AND NOT u.admin AND NOT u.moderator
        AND ${evidence(row, now)}
    )
    INSERT INTO "MultipleAccountCaseAction"
      ("caseId", "userId", "policyVersion", status, reason, attempts, "createdAt", "updatedAt")
    SELECT ${id}, id, ${POLICY_VERSION}, 'pending', 'Queued by automatic threshold policy', 0, ${now}, ${now}
    FROM eligible WHERE (SELECT COUNT(*) FROM eligible) > ${row.threshold}
    ON CONFLICT ("caseId", "userId") DO NOTHING
  `;
});

const execute = async (
  prisma: PrismaClient, caseId: string, userId: string, clock: () => Date,
) => prisma.$transaction(async (tx) => {
  await lockMultipleAccountPolicy(tx);

  const row = await lockCase(tx, caseId);

  if (!row) return;

  await lockAccountSanction(tx, userId);

  const job = await tx.multipleAccountCaseAction.findUnique({
    where: { caseId_userId: { caseId, userId } },
  });

  if (!job || !['pending', 'failed'].includes(job.status)) return;

  const now = clock();
  let reason = 'Stopped by a case review';
  let status = 'skipped';

  if (supported(row)) {
    const [cohort] = await tx.$queryRaw<{ count: number }[]>`
      SELECT COUNT(*)::int AS count FROM (
        SELECT j."userId" FROM "MultipleAccountCaseAction" j
        JOIN "User" u ON u.id = j."userId"
        WHERE j."caseId" = ${caseId}
          AND (j.status IN ('pending', 'failed', 'banned') OR u."bannedAt" IS NOT NULL)
          AND (${activeOrAutomaticallyBanned(row)})
          AND NOT u.admin AND NOT u.moderator AND ${evidence(row, now)}
        LIMIT ${row.threshold + 1}
      ) qualified
    `;

    if (!cohort || cohort.count <= row.threshold) {
      const skipped = await tx.multipleAccountCaseAction.updateMany({
        where: {
          caseId,
          status: { in: ['pending', 'failed'] }
        },
        data: {
          status: 'skipped',
          reason: 'Current eligible cohort no longer exceeds the automatic threshold',
          updatedAt: now
        }
      });

      return { banned: 0, skipped: skipped.count };
    }

    // Serialize with profile edits/OAuth and manual account sanctions before checking eligibility.
    await tx.$queryRaw`SELECT id FROM "User" WHERE id = ${userId}::uuid FOR UPDATE`;

    const [eligible] = await tx.$queryRaw<{ id: string }[]>`
      SELECT u.id FROM "User" u WHERE u.id = ${userId}::uuid AND u."bannedAt" IS NULL
        AND NOT u.admin AND NOT u.moderator AND ${evidence(row, now)}
    `;

    reason = 'No longer eligible: approval, exception, staff, previous ban/unban, stale evidence or deletion';

    if (eligible) {
      reason = `Automatic policy v${POLICY_VERSION}: ${row.signal} > ${row.threshold}; case ${caseId}`;

      await banUserInTransaction(
        tx, userId, BanReason.MULTIPLE_ACCOUNTS, undefined, reason, row.appealCode,
      );

      status = 'banned';
    }
  }

  await tx.multipleAccountCaseAction.update({
    where: { caseId_userId: { caseId, userId } },
    data: { status, reason, updatedAt: now, attempts: { increment: 1 } }
  });

  return { banned: status === 'banned' ? 1 : 0, skipped: status === 'skipped' ? 1 : 0 };
}, { timeout: 30000 });

const recordFailure = async (
  prisma: PrismaClient, caseId: string, userId: string, error: unknown, now: Date,
) => {
  const code = error instanceof Prisma.PrismaClientKnownRequestError ? error.code : 'unexpected failure';

  await prisma.$transaction(async (tx) => {
    await lockMultipleAccountPolicy(tx);
    await lockCase(tx, caseId);

    // Another worker may already have committed success, or an admin may have cancelled the job.
    await tx.multipleAccountCaseAction.updateMany({
      where: {
        caseId, userId,
        status: { in: ['pending', 'failed'] }
      }, data: {
        status: 'failed',
        reason: `Ban transaction failed (${code}); retry pending`, updatedAt: now,
        attempts: { increment: 1 }
      }
    });
  });

  return code;
};

const processCase = async (
  prisma: PrismaClient, id: string, logger: { error: (message: string) => void }, clock: () => Date,
) => {
  const result = { banned: 0, skipped: 0, failed: 0 };

  await prepare(prisma, id, clock());

  let cursor: string | undefined;

  while (true) {
    const jobs = await prisma.multipleAccountCaseAction.findMany({
      where: {
        caseId: id,
        status: { in: ['pending', 'failed'] }, ...(cursor ? { userId: { gt: cursor } } : {})
      },
      select: { userId: true }, orderBy: { userId: 'asc' }, take: 100
    });

    if (!jobs.length) break;

    for (const job of jobs) {
      try {
        for (let attempt = 0; ; attempt++) {
          try {
            const action = await execute(prisma, id, job.userId, clock);

            if (action) {
              result.banned += action.banned;
              result.skipped += action.skipped;
            }
            break;
          }
          catch (error) {
            if (attempt >= 2 || !(error instanceof Prisma.PrismaClientKnownRequestError)
              || error.code !== 'P2034') throw error;
          }
        }
      } catch (error) {
        result.failed++;
        const code = await recordFailure(prisma, id, job.userId, error, clock());
        logger.error(`Automatic case ${id}, account ${job.userId}: ${code}; retry pending`);
      }
    }

    cursor = jobs[jobs.length - 1]?.userId;
  }

  await prisma.$transaction(async (tx) => {
    const row = await lockCase(tx, id);

    if (!row || !supported(row)) return;

    const counts = await tx.multipleAccountCaseAction.groupBy({
      by: ['status'], where: { caseId: id },
      _count: { _all: true }
    });

    const totals = new Map(counts.map((entry) => [entry.status, entry._count._all]));

    if (totals.has('pending') || totals.has('failed')) return;

    const outcome = `${totals.get('banned') ?? 0} banned, ${totals.get('skipped') ?? 0} skipped.`;
    const explanation = counts.length ? '' : ' Current eligible cohort no longer exceeds threshold.';

    await tx.multipleAccountCase.update({
      where: { id }, data: {
        status: 'processed', revision: { increment: 1 }, automaticAt: clock(),
        automaticNote: `Policy v${POLICY_VERSION}: ${outcome}${explanation}`,
      }
    });
  });

  return result;
};

/** Daily bounded worker. There is no enforcement work on normal authenticated requests. */
export const enforceMultipleAccountCases = async (
  prisma: PrismaClient,
  logger: { log: (message: string) => void; error: (message: string) => void },
  clock = () => new Date(),
) => {
  let cursor: string | undefined;
  let processed = 0;
  const totals = { banned: 0, skipped: 0, failed: 0 };

  while (true) {
    const cases = await prisma.multipleAccountCase.findMany({
      where: {
        status: 'open', revision: 1,
        ruleVersion: 1, ...(cursor ? { id: { gt: cursor } } : {})
      }, select: { id: true },
      orderBy: { id: 'asc' }, take: 25
    });

    if (!cases.length) break;

    let next = 0;

    const outcomes = await Promise.allSettled(Array.from({ length: 2 }, async () => {
      while (next < cases.length) {
        const row = cases[next++];

        if (row) {
          const result = await processCase(prisma, row.id, logger, clock);
          totals.banned += result.banned;
          totals.skipped += result.skipped;
          totals.failed += result.failed;
          processed++;
        }
      }
    }));

    const failed = outcomes.find((outcome) => outcome.status === 'rejected');

    if (failed?.status === 'rejected') throw failed.reason;

    cursor = cases[cases.length - 1]?.id;
  }

  logger.log(`Automatic multiple-account policy v${POLICY_VERSION}: ${processed} cases processed; ${totals.banned} banned, ${totals.skipped} skipped, ${totals.failed} failed`);

  return processed;
};
