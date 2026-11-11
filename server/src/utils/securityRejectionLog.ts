import { PREDICTABLE_HEADERS_PREFIX } from '@labrute/core';
import type { Request } from 'express';
import { DISCORD } from '../context.js';

const cooldowns = new Map<string, number>();
const INTERVAL_MS = 60000;
const MAX_ENTRIES = 10000;
const MAX_PENDING = 20;
let pending = 0;

/** Sampling affects telemetry only, never authentication or enforcement. */
export const logSecurityRejection = (
  userId: string,
  kind: 'unrecognized-fingerprint' | 'headers-tampering',
  request: Pick<Request, 'headers' | 'method' | 'path' | 'security'>,
) => {
  const now = Date.now();
  const key = `${kind}:${userId}`;
  if (pending >= MAX_PENDING || now < (cooldowns.get(key) ?? 0)) return;

  cooldowns.delete(key);
  cooldowns.set(key, now + INTERVAL_MS);
  if (cooldowns.size > MAX_ENTRIES) {
    const oldest = cooldowns.keys().next().value;
    if (oldest !== undefined) cooldowns.delete(oldest);
  }

  // Do not serialize full headers, URLs, fingerprint histories, or request objects.
  const details = {
    userId,
    fingerprint: request.security?.fingerprint?.slice(0, 36),
    endpoint: `${request.method} ${request.path}`.slice(0, 256),
    headers: kind === 'headers-tampering' ? Object.fromEntries(Object.entries(request.headers)
      .filter(([name]) => name.startsWith(PREDICTABLE_HEADERS_PREFIX))
      .slice(0, 8)
      .map(([name, value]) => [name.slice(0, 100), String(value).slice(0, 128)])) : undefined,
  };
  pending++;
  try {
    void DISCORD().logObject(details, kind === 'headers-tampering'
      ? 'Headers tampering detected' : 'Unrecognized fingerprint detected')
      .catch(() => { /* Logging failures must not affect request handling. */ })
      .finally(() => { pending--; });
  } catch {
    pending--;
  }
};
