import assert from 'node:assert/strict';
import { createCipheriv } from 'node:crypto';
import { mock, test } from 'node:test';
import { AuthType } from '@eternaltwin/core/auth/auth-type';
import { CSRF_HEADER, getPredictableHeaders } from '@labrute/core';

const id = '11111111-1111-4111-8111-111111111111';
const browserId = '22222222-2222-4222-8222-222222222222';
const fingerprint = 'a'.repeat(32) + '0000';
const fpAesSecret = 'a'.repeat(32);
const fpAesIv = 'b'.repeat(16);
let fingerprintBanned = false;
mock.module('../lib/context.js', { namedExports: {
  GLOBAL: { config: { fpAesSecret, fpAesIv } },
  LOGGER: { log() {}, error() {} }, DISCORD: () => ({ logObject: async () => {} }),
} });
mock.module('@eternaltwin/oauth-client-http/rfc-oauth-client', { namedExports: {
  RfcOauthClient: class { async getAccessToken() { return { accessToken: 'test-token' }; } },
  GetAccessTokenError: class extends Error {},
} });
mock.module('@eternaltwin/client-node', { namedExports: {
  EternaltwinNodeClient: class {
    async getAuthSelf() {
      return { type: AuthType.AccessToken, user: { id, displayName: { current: { value: 'Test' } } } };
    }
  },
} });
mock.module('../lib/utils/ServerState.js', { namedExports: { ServerState: {
  isIpBanned: async () => false,
  isFingerprintBanned: async () => fingerprintBanned,
  isBrowserBanned: async () => false,
  getModifiers: async () => ({}), getCurrentEvent: async () => null,
} } });
mock.module('../lib/utils/createUserLog.js', { namedExports: { createUserLog() {} } });
mock.module('../lib/utils/user/banUser.js', { namedExports: { banUser: async () => {} } });
const { OAuth } = await import('../lib/controllers/OAuth.js');

const run = async ({ bannedAt = null, validHeaders = true, mismatchedEvent = false } = {}) => {
  const observations = [];
  const user = { id, bannedAt, fingerprints: [fingerprint], lang: 'en' };
  const prisma = {
    user: { upsert: async () => user },
    $executeRaw: async (...args) => { observations.push(args); return 1; },
  };
  const controller = new OAuth({
    eternaltwin: { url: 'https://example.test/', clientRef: 'test', secret: 'test' },
    selfUrl: new URL('https://example.test/'),
  }, prisma);
  const cipher = createCipheriv('aes-256-cbc', fpAesSecret, fpAesIv);
  const eventId = cipher.update(fingerprint, 'utf8', 'base64') + cipher.final('base64');
  const req = {
    body: { code: 'test-code', eventId },
    headers: validHeaders ? { [CSRF_HEADER]: 'csrf', ...getPredictableHeaders('csrf') } : {},
    security: { fingerprint: mismatchedEvent ? 'b'.repeat(32) + '0000' : fingerprint, browserId, validHeaders },
    signedCookies: { browserId }, socket: { remoteAddress: '192.0.2.1' },
  };
  const res = { header() {}, status() { return this; }, send(body) { this.body = body; } };
  await controller.token(req, res);
  return { observations, res };
};

test('OAuth records one observation after validated login', async () => {
  const { observations, res } = await run();
  assert.equal(observations.length, 1);
  assert.equal(res.body.user.id, id);
});

test('OAuth cannot record observations for banned users, invalid headers, or mismatched events', async () => {
  for (const options of [{ bannedAt: new Date() }, { validHeaders: false }, { mismatchedEvent: true }]) {
    assert.equal((await run(options)).observations.length, 0);
  }
  fingerprintBanned = true;
  try {
    assert.equal((await run()).observations.length, 0);
  } finally {
    fingerprintBanned = false;
  }
});
