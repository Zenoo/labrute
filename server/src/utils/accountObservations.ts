import { isUuid } from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { createHash, randomUUID } from 'node:crypto';
import type { Request } from 'express';
import { getBrowserId } from './browserId.js';
import { getTlsFingerprints, parseFingerprint } from './fingerprintIdentity.js';
import { traced } from './trace.js';
import { getClientIp } from './clientIp.js';
import { createMultipleAccountCases } from './multipleAccountCases.js';
import type { MultipleAccountMetrics } from './multipleAccountScore.js';
import { enrichMultipleAccountGroups } from './multipleAccountSignals.js';

const sha256 = (value: string) => createHash('sha256').update(value).digest('hex');

type ObservationWrite = { recordedAt: number; pending?: Promise<unknown> };
const OBSERVATION_INTERVAL_MS = 5 * 60 * 1000;
const MAX_OBSERVATION_CACHE_ENTRIES = 10000;

// Store only fixed-size tuple hashes and write state. No request/account objects or background timers.
// Scope by database client so separate tenants/tests cannot suppress each other's observations.
const observationWrites = new WeakMap<PrismaClient, Map<string, ObservationWrite>>();

const browserActivity = new WeakMap<PrismaClient, Map<string, {
  userId: string;
  recordedAt: number;
}>>();

/** Only call after authentication and fingerprint-event validation have succeeded. */
export const recordAccountObservation = async (
  prisma: PrismaClient,
  userId: string,
  request: Pick<Request, 'headers' | 'socket' | 'security' | 'signedCookies'>,
  now = new Date(),
): Promise<void> => {
  const browserId = getBrowserId(request);
  const fingerprint = request.security?.fingerprint;
  const identity = parseFingerprint(fingerprint);

  if (!isUuid(userId) || !browserId || !identity || !fingerprint
    || !request.security?.validHeaders) {
    return;
  }

  const ip = getClientIp(request);
  const { ja3Hash, ja4Hash } = getTlsFingerprints(request);
  const observedDay = now.toISOString().slice(0, 10);
  const normalizedUserId = userId.toLowerCase();
  const normalizedBrowserId = browserId.toLowerCase();
  let activity = browserActivity.get(prisma);

  if (!activity) {
    activity = new Map();
    browserActivity.set(prisma, activity);
  }

  const previousAccount = activity.get(normalizedBrowserId);
  const accountChanged = previousAccount?.userId !== normalizedUserId;

  const id = sha256(JSON.stringify([
    identity.version, normalizedUserId, normalizedBrowserId, fingerprint,
    ip, ja3Hash, ja4Hash, observedDay,
  ]));

  let writes = observationWrites.get(prisma);

  if (!writes) {
    writes = new Map();
    observationWrites.set(prisma, writes);
  }

  const previous = writes.get(id);

  if (previous?.pending) {
    await previous.pending;

    // A different account may have been observed while this tuple's write was in flight.
    return recordAccountObservation(prisma, userId, request, now);
  }

  const elapsed = now.getTime() - (previous?.recordedAt ?? -Infinity);

  if (!accountChanged && elapsed >= 0 && elapsed < OBSERVATION_INTERVAL_MS) {
    return;
  }

  const entry: ObservationWrite = {
    recordedAt: Math.max(now.getTime(), previous?.recordedAt ?? -Infinity),
  };

  writes.delete(id);
  writes.set(id, entry);

  if (writes.size > MAX_OBSERVATION_CACHE_ENTRIES) {
    const oldest = writes.keys().next().value;

    if (oldest !== undefined) {
      writes.delete(oldest);
    }
  }

  // Sample ordinary activity once per tuple/interval; account changes bypass that throttle.
  // Advance on each successful sampled write so independent worker caches cannot compound time lag.
  entry.pending = traced('accountObservations.record', () => prisma.$executeRaw`
    WITH observation AS (
      INSERT INTO "AccountObservation" (
        "id", "userId", "browserId", "fingerprint", "visitorId", "ja3Hash", "ja4Hash", "ip",
        "formatVersion", "observedDay", "firstSeen", "lastSeen"
      ) VALUES (
        ${id}, ${normalizedUserId}::uuid, ${normalizedBrowserId}::uuid,
        ${fingerprint}, ${identity.visitorId}, ${ja3Hash}, ${ja4Hash}, ${ip}, ${identity.version},
        ${observedDay}::date,
        (${now}::timestamptz AT TIME ZONE 'UTC'), (${now}::timestamptz AT TIME ZONE 'UTC')
      )
      ON CONFLICT ("id") DO UPDATE SET "lastSeen" = EXCLUDED."lastSeen"
      WHERE "AccountObservation"."lastSeen" < EXCLUDED."lastSeen"
    )
    INSERT INTO "AccountActivitySample" (id, "userId", "browserId", fingerprint, ip, "observedAt")
    VALUES (${randomUUID()}::uuid, ${normalizedUserId}::uuid, ${normalizedBrowserId}::uuid,
      ${fingerprint}, ${ip}, (${now}::timestamptz AT TIME ZONE 'UTC'))
  `);

  try {
    await entry.pending;
    entry.pending = undefined;

    if (now.getTime() >= (activity.get(normalizedBrowserId)?.recordedAt ?? -Infinity)) {
      activity.delete(normalizedBrowserId);
      activity.set(normalizedBrowserId, {
        userId: normalizedUserId,
        recordedAt: now.getTime(),
      });
    }

    if (activity.size > MAX_OBSERVATION_CACHE_ENTRIES) {
      const oldest = activity.keys().next().value;

      if (oldest !== undefined) {
        activity.delete(oldest);
      }
    }
  } catch (error) {
    // Failed writes are never cached as observations; a subsequent request retries normally.
    if (writes.get(id) === entry) {
      writes.delete(id);
    }

    throw error;
  }
};

export type MultipleAccountObservationGroup = {
  signal: 'browser' | 'fingerprint-ip';
  browserId: string | null;
  fingerprint: string | null;
  ip: string | null;
  userIds: string[];
  firstSeen: Date;
  lastSeen: Date;
  metrics?: MultipleAccountMetrics;
};

export const findMultipleAccountObservationGroups = async (
  prisma: Pick<PrismaClient, '$queryRaw'>,
  now = new Date(),
) => {
  const since = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  return prisma.$queryRaw<MultipleAccountObservationGroup[]>`
    WITH recent AS (
      SELECT o."userId", o."browserId", o.fingerprint, o.ip, o."visitorId", o."observedDay",
        o."firstSeen", o."lastSeen"
      FROM "AccountObservation" o
      INNER JOIN "User" u ON u.id = o."userId"
      WHERE o."lastSeen" >= (${since}::timestamptz AT TIME ZONE 'UTC')
        AND o."lastSeen" <= (${now}::timestamptz AT TIME ZONE 'UTC')
        AND o."formatVersion" = 2 AND u."bannedAt" IS NULL
        AND NOT EXISTS (
          SELECT 1 FROM "SharedBrowserExemption" e
          WHERE e."userId" = o."userId" AND e."browserId" = o."browserId"::text
        )
    ), browser_users AS (
      SELECT "browserId", "userId", COUNT(DISTINCT "observedDay") AS days,
        COUNT(DISTINCT ip) AS networks
      FROM recent GROUP BY "browserId", "userId"
    ), browser_metrics AS (
      SELECT "browserId", COUNT(*)::int AS accounts,
        COUNT(*) FILTER (WHERE days >= 3)::int AS repeated,
        COUNT(*) FILTER (WHERE networks >= 2)::int AS mobile
      FROM browser_users GROUP BY "browserId"
    ), browser_visitors AS (
      SELECT "browserId", "visitorId", COUNT(DISTINCT "userId")::int AS accounts
      FROM recent GROUP BY "browserId", "visitorId"
    ), visitor_metrics AS (
      SELECT "browserId", MAX(accounts)::int AS accounts
      FROM browser_visitors GROUP BY "browserId"
    ), fingerprint_users AS (
      SELECT fingerprint, ip, "userId", COUNT(DISTINCT "observedDay") AS days
      FROM recent WHERE ip IS NOT NULL GROUP BY fingerprint, ip, "userId"
    ), fingerprint_metrics AS (
      SELECT fingerprint, ip, COUNT(*) FILTER (WHERE days >= 3)::int AS repeated
      FROM fingerprint_users GROUP BY fingerprint, ip
    ), fingerprint_browsers AS (
      SELECT fingerprint, ip, "browserId", COUNT(DISTINCT "userId")::int AS accounts
      FROM recent WHERE ip IS NOT NULL GROUP BY fingerprint, ip, "browserId"
    ), fingerprint_browser_metrics AS (
      SELECT fingerprint, ip, MAX(accounts)::int AS accounts
      FROM fingerprint_browsers GROUP BY fingerprint, ip
    ), candidates AS (
      SELECT 'browser' AS signal, "browserId"::text AS "browserId",
        NULL::text AS fingerprint, NULL::text AS ip,
        ARRAY_AGG(DISTINCT "userId"::text ORDER BY "userId"::text) AS "userIds",
        MIN("firstSeen") AS "firstSeen", MAX("lastSeen") AS "lastSeen"
      FROM recent
      GROUP BY "browserId"
      HAVING COUNT(DISTINCT "userId") > 3
      UNION ALL
      SELECT 'fingerprint-ip' AS signal, NULL::text AS "browserId", fingerprint, ip,
        ARRAY_AGG(DISTINCT "userId"::text ORDER BY "userId"::text) AS "userIds",
        MIN("firstSeen") AS "firstSeen", MAX("lastSeen") AS "lastSeen"
      FROM recent
      WHERE ip IS NOT NULL
        AND NOT EXISTS (SELECT 1 FROM "KnownFingerprint" k WHERE k.id = recent.fingerprint)
      GROUP BY fingerprint, ip
      HAVING COUNT(DISTINCT "userId") > 30
    )
    SELECT c.*,
      CASE WHEN c.signal = 'browser' THEN jsonb_build_object(
        'sharedBrowserAccounts', b.accounts,
        'repeatedAccounts', b.repeated,
        'sharedVisitorAccounts', v.accounts,
        'crossNetworkAccounts', b.mobile
      ) ELSE jsonb_build_object(
        'sharedBrowserAccounts', fb.accounts,
        'repeatedAccounts', f.repeated,
        'sharedVisitorAccounts', 0,
        'crossNetworkAccounts', 0
      ) END AS metrics
    FROM candidates c
    LEFT JOIN browser_metrics b ON b."browserId"::text = c."browserId"
    LEFT JOIN visitor_metrics v ON v."browserId"::text = c."browserId"
    LEFT JOIN fingerprint_metrics f ON f.fingerprint = c.fingerprint AND f.ip = c.ip
    LEFT JOIN fingerprint_browser_metrics fb ON fb.fingerprint = c.fingerprint AND fb.ip = c.ip
    ORDER BY c.signal, c."browserId", c.fingerprint, c.ip
  `;
};

/** Capture immutable detection evidence; the separate daily worker applies the sanction policy. */
export const reportMultipleAccountObservations = async (
  prisma: PrismaClient,
  logger: { log: (message: string) => void },
  now = new Date(),
) => {
  for (let attempt = 0; ; attempt++) {
    try {
      const { groups, created } = await prisma.$transaction(async (tx) => {
        const candidates = await findMultipleAccountObservationGroups(tx, now);

        await enrichMultipleAccountGroups(tx, candidates, now);
        const count = await createMultipleAccountCases(tx, candidates, now);

        return {
          groups: candidates,
          created: count,
        };
      }, {
        isolationLevel: 'RepeatableRead',
        timeout: 30000,
      });

      if (groups.length) {
        logger.log(`Multiple-account observations: ${groups.length} groups; ${created} new cases`);
      }

      return groups;
    } catch (error) {
      // Only retry this idempotent snapshot operation, never the surrounding daily job.
      if (attempt >= 2 || !(error instanceof Prisma.PrismaClientKnownRequestError)
        || error.code !== 'P2034') {
        throw error;
      }
    }
  }
};

export const cleanupAccountObservations = async (prisma: PrismaClient, now = new Date()) => {
  const cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const batchSize = 5000;
  let total = 0;
  let deleted;

  // Bound each transaction's locks and WAL work while ordinary requests remain available.
  do {
    deleted = await prisma.$executeRaw`
      DELETE FROM "AccountObservation"
      WHERE id IN (
        SELECT id FROM "AccountObservation"
        WHERE "lastSeen" < (${cutoff}::timestamptz AT TIME ZONE 'UTC')
        ORDER BY "lastSeen", id
        LIMIT ${batchSize}
        FOR UPDATE SKIP LOCKED
      )
    `;
    total += deleted;
  } while (deleted === batchSize);

  do {
    deleted = await prisma.$executeRaw`
      DELETE FROM "AccountActivitySample"
      WHERE id IN (
        SELECT id FROM "AccountActivitySample"
        WHERE "observedAt" < (${cutoff}::timestamptz AT TIME ZONE 'UTC')
        ORDER BY "observedAt", id LIMIT ${batchSize} FOR UPDATE SKIP LOCKED
      )
    `;
  } while (deleted === batchSize);

  // Preserve the existing return value: number of expired daily observation rows.
  return total;
};
