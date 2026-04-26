/* eslint-disable max-len, no-bitwise */

import dayjs from 'dayjs';
import { randomBetween, seedToRandom } from './random';

export const getPredictableHeaders = (date?: dayjs.Dayjs, serverTimeOffset?: number) => {
  let now = date ?? dayjs().utc();

  // Apply server time offset if provided (client-side only)
  if (serverTimeOffset !== undefined) {
    now = dayjs().utc().add(serverTimeOffset, 'milliseconds');
  }

  const daySeed = now.format('YYYY-MM-DD');

  const numHeaders = randomBetween(1, 7, `numHeaders-${daySeed}`);

  const headers: Record<string, string> = {};
  for (let i = 0; i < numHeaders; i++) {
    const nameSeed = `header-name-${i}-${daySeed}`;
    const valueSeed = `header-value-${i}-${daySeed}`;
    const nameHash = Math.floor(seedToRandom(nameSeed) * 1e6).toString(36);
    const headerName = `x-verif-x-${nameHash}`;
    const valueHash = Math.floor(seedToRandom(valueSeed) * 1e12).toString(36);
    headers[headerName] = valueHash;
  }
  return headers;
};

export const checkPredictableHeaders = (headers: Record<string, string | string[] | undefined>) => {
  const receivedHeaders = Object.keys(headers).filter((h) => h.startsWith('x-verif-x-'));

  // First, check against current time
  const expectedHeaders = getPredictableHeaders();
  const expectedHeaderKeys = Object.keys(expectedHeaders);

  if (receivedHeaders.length !== expectedHeaderKeys.length) {
    throw new Error('Bot');
  }

  let allMatch = true;
  for (const key of expectedHeaderKeys) {
    if (headers[key] !== expectedHeaders[key]) {
      allMatch = false;
      break;
    }
  }

  if (allMatch) {
    return; // Headers are valid
  }

  // If current time check failed, check 10-minute window (before/after)
  const now = dayjs().utc();
  const timesToCheck = [
    now.subtract(10, 'minutes'),
    now.add(10, 'minutes'),
  ];

  for (const checkTime of timesToCheck) {
    const windowHeaders = getPredictableHeaders(checkTime);
    const windowHeaderKeys = Object.keys(windowHeaders);

    if (receivedHeaders.length !== windowHeaderKeys.length) {
      continue;
    }

    let windowMatch = true;
    for (const key of windowHeaderKeys) {
      if (headers[key] !== windowHeaders[key]) {
        windowMatch = false;
        break;
      }
    }

    if (windowMatch) {
      return; // Headers are valid in this window
    }
  }

  // If no time window matched, throw error
  throw new Error('Bot');
};

// Custom shuffled alphabet for post-Base64 obfuscation
export const BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
export const OBFUSCATED_ALPHABET = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgH~JjKkLlZzXxCcVvBbNnMm1234567890-_h';
export const FINGERPRINT_PRNG = (seed: number, i: number) => (i * 9301 + 49297 * seed) % 233280;
