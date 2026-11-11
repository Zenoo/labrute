import assert from 'node:assert/strict';
import { createHash, createHmac, randomUUID } from 'node:crypto';
import { mock, test } from 'node:test';
import Cryptr from 'cryptr';

const config = { fpAesSecret: 'current-test-key-'.repeat(4) };
mock.module('../lib/context.js', { namedExports: { GLOBAL: { config } } });
const { issueFingerprintEvent, verifyFingerprintEvent } = await import('../lib/utils/fingerprintEvent.js');
const { readConfig } = await import('../lib/config.js');
const browserId = randomUUID();
const fingerprint = `v2:${'a'.repeat(32)}:none`;
const now = Date.now();
const request = (overrides = {}) => ({
  signedCookies: { browserId }, security: { fingerprint }, ...overrides,
});
const issue = (time = now, payload = 'full-fingerprint-components') => (
  issueFingerprintEvent(fingerprint, browserId, payload, time)
);
const changeClaims = (token, change) => {
  const [version, id, body] = token.split('.');
  const claims = JSON.parse(Buffer.from(body, 'base64url'));
  change(claims);
  const signed = `${version}.${id}.${Buffer.from(JSON.stringify(claims)).toString('base64url')}`;
  const key = createHmac('sha256', config.fpAesSecret).update('labrute:fingerprint-event:v2').digest();
  return `${signed}.${createHmac('sha256', key).update(signed).digest('base64url')}`;
};

test('receipts bind complete-payload digest, fingerprint and browser, with unique nonces', () => {
  const first = issue();
  const second = issue();
  const claims = verifyFingerprintEvent(first, request(), now);
  assert.equal(claims.fingerprint, fingerprint);
  assert.equal(claims.browserHash, createHash('sha256')
    .update(`labrute:fingerprint-browser:${browserId}`).digest('hex'));
  assert.ok(!JSON.stringify(claims).includes(browserId), 'the receipt must not expose the raw HttpOnly cookie ID');
  assert.equal(claims.payloadHash, createHash('sha256').update('full-fingerprint-components').digest('hex'));
  assert.notEqual(claims.nonce, verifyFingerprintEvent(second, request(), now).nonce);
  assert.notEqual(claims.payloadHash, verifyFingerprintEvent(issue(now, 'different components'), request(), now).payloadHash);
});

test('browser-bound retries work only inside the fixed fifteen-minute window', () => {
  const token = issue();
  assert.deepEqual(verifyFingerprintEvent(token, request(), now), verifyFingerprintEvent(token, request(), now));
  assert.equal(verifyFingerprintEvent(token, request(), now + 899000).fingerprint, fingerprint);
  assert.throws(() => verifyFingerprintEvent(token, request(), now + 900000), /fingerprint event/);
  assert.throws(() => verifyFingerprintEvent(issue(now + 31000), request(), now), /fingerprint event/);
});

test('wrong browser, unsigned cookies and altered fingerprint headers are rejected', () => {
  const token = issue();
  for (const req of [
    request({ signedCookies: { browserId: randomUUID() } }), request({ signedCookies: {} }),
    request({ signedCookies: { browserId: false }, cookies: { browserId } }),
    request({ security: { fingerprint: `v2:${'b'.repeat(32)}:none` } }),
  ]) assert.throws(() => verifyFingerprintEvent(token, req, now), /fingerprint event/);
});

test('modified signatures, claims, legacy CBC strings and oversized tokens fail closed', () => {
  const token = issue();
  const parts = token.split('.');
  const badSignature = [...parts.slice(0, 3), `${parts[3][0] === 'A' ? 'B' : 'A'}${parts[3].slice(1)}`].join('.');
  const badBody = [...parts.slice(0, 2), Buffer.from('{}').toString('base64url'), parts[3]].join('.');
  for (const value of [badSignature, badBody, 'legacy-encrypted-base64==', `${token}.extra`, 'x'.repeat(2049), null]) {
    assert.throws(() => verifyFingerprintEvent(value, request(), now), /fingerprint event/);
  }
});

test('even correctly signed tokens must have valid purpose, version, timestamps, nonce and digest', () => {
  for (const mutate of [
    (c) => { c.purpose = 'oauth'; }, (c) => { c.v = 1; },
    (c) => { c.expiresAt += 1; }, (c) => { c.issuedAt = 'today'; },
    (c) => { c.nonce = '<img src=x>'; }, (c) => { c.payloadHash += '\n'; },
    (c) => { c.fingerprint = 'a'.repeat(32) + '0000'; },
  ]) assert.throws(() => verifyFingerprintEvent(changeClaims(issue(), mutate), request(), now), /fingerprint event/);
});

test('changing the existing secret invalidates earlier receipts immediately', () => {
  const old = issue();
  const previous = config.fpAesSecret;
  try {
    config.fpAesSecret = 'replacement-test-key-'.repeat(4);
    assert.throws(() => verifyFingerprintEvent(old, request(), now), /fingerprint event/);
    const fresh = issue();
    assert.equal(verifyFingerprintEvent(fresh, request(), now).fingerprint, fingerprint);
  } finally { config.fpAesSecret = previous; }
});

test('configuration uses the existing fingerprint secret and validates its resolved production value', async () => {
  await assert.rejects(readConfig({ NODE_ENV: 'production' }), /FP_AES_SECRET/);
  await assert.rejects(readConfig({ NODE_ENV: 'production', FP_AES_SECRET: 'short' }), /FP_AES_SECRET/);
  const resolved = await readConfig({ NODE_ENV: 'production', FP_AES_SECRET: config.fpAesSecret });
  assert.equal(resolved.fpAesSecret, config.fpAesSecret);
  const databaseSecret = 'stored-database-test-secret-'.repeat(2);
  const cryptr = new Cryptr('synthetic-config-encryption-secret');
  const stored = await readConfig({ NODE_ENV: 'production', FP_AES_SECRET: 'overridden-env-value' }, {
    config: { findMany: async () => [
      { key: 'CRYPTR_SECRET', value: 'synthetic-config-encryption-secret' },
      { key: 'FP_AES_SECRET', value: cryptr.encrypt(databaseSecret) },
    ] },
  });
  assert.equal(stored.fpAesSecret, databaseSecret, 'existing encrypted database configuration still takes precedence');
});
