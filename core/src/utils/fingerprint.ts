/* eslint-disable max-len, no-bitwise */

import { CSRF_HEADER, PREDICTABLE_HEADERS_PREFIX } from '../constants';
import { randomBetween, seedToRandom } from './random';

// Base seed for predictable headers
const HEADER_SEED_BASE = 'labrute-header-verification';

// Generate headers based on CSRF token
export const getPredictableHeaders = (csrfToken: string) => {
  const headerSeed = `${HEADER_SEED_BASE}-${csrfToken}`;
  const numHeaders = randomBetween(1, 7, `numHeaders-${headerSeed}`);

  const headers: Record<string, string> = {};
  for (let i = 0; i < numHeaders; i++) {
    const nameSeed = `header-name-${i}-${headerSeed}`;
    const valueSeed = `header-value-${i}-${headerSeed}`;
    const nameHash = Math.floor(seedToRandom(nameSeed) * 1e6).toString(36);
    const headerName = `${PREDICTABLE_HEADERS_PREFIX}${nameHash}`;
    const valueHash = Math.floor(seedToRandom(valueSeed) * 1e12).toString(36);
    headers[headerName] = valueHash;
  }
  return headers;
};

export const checkPredictableHeaders = (headers: Record<string, string | string[] | undefined>) => {
  const receivedHeaders = Object.keys(headers).filter((h) => h.startsWith(PREDICTABLE_HEADERS_PREFIX));

  // Get the CSRF token from the request headers
  const csrfToken = Array.isArray(headers[CSRF_HEADER])
    ? headers[CSRF_HEADER][0]
    : headers[CSRF_HEADER];

  if (!csrfToken) {
    throw new Error('Bot');
  }

  // Generate expected headers based on the CSRF token
  const expectedHeaders = getPredictableHeaders(csrfToken);
  const expectedHeaderKeys = Object.keys(expectedHeaders);

  if (receivedHeaders.length !== expectedHeaderKeys.length) {
    throw new Error('Bot');
  }

  for (const key of expectedHeaderKeys) {
    if (headers[key] !== expectedHeaders[key]) {
      throw new Error('Bot');
    }
  }
};

// Custom shuffled alphabet for post-Base64 obfuscation
export const BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
export const OBFUSCATED_ALPHABET = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgH~JjKkLlZzXxCcVvBbNnMm1234567890-_h';
export const FINGERPRINT_PRNG = (seed: number, i: number) => (i * 9301 + 49297 * seed) % 233280;
