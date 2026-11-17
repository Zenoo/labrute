import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { ForbiddenError } from '@labrute/core';
import { Prisma } from '@labrute/prisma';

const id = '11111111-1111-4111-8111-111111111111';

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    LOGGER: {},
    DISCORD: () => ({
      invalidAPIUse() {},
      sendError() {},
    }),
  },
});
mock.module('../lib/utils/auth.js', {
  namedExports: {
    auth: async (_db, req, options) => {
      assert.deepEqual(options, { admin: true });

      if (!req.admin) {
        throw new ForbiddenError('Admin required');
      }

      return {
        id,
        admin: true,
      };
    },
  },
});
const { Clans } = await import('../lib/controllers/Clans.js');

const response = () => ({
  status(code) {
    this.code = code;

    return this;
  },
  send(body) {
    this.body = body;
  },
});

test('admin deletion disbands even a ghost clan atomically without deleting brutes or history', async () => {
  const writes = [];

  const tx = {
    clan: {
      update: async (args) => writes.push(['clan', args]),
    },
    brute: {
      updateMany: async (args) => writes.push(['brutes', args]),
    },
    clanRole: {
      deleteMany: async (args) => writes.push(['roles', args]),
    },
  };

  const db = {
    $transaction: async (callback) => callback(tx),
  };

  const res = response();

  await Clans.adminDelete(db)({
    admin: true,
    params: { id },
  }, res);

  assert.equal(res.code, 200);
  assert.deepEqual(writes, [
    ['clan', {
      where: {
        id,
        deletedAt: null,
      },
      data: {
        deletedAt: writes[0][1].data.deletedAt,
        masterId: null,
        participateInClanWar: false,
      },
      select: { id: true },
    }],
    ['brutes', {
      where: { clanId: id },
      data: {
        clanId: null,
        clanRoleId: null,
      },
    }],
    ['brutes', {
      where: { wantToJoinClanId: id },
      data: { wantToJoinClanId: null },
    }],
    ['roles', { where: { clanId: id } }],
  ]);
  assert.ok(writes[0][1].data.deletedAt instanceof Date);
});

test('non-admins cannot delete clans and invalid clan IDs never reach the database', async () => {
  for (const req of [
    {
      admin: false,
      params: { id },
    },
    {
      admin: true,
      params: { id: 'invalid' },
    },
  ]) {
    const res = response();

    await Clans.adminDelete({})(req, res);

    assert.equal(res.code, req.admin ? 500 : 403);
  }
});

test('a missing or already-deleted clan returns 404 before any member cleanup', async () => {
  const res = response();

  const db = {
    $transaction: async (callback) => callback({
      clan: {
        update: async () => {
          throw new Prisma.PrismaClientKnownRequestError('Clan not found', {
            code: 'P2025',
            clientVersion: 'test',
          });
        },
      },
    }),
  };

  await Clans.adminDelete(db)({
    admin: true,
    params: { id },
  }, res);

  assert.equal(res.code, 404);
});
