import { isUuid } from '@labrute/core';
import type { PrismaClient } from '@labrute/prisma';
import { createHash } from 'node:crypto';
import type { Request } from 'express';
import { getBrowserId } from './browserId.js';
import { getTlsFingerprints, parseFingerprint } from './fingerprintIdentity.js';
import { traced } from './trace.js';
import { getClientIp } from './clientIp.js';

const sha256 = (value: string) => createHash('sha256').update(value).digest('hex');

type ObservationWrite = { recordedAt: number; pending?: Promise<unknown> };
const OBSERVATION_INTERVAL_MS = 5 * 60 * 1000;
const MAX_OBSERVATION_CACHE_ENTRIES = 10000;

// Store only fixed-size tuple hashes and write state. No request/account objects or background timers.
// Scope by database client so separate tenants/tests cannot suppress each other's observations.
const observationWrites = new WeakMap<PrismaClient, Map<string, ObservationWrite>>();

/** Only call after authentication and fingerprint-event validation have succeeded. */
export const recordAccountObservation = async (
  prisma: PrismaClient,
  userId: string,
  request: Pick<Request, 'headers' | 'socket' | 'security' | 'signedCookies'>,
  now = new Date(),
) => {
  const browserId = getBrowserId(request);
  const fingerprint = request.security?.fingerprint;
  const identity = parseFingerprint(fingerprint);

  if (!isUuid(userId) || !browserId || !identity || !fingerprint
    || !request.security?.validHeaders) return;

  const ip = getClientIp(request);
  const { ja3Hash, ja4Hash } = getTlsFingerprints(request);
  const observedDay = now.toISOString().slice(0, 10);
  const normalizedUserId = userId.toLowerCase();
  const normalizedBrowserId = browserId.toLowerCase();
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
    return;
  }

  const elapsed = now.getTime() - (previous?.recordedAt ?? -Infinity);

  if (elapsed >= 0 && elapsed < OBSERVATION_INTERVAL_MS) return;

  const entry: ObservationWrite = {
    recordedAt: Math.max(now.getTime(), previous?.recordedAt ?? -Infinity),
  };

  writes.delete(id);
  writes.set(id, entry);

  if (writes.size > MAX_OBSERVATION_CACHE_ENTRIES) {
    const oldest = writes.keys().next().value;
    if (oldest !== undefined) writes.delete(oldest);
  }

  // One writer per tuple/process/interval. Database conflicts still coordinate separate processes.
  // Advance on each successful sampled write so independent worker caches cannot compound time lag.
  entry.pending = traced('accountObservations.record', () => prisma.$executeRaw`
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
  `);

  try {
    await entry.pending;
    entry.pending = undefined;
  } catch (error) {
    // Failed writes are never cached as observations; a subsequent request retries normally.
    if (writes.get(id) === entry) writes.delete(id);
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
};

export const findMultipleAccountObservationGroups = async (
  prisma: PrismaClient,
  now = new Date(),
) => {
  const since = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  return prisma.$queryRaw<MultipleAccountObservationGroup[]>`
    WITH recent AS (
      SELECT o."userId", o."browserId", o.fingerprint, o.ip, o."firstSeen", o."lastSeen"
      FROM "AccountObservation" o
      INNER JOIN "User" u ON u.id = o."userId"
      WHERE o."lastSeen" >= (${since}::timestamptz AT TIME ZONE 'UTC')
        AND o."lastSeen" <= (${now}::timestamptz AT TIME ZONE 'UTC')
        AND o."formatVersion" = 2 AND u."bannedAt" IS NULL
        AND NOT EXISTS (
          SELECT 1 FROM "SharedBrowserExemption" e
          WHERE e."userId" = o."userId" AND e."browserId" = o."browserId"::text
        )
    )
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
    ORDER BY signal, "browserId", fingerprint, ip
  `;
};

/** Report only until calibration and exemption/sanction work in steps 3 and 6 is complete. */
export const reportMultipleAccountObservations = async (
  prisma: PrismaClient,
  logger: { log: (message: string) => void },
  now = new Date(),
) => {
  const groups = await findMultipleAccountObservationGroups(prisma, now);
  if (groups.length) logger.log(`Multiple-account observations (report only): ${JSON.stringify(groups)}`);
  return groups;
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

  return total;
};
