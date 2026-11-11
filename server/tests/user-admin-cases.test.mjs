import assert from 'node:assert/strict';
import { mock, test } from 'node:test';

const id = '11111111-1111-4111-8111-111111111111';
mock.module('../lib/context.js', { namedExports: { GLOBAL: {}, LOGGER: {}, DISCORD: () => ({}) } });
mock.module('../lib/utils/auth.js', { namedExports: {
  auth: async (_db, _req, options) => { assert.equal(options.admin, true); return { id, admin: true }; },
} });
mock.module('../lib/utils/ServerState.js', { namedExports: { ServerState: {
  getKnownFingerprints() { assert.fail('The profile must not scan legacy fingerprint exceptions'); },
} } });
const { Users } = await import('../lib/controllers/Users.js');

test('user admin loads account details and bounded sanction history without legacy overlap queries', async () => {
  let lookups = 0;
  const history = [{ id: 'audit', action: 'ban', actorId: null, reason: 'Automatic case' }];
  const db = { user: {
    findFirst: async (args) => {
      lookups++;
      assert.deepEqual(args.omit, { fingerprints: true, browserIds: true, ips: true, sharedBrowserId: true });
      return { id, name: 'Case account', achievements: [], brutes: [] };
    }, findMany() { assert.fail('No historical browser or fingerprint overlap scan should run'); },
  }, securityAction: { findMany: async (args) => {
    assert.equal(args.take, 25);
    assert.deepEqual(args.where, { subjectType: 'account', subjectId: id });
    return history;
  } } };
  const res = { status() { return this; }, send(body) { this.body = body; } };
  await Users.get(db)({ params: { identifier: id } }, res);
  assert.equal(lookups, 1);
  assert.deepEqual(res.body.securityHistory, history);
  assert.ok(!('otherUsersSharingFingerprints' in res.body.user));
  assert.ok(!('otherUsersSharingBrowserIds' in res.body.user));
  assert.deepEqual(res.body.duplicates, []);
});
