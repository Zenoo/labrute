import { e, ExpectedError, GetFingerprintResponse } from '@labrute/core';
import crypto from 'crypto';
import { Request, Response } from 'express';
import { TLSSocket } from 'tls';
import { DISCORD, GLOBAL } from '../context.js';

const c = (A: string) => {
  const u = e(3);
  const esc = u.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  let B = A.replace(new RegExp(`(.{7})${esc}`, 'g'), '$1');
  B = Buffer.from(B, 'base64').toString('binary');
  B = B.split('').reverse().join('');
  const r = e(5);
  // eslint-disable-next-line no-bitwise
  B = Array.from(B).map((D, E) => String.fromCharCode(D.charCodeAt(0) ^ r.charCodeAt(E % r.length))).join('');
  const F = B.split('');
  for (let G = F.length - 1; G >= 0; G--) {
    const H = (G * 13 + 7) % F.length;
    const temp1 = F[G] !== undefined ? F[G] : '';
    const temp2 = F[H] !== undefined ? F[H] : '';
    F[G] = typeof temp2 === 'string' ? temp2 : '';
    F[H] = typeof temp1 === 'string' ? temp1 : '';
  }
  return F.join('');
};

const u = (key: string) => key.replace(/\\([:|\\])/g, '$1');

export const readFP = (input: string): Record<string, unknown> => {
  const decoded = c(input);
  const result: Record<string, unknown> = {};
  let buffer = '';
  let inEscape = false;
  let key = '';
  let value = '';
  let readingKey = true;
  for (let i = 0; i <= decoded.length; i++) {
    const char = decoded[i] ?? '|'; // treat end as delimiter
    if (readingKey) {
      if (char === ':' && !inEscape) {
        key = buffer;
        buffer = '';
        readingKey = false;
      } else if (char === '\\' && !inEscape) {
        inEscape = true;
      } else {
        buffer += char;
        inEscape = false;
      }
    } else if (char === '|' && !inEscape) {
      value = buffer;
      buffer = '';
      readingKey = true;
      let parsed;
      try {
        parsed = JSON.parse(value) as unknown;
      } catch {
        parsed = value;
      }
      result[u(key)] = parsed;
    } else if (char === '\\' && !inEscape) {
      inEscape = true;
    } else {
      buffer += char;
      inEscape = false;
    }
  }
  return result;
};

const encryptFPEvent = (text: string) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', GLOBAL.config.fpAesSecret.slice(0, 32), GLOBAL.config.fpAesIv.slice(0, 16));
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

export const decryptFPEvent = (encrypted: string) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    GLOBAL.config.fpAesSecret.slice(0, 32),
    GLOBAL.config.fpAesIv.slice(0, 16),
  );
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

type FingerPrint = {
  visitorId: string
  confidence: {
    score: number
    comment?: string
  }
  components: {
    [key: string]:
    { value: unknown, duration: number } |
    { error: unknown, duration: number }
  }
  version: string
};

/**
 * Appends a short, unique string representing TLS info to the visitorId.
 * The result is: {visitorId}{shortTlsString}
 * No use of 'any'.
 */

const appendTlsToVisitorId = (
  visitorId: string,
  request: Request<unknown, unknown, unknown>,
) => {
  const socket = request.socket as TLSSocket;
  if (typeof socket.getPeerCertificate !== 'function') {
    return visitorId; // Not a TLS connection
  }

  // Create a short string from TLS info (protocol, cipher name, authorized)
  const proto = socket.getProtocol()?.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6) || '';
  const cipherObj = socket.getCipher();
  const cipher = cipherObj.name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6);
  const auth = socket.authorized ? 'A' : 'U';
  // Combine and hash for uniqueness, but keep it short
  const raw = `${proto}${cipher}${auth}`;
  // Simple hash: sum char codes, base36
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = (hash * 31 + raw.charCodeAt(i)) % 1000000;
  }
  const short = hash.toString(36).padStart(4, '0');
  return `${visitorId}${short}`;
};

export const getFingerprintEvent = (
  request: Request<unknown, unknown, { data: string }>,
  response: Response<GetFingerprintResponse>,
) => {
  if (typeof request.body.data !== 'string') {
    throw new ExpectedError('Invalid fingerprint data');
  }

  const fpData = readFP(request.body.data) as FingerPrint;
  let visitorId = fpData.visitorId ?? '';

  if (!visitorId) {
    DISCORD().logObject(fpData, 'Fingerprint missing visitorId').catch(() => { /* ignore */ });
    throw new ExpectedError('Fingerprint missing visitorId');
  }

  // Collect TLS handshake info
  visitorId = appendTlsToVisitorId(visitorId, request);

  const encryptedVisitorId = encryptFPEvent(visitorId);
  response.send({ eventId: encryptedVisitorId, visitorId });

  // TODO: look at the fingerprint to detect bots and ban the print
};
