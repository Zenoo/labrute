import {
  BASE64_ALPHABET, FINGERPRINT_PRNG, ForbiddenError, GetFingerprintResponse, OBFUSCATED_ALPHABET
} from '@labrute/core';
import crypto from 'crypto';
import { Request, Response } from 'express';
import { DISCORD, GLOBAL } from '../context.js';
import { sendError } from './sendError.js';
import { getBrowserId } from './browserId.js';

export const isFingerprintFormatValid = (fingerprint: unknown): fingerprint is string => typeof fingerprint === 'string'
  && fingerprint.length === 36
  && /^[a-f0-9]{32}[a-z0-9]{4}$/.test(fingerprint);

export const readFP = (input: string): Record<string, unknown> => {
  // Step 6: Reverse custom character mapping
  let b64 = '';
  for (let i = 0; i < input.length; i++) {
    const idx = OBFUSCATED_ALPHABET.indexOf(input[i] ?? '');
    b64 += idx !== -1 ? BASE64_ALPHABET[idx] : input[i];
  }

  // Step 5: Base64 decode (to binary string)
  const binary = Buffer.from(b64, 'base64');
  // Convert binary to UTF-8 string
  let decoded = new TextDecoder().decode(binary);

  // Step 4: Unswap character pairs (ensure type safety)
  const arr: string[] = Array.from(decoded);
  for (let i = 0; i < arr.length - 1; i += 2) {
    const tmp = arr[i];
    arr[i] = typeof arr[i + 1] === 'string' ? arr[i + 1] ?? '' : '';
    arr[i + 1] = typeof tmp === 'string' ? tmp : '';
  }
  decoded = arr.join('');

  // Step 3: Reverse string
  decoded = decoded.split('').reverse().join('');

  // Step 2: Un-XOR with pseudo-random sequence (seeded by string length)
  const seed = decoded.length;
  decoded = Array.from(decoded).map((ch, i) => {
    const prng = FINGERPRINT_PRNG(seed, i);
    const xor = prng % 256;

    return String.fromCharCode(ch.charCodeAt(0) ^ xor);
  }).join('');

  // Step 1: Parse JSON
  return JSON.parse(decoded) as Record<string, unknown>;
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
  if (!isFingerprintFormatValid(decrypted)) {
    throw new ForbiddenError('Invalid fingerprint event');
  }
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
 * Appends a short hash of the provider's TLS client fingerprints to the visitorId.
 * The result is: {visitorId}{shortTlsString}
 */

export const appendTlsToVisitorId = (
  visitorId: string,
  request: Request<unknown, unknown, unknown>,
) => {
  // The TLS-terminating proxy must overwrite these headers and prevent direct origin access.
  // Preserve commas: et-ja3 can contain the full JA3 string rather than its MD5 hash.
  const ja3Header = request.headers['et-ja3'];
  const ja4Header = request.headers['et-ja4'];
  const ja3 = typeof ja3Header === 'string' ? ja3Header.trim() : '';
  const ja4 = typeof ja4Header === 'string' ? ja4Header.trim() : '';
  const raw = `${ja3}|${ja4}`;

  // Combine and hash for uniqueness, but keep it short.
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
  try {
    if (typeof request.body.data !== 'string') {
      throw new ForbiddenError('Invalid fingerprint data');
    }

    let fpData: FingerPrint;
    try {
      fpData = readFP(request.body.data) as FingerPrint;
    } catch {
      throw new ForbiddenError('Failed to decode fingerprint data');
    }
    let visitorId = fpData.visitorId ?? '';

    if (typeof visitorId !== 'string' || visitorId.length !== 32 || !/^[a-f0-9]{32}$/.test(visitorId)) {
      DISCORD().logObject(fpData, 'Invalid fingerprint visitorId').catch(() => { /* ignore */ });
      throw new ForbiddenError('Invalid fingerprint visitorId');
    }

    // Include the TLS client fingerprints supplied by the provider.
    visitorId = appendTlsToVisitorId(visitorId, request);

    const encryptedVisitorId = encryptFPEvent(visitorId);

    // Only reuse authenticated UUIDs. Replace legacy unsigned or tampered cookies.
    let browserId = getBrowserId(request);
    if (!browserId) {
      browserId = crypto.randomUUID();
      // Signing authenticates the value; HttpOnly prevents normal script access.
      response.cookie('browserId', browserId, {
        httpOnly: true,
        signed: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 years - persistent browser identifier
        path: '/',
      });
    }

    response.send({
      eventId: encryptedVisitorId,
      visitorId,
    });

    // TODO: look at the fingerprint to detect bots and ban the print
  } catch (error) {
    sendError(response, error);
  }
};
