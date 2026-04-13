import {
  BASE64_ALPHABET, ExpectedError, FINGERPRINT_PRNG, GetFingerprintResponse, OBFUSCATED_ALPHABET,
} from '@labrute/core';
import crypto from 'crypto';
import { Request, Response } from 'express';
import { TLSSocket } from 'tls';
import { DISCORD, GLOBAL } from '../context.js';
import { sendError } from './sendError.js';

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
    // eslint-disable-next-line no-bitwise
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
  try {
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
  } catch (error) {
    sendError(response, error);
  }
};
