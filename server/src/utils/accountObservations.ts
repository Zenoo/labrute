import {
  FORWARDED_FOR_HEADER, isUuid, REAL_IP_HEADER
} from '@labrute/core';
import type { PrismaClient } from '@labrute/prisma';
import { createHash } from 'node:crypto';
import { isIP } from 'node:net';
import type { Request } from 'express';
import { getBrowserId } from './browserId.js';
import { isFingerprintFormatValid } from './fingerprint.js';
import { traced } from './trace.js';

export const normalizeObservationIp = (value: string | undefined) => {
  const ip = value?.split(',')[0]?.trim();

  if (!ip || ip.includes('%') || !isIP(ip)) return null;
  if (isIP(ip) === 4) return ip;

  const canonical = new URL(`http://[${ip}]/`).hostname.slice(1, -1);
  const mapped = /^::ffff:([a-f0-9]+):([a-f0-9]+)$/.exec(canonical);
  if (!mapped) return canonical;
  const high = parseInt(mapped[1] ?? '', 16);
  const low = parseInt(mapped[2] ?? '', 16);
  return `${Math.floor(high / 256)}.${high % 256}.${Math.floor(low / 256)}.${low % 256}`;
};

const sha256 = (value: string) => createHash('sha256').update(value).digest('hex');

const hashHeader = (value: unknown) => (typeof value === 'string' && value.trim()
  ? sha256(value.trim()) : null);

/** Only call after authentication and fingerprint-event validation have succeeded. */
export const recordAccountObservation = async (
  prisma: PrismaClient,
  userId: string,
  request: Pick<Request, 'headers' | 'socket' | 'security' | 'signedCookies'>,
  now = new Date(),
) => {
  const browserId = getBrowserId(request);
  const fingerprint = request.security?.fingerprint;
  if (!isUuid(userId) || !browserId || !isFingerprintFormatValid(fingerprint)
    || !request.security?.validHeaders) return;

  // Keep the current IP source precedence. Normalization does not establish proxy trust (plan step 5).
  const forwarded = request.headers[FORWARDED_FOR_HEADER];
  const real = request.headers[REAL_IP_HEADER];
  const ip = normalizeObservationIp(
    typeof forwarded === 'string' && forwarded.trim() ? forwarded
      : typeof real === 'string' && real.trim() ? real : request.socket.remoteAddress,
  );
  const ja3Hash = hashHeader(request.headers['et-ja3']);
  const ja4Hash = hashHeader(request.headers['et-ja4']);
  const observedDay = now.toISOString().slice(0, 10);
  const normalizedUserId = userId.toLowerCase();
  const normalizedBrowserId = browserId.toLowerCase();
  const id = sha256(JSON.stringify([
    1, normalizedUserId, normalizedBrowserId, fingerprint, ip, ja3Hash, ja4Hash, observedDay,
  ]));

  // Database conflict handling bounds rows and handles concurrent requests/processes.
  // Throttle lastSeen writes to once per tuple per five minutes; firstSeen is retained.
  await traced('accountObservations.record', () => prisma.$executeRaw`
    INSERT INTO "AccountObservation" (
      "id", "userId", "browserId", "fingerprint", "visitorId", "ja3Hash", "ja4Hash", "ip",
      "formatVersion", "observedDay", "firstSeen", "lastSeen"
    ) VALUES (
      ${id}, ${normalizedUserId}::uuid, ${normalizedBrowserId}::uuid,
      ${fingerprint}, ${fingerprint.slice(0, 32)}, ${ja3Hash}, ${ja4Hash}, ${ip}, 1,
      ${observedDay}::date,
      (${now}::timestamptz AT TIME ZONE 'UTC'), (${now}::timestamptz AT TIME ZONE 'UTC')
    )
    ON CONFLICT ("id") DO UPDATE SET "lastSeen" = EXCLUDED."lastSeen"
    WHERE "AccountObservation"."lastSeen" <= EXCLUDED."lastSeen" - INTERVAL '5 minutes'
  `);
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
      SELECT o.*, u."sharedBrowserId"
      FROM "AccountObservation" o
      INNER JOIN "User" u ON u.id = o."userId"
      WHERE o."lastSeen" >= (${since}::timestamptz AT TIME ZONE 'UTC')
        AND o."lastSeen" <= (${now}::timestamptz AT TIME ZONE 'UTC')
        AND o."formatVersion" = 1 AND u."bannedAt" IS NULL
    )
    SELECT 'browser' AS signal, "browserId"::text AS "browserId",
      NULL::text AS fingerprint, NULL::text AS ip,
      ARRAY_AGG(DISTINCT "userId"::text ORDER BY "userId"::text) AS "userIds",
      MIN("firstSeen") AS "firstSeen", MAX("lastSeen") AS "lastSeen"
    FROM recent
    WHERE "sharedBrowserId" IS DISTINCT FROM "browserId"::text
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

export const cleanupAccountObservations = (prisma: PrismaClient, now = new Date()) => {
  const cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  return prisma.$executeRaw`
    DELETE FROM "AccountObservation"
    WHERE "lastSeen" < (${cutoff}::timestamptz AT TIME ZONE 'UTC')
  `;
};
