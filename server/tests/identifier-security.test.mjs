import assert from 'node:assert/strict';
import { createCipheriv } from 'node:crypto';
import { mock, test } from 'node:test';
import cookieParser from 'cookie-parser';
import express from 'express';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import {
  BASE64_ALPHABET, OBFUSCATED_ALPHABET, FINGERPRINT_PRNG,
  getPredictableHeaders, CSRF_HEADER, FINGERPRINT_HEADER, VERSION_HEADER, Version,
} from '@labrute/core';

dayjs.extend(utc);
const config = { fpAesSecret: 'a'.repeat(32) };
const bans = [];
let deviceRestrictions = { browserRestricted: false, fingerprintRestricted: false };
let fingerprintLogs = 0;
const checkedIps = [];
mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: { config },
    LOGGER: { log() {}, error() {} },
    DISCORD: () => ({ logObject: async () => { fingerprintLogs++; } }),
  },
});
mock.module('../lib/utils/ServerState.js', {
  namedExports: { ServerState: {
    isIpBanned: async (_prisma, ip) => { checkedIps.push(ip); return false; },
    isFingerprintBanned: async () => false,
    isBrowserBanned: async () => false,
    getModifiers: async () => ({}),
    getCurrentEvent: async () => null,
  } },
});
mock.module('../lib/utils/user/banUser.js', {
  namedExports: { banUser: async (...args) => { bans.push(args); } },
});

const { getBrowserId } = await import('../lib/utils/browserId.js');
const { getFingerprintEvent } = await import('../lib/utils/fingerprint.js');
const { auth } = await import('../lib/utils/auth.js');
const { securityCheck } = await import('../lib/utils/middlewares/securityCheck.js');
const { Users } = await import('../lib/controllers/Users.js');
const browserId = '11111111-1111-4111-8111-111111111111';
const userId = '22222222-2222-4222-8222-222222222222';
const { issueFingerprintEvent, verifyFingerprintEvent } = await import('../lib/utils/fingerprintEvent.js');
const { createFingerprint } = await import('../lib/utils/fingerprintIdentity.js');
const visitorId = 'b4e0e8ddaa9cbc0cb11808045ca140b9';
const fingerprint = createFingerprint(visitorId, { headers: {} });
const verifyIssued = (body, cookieId = browserId) => verifyFingerprintEvent(body.eventId, {
  signedCookies: { browserId: cookieId }, security: { fingerprint: body.visitorId },
}).fingerprint;
const event = (fp) => issueFingerprintEvent(fp, browserId, 'synthetic-full-payload');


const encode = (value) => {
  const json = JSON.stringify(value);
  const characters = Array.from(json, (character, index) => String.fromCharCode(
    character.charCodeAt(0) ^ (FINGERPRINT_PRNG(json.length, index) % 256),
  )).reverse();
  for (let i = 0; i < characters.length - 1; i += 2) {
    [characters[i], characters[i + 1]] = [characters[i + 1], characters[i]];
  }
  return Array.from(Buffer.from(characters.join('')).toString('base64'),
    (character) => OBFUSCATED_ALPHABET[BASE64_ALPHABET.indexOf(character)]).join('');
};

const encrypt = (value) => {
  // Generate obsolete CBC events only to verify that the current endpoint rejects them.
  const cipher = createCipheriv('aes-256-cbc', config.fpAesSecret, Buffer.alloc(16, 0x62));
  return cipher.update(value, 'utf8', 'base64') + cipher.final('base64');
};

const response = () => ({
  statusCode: 200,
  status(code) { this.statusCode = code; return this; },
  send(body) { this.body = body; },
});

test('only verified signed UUID cookies are accepted', () => {
  assert.equal(getBrowserId({ signedCookies: { browserId } }), browserId);
  for (const request of [
    {}, { cookies: { browserId } }, { signedCookies: { browserId: false } },
    { signedCookies: { browserId: '<img src=x onerror=alert(1)>' } },
    { signedCookies: { browserId: [browserId] } },
    { signedCookies: { browserId: `${browserId}\n` } },
  ]) assert.equal(getBrowserId(request), undefined);
});

test('issuance replaces unsigned cookies and cookie-parser verifies the new signature', () => {
  const req = { headers: {}, cookies: { browserId }, body: { data: encode({ visitorId }) } };
  const res = response();
  let setCookie;
  let options;
  res.cookie = (name, value, cookieOptions) => {
    options = cookieOptions;
    express.response.cookie.call({
      req: { secret: 'test-cookie-secret' },
      append(header, serialized) { setCookie = serialized; },
    }, name, value, cookieOptions);
  };
  getFingerprintEvent(req, res);
  assert.equal(options.signed, true);
  assert.equal(options.httpOnly, true);
  assert.equal(options.sameSite, 'lax');
  assert.equal(options.path, '/');
  const parsed = { headers: { cookie: setCookie.split(';')[0] } };
  cookieParser('test-cookie-secret')(parsed, {}, () => {});
  assert.match(getBrowserId(parsed), /^[a-f0-9-]{36}$/);
  assert.notEqual(getBrowserId(parsed), browserId, 'do not adopt unsigned identifiers');
  assert.equal(verifyIssued(res.body, getBrowserId(parsed)), res.body.visitorId);
  const wrongSecret = { headers: { cookie: setCookie.split(';')[0] } };
  cookieParser('another-cookie-secret')(wrongSecret, {}, () => {});
  assert.equal(getBrowserId(wrongSecret), undefined);
  const tampered = { headers: { cookie: setCookie.split(';')[0].replace('browserId=', 'browserId=x') } };
  cookieParser('test-cookie-secret')(tampered, {}, () => {});
  assert.equal(getBrowserId(tampered), undefined);
});

test('issuance preserves valid signed UUIDs and replaces invalid signed values', () => {
  for (const value of [browserId, false, '<img src=x>', undefined]) {
    const res = response();
    const issued = [];
    res.cookie = (...args) => issued.push(args);
    getFingerprintEvent({
      headers: {}, signedCookies: { browserId: value }, body: { data: encode({ visitorId }) },
    }, res);
    assert.ok(res.body.eventId);
    assert.equal(issued.length, value === browserId ? 0 : 1);
    if (issued.length) assert.notEqual(issued[0][1], value);
  }
});

test('malformed visitor IDs cannot obtain events, and malformed decrypted events are rejected', () => {
  const previousLogs = fingerprintLogs;
  for (const value of ['<img src=x onerror=alert(1)>', 'a'.repeat(31), `${visitorId}\n`, 123, {}, null]) {
    const res = response();
    res.cookie = () => assert.fail('invalid input must not issue cookies');
    getFingerprintEvent({ headers: {}, body: { data: encode({ visitorId: value }) } }, res);
    assert.equal(typeof res.body, 'string');
    assert.match(res.body, /Invalid fingerprint visitorId/);
    assert.throws(() => verifyFingerprintEvent(encrypt(String(value)), { signedCookies: { browserId } }), /fingerprint event/);
  }
  assert.throws(() => verifyFingerprintEvent(encrypt(fingerprint), { signedCookies: { browserId } }), /fingerprint event/);
  assert.throws(() => verifyFingerprintEvent(encrypt(`${fingerprint}\n`), { signedCookies: { browserId } }), /fingerprint event/);
  assert.equal(fingerprintLogs, previousLogs, 'invalid payloads must not enqueue external log work');
});

test('malformed decoded shapes and missing bodies are expected rejections without external logging', () => {
  const previousLogs = fingerprintLogs;
  for (const body of [null, undefined, {}, { data: encode(null) }, { data: encode([]) }, { data: encode(123) }]) {
    const res = response();
    res.cookie = () => assert.fail('invalid input must not issue a cookie');
    getFingerprintEvent({ headers: {}, body }, res);
    assert.match(res.body, /fingerprint data/);
  }
  assert.equal(fingerprintLogs, previousLogs);
});

test('older clients can still submit a full fingerprint result', () => {
  const res = response();
  res.cookie = () => assert.fail('verified cookie reissued');
  getFingerprintEvent({
    headers: {}, signedCookies: { browserId }, body: { data: encode({
      visitorId, version: '5.2.0', confidence: { score: 0.9 },
      components: { legacy: { value: 'x'.repeat(16384), duration: 1 } },
    }) },
  }, res);
  assert.ok(res.body.visitorId.startsWith(`v2:${visitorId}:`));
  assert.equal(verifyIssued(res.body), res.body.visitorId);
});

const request = (overrides = {}) => ({
  headers: {
    authorization: `Basic ${Buffer.from(`${userId}:test-token`).toString('base64')}`,
    [CSRF_HEADER]: 'test-csrf',
    ...getPredictableHeaders('test-csrf'),
    [VERSION_HEADER]: Version,
    [FINGERPRINT_HEADER]: fingerprint,
  },
  signedCookies: { browserId },
  security: { browserId, fingerprint, validHeaders: true },
  socket: { remoteAddress: '192.0.2.1' },
  path: '/api/user/authenticate', method: 'POST', url: '/api/user/authenticate',
  ...overrides,
});

const database = () => {
  const writes = [];
  const observations = [];
  const user = () => ({
    id: userId, bannedAt: null, ips: [], browserIds: [], fingerprints: [fingerprint],
    lastSeen: new Date(), lang: 'en',
  });
  return { writes, observations,
    $queryRaw: async () => [{ ...user(), ...deviceRestrictions }],
    $executeRaw: async (strings, ...values) => {
      if (strings[0].includes('UPDATE "User"')) writes.push({ fingerprints: { push: values[0] } });
      else observations.push([strings, ...values]);
      return 1;
    }, user: {
    findFirst: async () => user(),
    update: async ({ data }) => { writes.push(data); return {}; },
  } };
};

test('missing, unsigned, and tampered cookies request reload without reaching account sanctions', () => {
  for (const signedCookies of [undefined, { browserId: false }, { browserId: '<img src=x>' }]) {
    const res = response();
    const previousBans = bans.length;
    securityCheck(request({ signedCookies, cookies: { browserId } }), res,
      () => assert.fail('unverified browser must not reach authentication'));
    assert.match(res.body, /Reload the page/);
    assert.equal(bans.length, previousBans);
  }
  const req = request();
  let proceeded = false;
  securityCheck(req, response(), () => { proceeded = true; });
  assert.equal(proceeded, true);
  assert.equal(req.security.browserId, browserId);
});

test('rejected requests cannot create observations; legacy browser links before bans are preserved', async () => {
  for (const security of [
    { browserId, fingerprint: `${visitorId}1111`, validHeaders: true },
    { browserId: '<img src=x>', fingerprint, validHeaders: true },
    { browserId: `${browserId}\n`, fingerprint, validHeaders: true },
    { fingerprint, validHeaders: true },
  ]) {
    const prisma = database();
    const previousBans = bans.length;
    await assert.rejects(auth(prisma, request({ security })));
    assert.deepEqual(prisma.observations, []);
    assert.deepEqual(prisma.writes, security.browserId === browserId ? [{ browserIds: { push: browserId } }] : []);
    assert.equal(bans.length, previousBans);
  }
});

test('accepted requests still record browser ID and IP', async () => {
  const prisma = database();
  await auth(prisma, request());
  assert.equal(prisma.observations.length, 1);
  assert.deepEqual(prisma.writes, [
    { browserIds: { push: browserId } }, { ips: { push: '192.0.2.1' } },
  ]);
});

test('authentication ban checks, IP history and observations share the normalized forwarded address', async () => {
  const prisma = database();
  const req = request();
  req.headers['x-forwarded-for'] = ' ::FFFF:c000:0201,198.51.100.1';
  req.headers['x-real-ip'] = '203.0.113.1';
  req.socket.remoteAddress = '127.0.0.1';
  await auth(prisma, req);
  assert.equal(checkedIps.at(-1), '192.0.2.1');
  assert.deepEqual(prisma.writes.at(-1), { ips: { push: '192.0.2.1' } });
  assert.equal(prisma.observations[0][8], '192.0.2.1');
});

test('invalid or mismatched reauthentication events do not mutate account identifiers', async () => {
  for (const eventId of [undefined, encrypt('<img src=x>'), encrypt(`${visitorId}1111`)]) {
    const prisma = database();
    const res = response();
    await Users.authenticate(prisma)(request({ body: { eventId } }), res);
    assert.deepEqual(prisma.writes, []);
    assert.deepEqual(prisma.observations, []);
    assert.equal(res.body.user, undefined);
  }
});

test('valid reauthentication can register a new fingerprint after event verification', async () => {
  const prisma = database();
  const res = response();
  const newFingerprint = createFingerprint(visitorId, { headers: { 'et-ja4': 'new-client' } });
  await Users.authenticate(prisma)(request({
    body: { eventId: event(newFingerprint) },
    security: { browserId, fingerprint: newFingerprint, validHeaders: true },
  }), res);
  assert.equal(res.body.user.id, userId);
  assert.equal(prisma.observations.length, 1);
  assert.deepEqual(prisma.writes, [
    { browserIds: { push: browserId } }, { ips: { push: '192.0.2.1' } },
    { fingerprints: { push: newFingerprint } },
  ]);
});

test('restricted current identifiers reject without banning accounts or recording observations', async () => {
  for (const kind of ['browserRestricted', 'fingerprintRestricted']) {
    deviceRestrictions = { browserRestricted: false, fingerprintRestricted: false, [kind]: true };
    const prisma = database();
    const previousBans = bans.length;
    try {
      await assert.rejects(auth(prisma, request()));
      assert.deepEqual(prisma.observations, []);
      assert.equal(bans.length, previousBans);
    } finally {
      deviceRestrictions = { browserRestricted: false, fingerprintRestricted: false };
    }
  }
});

test('predictable-header failures reject without creating account or identifier sanctions', async () => {
  const prisma = database();
  const previousBans = bans.length;
  await assert.rejects(auth(prisma, request({ security: { browserId, fingerprint, validHeaders: false } })));
  assert.deepEqual(prisma.observations, []);
  assert.equal(bans.length, previousBans);
});
