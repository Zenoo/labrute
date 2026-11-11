import {
  BASE64_ALPHABET, FINGERPRINT_PRNG, ForbiddenError, GetFingerprintResponse, OBFUSCATED_ALPHABET
} from '@labrute/core';
import crypto from 'crypto';
import { Request, Response } from 'express';
import { sendError } from './sendError.js';
import { getBrowserId } from './browserId.js';
import { createFingerprint } from './fingerprintIdentity.js';
import { issueFingerprintEvent } from './fingerprintEvent.js';

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

export const getFingerprintEvent = (
  request: Request<unknown, unknown, { data: string }>,
  response: Response<GetFingerprintResponse>,
) => {
  try {
    if (typeof request.body?.data !== 'string') {
      throw new ForbiddenError('Invalid fingerprint data');
    }

    let fpData: Record<string, unknown>;
    try {
      fpData = readFP(request.body.data);
      if (!fpData || typeof fpData !== 'object' || Array.isArray(fpData)) {
        throw new ForbiddenError('Invalid fingerprint data');
      }
    } catch {
      throw new ForbiddenError('Failed to decode fingerprint data');
    }
    const baseVisitorId = fpData.visitorId;

    if (typeof baseVisitorId !== 'string' || baseVisitorId.length !== 32 || !/^[a-f0-9]{32}$/.test(baseVisitorId)) {
      throw new ForbiddenError('Invalid fingerprint visitorId');
    }

    // Include the TLS client fingerprints supplied by the provider.
    const visitorId = createFingerprint(baseVisitorId, request);

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
      eventId: issueFingerprintEvent(
        visitorId, browserId, request.body.data,
      ),
      visitorId,
    });

    // TODO: look at the fingerprint to detect bots and ban the print
  } catch (error) {
    sendError(response, error);
  }
};
