import { createHash } from 'node:crypto';
import type { Request } from 'express';

const CURRENT_FORMAT = /^v2:([a-f0-9]{32}):(ja3|ja4):([a-f0-9]{64})$/;
const MISSING_TLS_FORMAT = /^v2:([a-f0-9]{32}):none$/;

export const parseFingerprint = (fingerprint: unknown) => {
  if (typeof fingerprint !== 'string') return null;

  const match = fingerprint.length === 104 ? CURRENT_FORMAT.exec(fingerprint)
    : fingerprint.length === 40 ? MISSING_TLS_FORMAT.exec(fingerprint) : null;

  return match ? {
    version: 2,
    visitorId: match[1] ?? '',
    tlsSource: match[2] ?? 'none',
    tlsHash: match[3] ?? null,
  } : null;
};

export const isFingerprintFormatValid = (fingerprint: unknown): fingerprint is string => (
  parseFingerprint(fingerprint) !== null
);

const headerValue = (value: unknown) => (typeof value === 'string' ? value.trim() || null : null);
const sha256 = (value: string) => createHash('sha256').update(value).digest('hex');

export const getTlsFingerprints = (request: Pick<Request, 'headers'>) => {
  const ja3 = headerValue(request.headers['et-ja3']);
  const ja4 = headerValue(request.headers['et-ja4']);
  return { ja3, ja4, ja3Hash: ja3 ? sha256(ja3) : null, ja4Hash: ja4 ? sha256(ja4) : null };
};

export const createFingerprint = (visitorId: string, request: Pick<Request, 'headers'>) => {
  const { ja3Hash, ja4Hash } = getTlsFingerprints(request);

  // JA3 extension ordering can vary in modern browsers. Prefer JA4 without discarding either signal.
  const tls = ja4Hash ? `ja4:${ja4Hash}` : ja3Hash ? `ja3:${ja3Hash}` : 'none';

  return `v2:${visitorId}:${tls}`;
};
