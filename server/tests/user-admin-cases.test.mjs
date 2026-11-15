import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { ForbiddenError } from '@labrute/core';

const id = '11111111-1111-4111-8111-111111111111';
const spans = [];

mock.module('../lib/utils/trace.js', {
  namedExports: {
    traced: async (name, callback) => {
      spans.push(name);

      return callback();
    },
  },
});

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    LOGGER: {},
    DISCORD: () => ({}),
  },
});
mock.module('../lib/utils/auth.js', {
  namedExports: {
    auth: async (_db, req, options) => {
      assert.equal(options.admin, true);

      if (req.admin === false) {
        throw new ForbiddenError('Admin required');
      }

      return {
        id,
        admin: true,
      };
    },
  },
});
mock.module('../lib/utils/ServerState.js', {
  namedExports: {
    ServerState: {
      getKnownFingerprints() {
        assert.fail('The profile must not scan legacy fingerprint exceptions');
      },
    },
  },
});
const { Users } = await import('../lib/controllers/Users.js');

test('user admin loads account details and bounded sanction history without legacy overlap queries', async () => {
  spans.length = 0;
  let lookups = 0;

  const history = [{
    id: 'audit',
    action: 'ban',
    actorId: null,
    reason: 'Automatic case',
  }];

  const db = {
    user: {
      findFirst: async (args) => {
        lookups++;
        assert.deepEqual(args.omit, {
          fingerprints: true,
          browserIds: true,
          ips: true,
          sharedBrowserId: true,
        });

        return {
          id,
          name: 'Case account',
          achievements: [],
          brutes: [],
        };
      },
      findMany() {
        assert.fail('No historical browser or fingerprint overlap scan should run');
      },
    },
    securityAction: {
      findMany: async (args) => {
        assert.equal(args.take, 25);
        assert.deepEqual(args.where, {
          subjectType: 'account',
          subjectId: id,
        });

        return history;
      },
    },
    userLog: {
      findMany: async (args) => {
        assert.equal(args.take, 25);
        assert.deepEqual(args.where, {
          userId: id,
          type: 'BANNED',
        });

        return [{
          id: 'old-ban',
          date: new Date('2025-01-01'),
        }];
      },
    },
  };

  const res = {
    status() {
      return this;
    },
    send(body) {
      this.body = body;
    },
  };

  await Users.get(db)({ params: { identifier: id } }, res);
  assert.equal(lookups, 1);
  assert.deepEqual(res.body.securityHistory, history);
  assert.ok(!('otherUsersSharingFingerprints' in res.body.user));
  assert.ok(!('otherUsersSharingBrowserIds' in res.body.user));
  assert.deepEqual(res.body.duplicates, []);
  assert.equal(res.body.banHistory[0].id, 'old-ban');
  assert.deepEqual(spans, [
    'users.get.getUser',
    'users.get.securityHistory',
    'users.get.banHistory',
  ]);
});

test('a complete USER appeal code resolves the UUID instead of searching by name', async () => {
  const appealId = '38e05f4c-a7fb-410c-9501-1cae88f8489e';

  const db = {
    user: {
      findFirst: async (args) => {
        assert.equal(args.where.id, appealId);
        assert.equal(args.where.name, undefined);

        return {
          id: appealId,
          achievements: [],
          bannedAt: new Date('2025-01-01'),
          banReason: 'multipleAccounts',
        };
      },
      findMany() {
        assert.fail('A USER appeal code must not search duplicate names');
      },
    },
    securityAction: { findMany: async () => [] },
    userLog: { findMany: async () => [] },
  };

  const res = {
    send(body) {
      this.body = body;
    },
  };

  await Users.get(db)({ params: { identifier: ` user-${appealId.toUpperCase()} ` } }, res);
  assert.equal(res.body.user.id, appealId);
  assert.equal(res.body.user.banReason, 'multipleAccounts');
});

test('related-account investigation rejects non-admins before reading identifiers', async () => {
  const res = {
    status(code) {
      this.code = code;

      return this;
    },
    send(body) {
      this.body = body;
    },
  };

  await Users.relatedAccounts({})({
    admin: false,
    params: { userId: id },
    query: {},
  }, res);
  assert.equal(res.code, 403);
  assert.equal(res.body, 'Admin required');
});
