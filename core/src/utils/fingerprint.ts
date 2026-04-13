/* eslint-disable max-len, no-bitwise */

import dayjs from 'dayjs';
import { randomBetween, seedToRandom } from './random';

export const getPredictableHeaders = () => {
  const now = dayjs().utc();
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
  const expectedHeaders = getPredictableHeaders();
  const expectedHeaderKeys = Object.keys(expectedHeaders);

  if (receivedHeaders.length !== expectedHeaderKeys.length) {
    throw new Error('Bot');
  }

  for (const key of expectedHeaderKeys) {
    if (headers[key] !== expectedHeaders[key]) {
      throw new Error('Bot again');
    }
  }
};

// Custom shuffled alphabet for post-Base64 obfuscation
export const BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
export const OBFUSCATED_ALPHABET = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgH~JjKkLlZzXxCcVvBbNnMm1234567890-_h';
export const FINGERPRINT_PRNG = (seed: number, i: number) => (i * 9301 + 49297 * seed) % 233280;
