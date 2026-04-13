import { GetResult } from '@fingerprintjs/fingerprintjs';
import { BASE64_ALPHABET, FINGERPRINT_PRNG, OBFUSCATED_ALPHABET } from '@labrute/core';

// A simple store for the fingerprint
let fingerprint: string | undefined;

export const setFingerprint = (f: string) => {
  fingerprint = f;
};

export const getFingerprint = () => fingerprint;

export const formatFP = (obj: GetResult): string => {
  // Step 1: JSON stringify
  let str = JSON.stringify(obj);

  // Step 2: XOR with pseudo-random sequence (seeded by string length)
  const seed = str.length;
  str = Array.from(str).map((ch, i) => {
    // Simple LCG for pseudo-random
    const prng = FINGERPRINT_PRNG(seed, i);
    const xor = prng % 256;
    // eslint-disable-next-line no-bitwise
    return String.fromCharCode(ch.charCodeAt(0) ^ xor);
  }).join('');

  // Step 3: Reverse string
  str = str.split('').reverse().join('');

  // Step 4: Swap character pairs (ensure type safety)
  const arr: string[] = Array.from(str);
  for (let i = 0; i < arr.length - 1; i += 2) {
    const tmp = arr[i];
    arr[i] = typeof arr[i + 1] === 'string' ? arr[i + 1] ?? '' : '';
    arr[i + 1] = typeof tmp === 'string' ? tmp : '';
  }
  str = arr.join('');

  // Step 5: Base64 encode (UTF-8 safe)
  const utf8Bytes = new TextEncoder().encode(str);
  // Convert to binary string for btoa
  let binary = '';
  for (let i = 0; i < utf8Bytes.length; i++) {
    binary += String.fromCharCode(Number(utf8Bytes[i]));
  }
  const b64 = btoa(binary);

  // Step 6: Custom character mapping
  let obfuscated = '';
  for (let i = 0; i < b64.length; i++) {
    const idx = BASE64_ALPHABET.indexOf(b64[i] ?? '');
    obfuscated += idx !== -1 ? OBFUSCATED_ALPHABET[idx] : b64[i];
  }
  return obfuscated;
};
