import { ForbiddenError, isUuid } from '@labrute/core';
import {
  createHash, createHmac, randomUUID, timingSafeEqual
} from 'node:crypto';
import type { Request } from 'express';
import { GLOBAL } from '../context.js';
import type { PrismaClient } from '@labrute/prisma';
import { getBrowserId } from './browserId.js';
import { parseFingerprint } from './fingerprintIdentity.js';

const EVENT_LIFETIME_SECONDS = 15 * 60;
const PURPOSE = 'fingerprint-registration';
const invalidEvent = () => new ForbiddenError('Invalid or expired fingerprint event. Reload the page.');

export type VerifiedFingerprintEvent = {
  v: 2;
  purpose: typeof PURPOSE;
  fingerprint: string;
  browserHash: string;
  issuedAt: number;
  expiresAt: number;
  nonce: string;
  payloadHash: string;
};

const signingKey = () => {
  const key = createHmac('sha256', GLOBAL.config.fpAesSecret)
    .update('labrute:fingerprint-event:v2').digest();
  const id = createHash('sha256').update(key).digest('hex').slice(0, 12);
  return { id, key };
};

const browserHash = (id: string) => createHash('sha256')
  .update(`labrute:fingerprint-browser:${id.toLowerCase()}`).digest('hex');

export const issueFingerprintEvent = (
  fingerprint: string,
  browserId: string,
  fullEncodedPayload: string,
  now = Date.now(),
) => {
  const key = signingKey();

  const issuedAt = Math.floor(now / 1000);
  const claims: VerifiedFingerprintEvent = {
    v: 2,
    purpose: PURPOSE,
    fingerprint,
    browserHash: browserHash(browserId),
    issuedAt,
    expiresAt: issuedAt + EVENT_LIFETIME_SECONDS,
    nonce: randomUUID(),
    payloadHash: createHash('sha256').update(fullEncodedPayload).digest('hex'),
  };

  const body = Buffer.from(JSON.stringify(claims)).toString('base64url');
  const signed = `fpe2.${key.id}.${body}`;
  const signature = createHmac('sha256', key.key).update(signed).digest('base64url');
  return `${signed}.${signature}`;
};

/** Browser-bound retries are idempotent until expiry; this receipt is not an account credential. */
export const verifyFingerprintEvent = (
  token: unknown,
  request: Pick<Request, 'signedCookies' | 'security'>,
  now = Date.now(),
): VerifiedFingerprintEvent => {
  if (typeof token !== 'string' || token.length > 2048) throw invalidEvent();

  const parts = token.split('.');
  const [version, keyId, body, signature] = parts;

  if (parts.length !== 4 || version !== 'fpe2' || !keyId || !/^[a-f0-9]{12}$/.test(keyId)
    || !body || !/^[A-Za-z0-9_-]+$/.test(body)
    || !signature || signature.length !== 43
    || !/^[A-Za-z0-9_-]+$/.test(signature)) {
    throw invalidEvent();
  }

  const key = signingKey();

  if (key.id !== keyId) throw invalidEvent();

  const supplied = Buffer.from(signature, 'base64url');
  const expected = createHmac('sha256', key.key).update(`fpe2.${keyId}.${body}`).digest();

  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)
    || supplied.toString('base64url') !== signature) {
    throw invalidEvent();
  }

  let claims: VerifiedFingerprintEvent;
  try {
    claims = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as VerifiedFingerprintEvent;
  } catch {
    throw invalidEvent();
  }

  const identity = parseFingerprint(claims?.fingerprint);
  const browserId = getBrowserId(request)?.toLowerCase();
  const seconds = Math.floor(now / 1000);

  if (!claims || claims.v !== 2 || claims.purpose !== PURPOSE || identity?.version !== 2
    || !browserId || claims.browserHash !== browserHash(browserId)
    || claims.fingerprint !== request.security?.fingerprint
    || !Number.isSafeInteger(claims.issuedAt) || !Number.isSafeInteger(claims.expiresAt)
    || claims.expiresAt - claims.issuedAt !== EVENT_LIFETIME_SECONDS
    || claims.issuedAt > seconds + 30 || claims.expiresAt <= seconds
    || typeof claims.nonce !== 'string' || claims.nonce.length !== 36 || !isUuid(claims.nonce)
    || typeof claims.payloadHash !== 'string' || claims.payloadHash.length !== 64
    || !/^[a-f0-9]{64}$/.test(claims.payloadHash)) {
    throw invalidEvent();
  }

  return claims;
};

/** Register only after validating the receipt, account credentials and current restrictions. */
export const registerFingerprintIdentity = (
  prisma: PrismaClient,
  userId: string,
  fingerprint: string,
) => {
  if (!isUuid(userId) || parseFingerprint(fingerprint)?.version !== 2) {
    throw invalidEvent();
  }

  return prisma.$executeRaw`
    UPDATE "User" SET fingerprints = array_append(fingerprints, ${fingerprint})
    WHERE id = ${userId}::uuid AND "bannedAt" IS NULL
      AND NOT (${fingerprint} = ANY(fingerprints))
  `;
};
