import assert from 'node:assert/strict';
import { mock, test } from 'node:test';

const actorId = '11111111-1111-4111-8111-111111111111';
const userId = '22222222-2222-4222-8222-222222222222';
const deleted = [];
mock.module('../lib/context.js', { namedExports: {
  GLOBAL: {}, LOGGER: { log() {}, error() {} }, DISCORD: () => ({}),
} });
mock.module('../lib/utils/auth.js', { namedExports: {
  auth: async () => ({ id: actorId, admin: true, lang: 'en' }),
} });
mock.module('../lib/utils/user/deleteUserBrutes.js', { namedExports: {
  deleteBrutes: async (...args) => { deleted.push(args); },
} });
mock.module('../lib/utils/createUserLog.js', { namedExports: {
  createUserLog() {}, createManyUserLogs() {},
} });
const disallow = () => assert.fail('Account actions must not alter identifier or IP restrictions');
mock.module('../lib/utils/ServerState.js', { namedExports: { ServerState: {
  addBannedBrowsers: disallow, addBannedFingerprints: disallow,
  removeBannedBrowsers: disallow, removeBannedFingerprints: disallow, removeBannedIps: disallow,
} } });
const { Users } = await import('../lib/controllers/Users.js');
const response = () => ({ status() { return this; }, send(data) { this.body = data; } });
const database = (bannedAt) => {
  const writes = [];
  return { writes, user: {
    findFirst: async () => ({
      id: userId, bannedAt, fingerprints: ['a'.repeat(32) + '0000'],
      browserIds: [actorId], ips: ['192.0.2.1'], brutes: [],
    }),
    update: async ({ data }) => { writes.push(data); return {}; },
  } };
};

test('account bans never restrict historical devices, including stale bulk-restriction flags', async () => {
  const prisma = database(null);
  const res = response();
  await Users.ban(prisma)({ body: { userId, reason: 'multipleAccounts', banFingerprints: true } }, res);
  assert.deepEqual(res.body, { success: true });
  assert.equal(prisma.writes.length, 1);
  assert.equal(prisma.writes[0].banReason, 'multipleAccounts');
  assert.ok(prisma.writes[0].bannedAt instanceof Date);
  assert.equal(deleted.length, 1);
});

test('unbanning an account cannot revoke independently reviewed IP, browser or fingerprint restrictions', async () => {
  const prisma = database(new Date());
  const res = response();
  await Users.unban(prisma)({ body: { userId } }, res);
  assert.deepEqual(res.body, { success: true });
  assert.deepEqual(prisma.writes, [{ bannedAt: null, banReason: null }]);
});
