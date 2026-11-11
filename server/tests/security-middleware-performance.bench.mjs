import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { mock } from 'node:test';
import cookieParser from 'cookie-parser';
import express from 'express';
import {
  CSRF_HEADER, FINGERPRINT_HEADER, VERSION_HEADER, Version, getPredictableHeaders,
  BASE64_ALPHABET, OBFUSCATED_ALPHABET, FINGERPRINT_PRNG,
} from '@labrute/core';

let externalLogs = 0;
mock.module('../lib/context.js', { namedExports: {
  GLOBAL: { config: { fpAesSecret: 'a'.repeat(32) } },
  LOGGER: { log() {}, error() {} },
  DISCORD: () => ({ logObject: async () => { externalLogs++; } }),
} });
const { securityCheck } = await import('../lib/utils/middlewares/securityCheck.js');
const { getFingerprintEvent } = await import('../lib/utils/fingerprint.js');
const { verifyFingerprintEvent } = await import('../lib/utils/fingerprintEvent.js');
const { getClientIp } = await import('../lib/utils/clientIp.js');
const browserId = '11111111-1111-4111-8111-111111111111';
const visitorId = 'a'.repeat(32);
const secret = 'synthetic-benchmark-secret';
const parseCookies = cookieParser(secret);
let signedCookie;
express.response.cookie.call({ req: { secret }, append(header, value) { signedCookie = value.split(';')[0]; } },
  'browserId', browserId, { signed: true, httpOnly: true });
const commonCookies = '; analytics=test; csrfToken=synthetic-token; preference=en';
const headers = {
  [CSRF_HEADER]: 'synthetic-csrf', ...getPredictableHeaders('synthetic-csrf'),
  [VERSION_HEADER]: Version, [FINGERPRINT_HEADER]: `v2:${visitorId}:none`,
};
const response = { status() { return this; }, send() { assert.fail('valid middleware request rejected'); } };
const next = () => {};
const run = (name, count, operation) => {
  for (let i = 0; i < Math.min(count, 2000); i++) operation();
  const begin = performance.now();
  for (let i = 0; i < count; i++) operation();
  const elapsed = performance.now() - begin;
  console.log(JSON.stringify({ name, iterations: count,
    microsecondsPerCall: +(elapsed * 1000 / count).toFixed(2) }));
};
run('resolve forwarded client IP and reuse it within the same request', 50000, () => {
  const request = { headers: { 'x-forwarded-for': '192.0.2.1,198.51.100.1' },
    socket: { remoteAddress: '127.0.0.1' } };
  assert.equal(getClientIp(request), '192.0.2.1');
  assert.equal(getClientIp(request), '192.0.2.1');
});
run('parse unsigned browser cookie', 50000, () => {
  parseCookies({ headers: { cookie: `browserId=${browserId}${commonCookies}` } }, {}, next);
});
run('parse and verify signed browser cookie', 50000, () => {
  parseCookies({ headers: { cookie: signedCookie + commonCookies } }, {}, next);
});
run('signed cookies plus actual security middleware (no database)', 50000, () => {
  const request = { headers: { ...headers, cookie: signedCookie + commonCookies }, path: '/api/test' };
  parseCookies(request, {}, next);
  securityCheck(request, response, next);
});

const encode = (value) => {
  const json = JSON.stringify(value);
  const chars = Array.from(json, (c, i) => String.fromCharCode(
    c.charCodeAt(0) ^ (FINGERPRINT_PRNG(json.length, i) % 256),
  )).reverse();
  for (let i = 0; i < chars.length - 1; i += 2) [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
  return Array.from(Buffer.from(chars.join('')).toString('base64'),
    (c) => OBFUSCATED_ALPHABET[BASE64_ALPHABET.indexOf(c)]).join('');
};
const full = { visitorId, version: '5.2.0', components: { synthetic: { value: 'x'.repeat(16384), duration: 0 } } };
for (const [name, payload] of [['full payload (synthetic 16 KiB component)', full]]) {
  const data = encode(payload);
  let result;
  const req = { headers: {}, signedCookies: { browserId }, body: { data } };
  const res = { send(value) { result = value; }, cookie() { assert.fail('verified cookie reissued'); } };
  run(`fingerprint issuance, ${name}`, 200, () => getFingerprintEvent(req, res));
  assert.ok(result.eventId);
  run('verify browser-bound fingerprint receipt (registration only)', 50000, () => {
    verifyFingerprintEvent(result.eventId, {
      signedCookies: { browserId }, security: { fingerprint: result.visitorId },
    });
  });
  console.log(JSON.stringify({ name, encodedCharacters: data.length }));
}
const invalid = { headers: {}, body: { data: encode({ visitorId: '<invalid>', components: full.components }) } };
run('malformed visitor ID, no external log work', 200, () => {
  getFingerprintEvent(invalid, { status() { return this; }, send(message) { assert.match(message, /Invalid fingerprint/); } });
});
assert.equal(externalLogs, 0);
