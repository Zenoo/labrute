import assert from 'node:assert/strict';
import { test } from 'node:test';
import { BruteDeletionReason } from '@labrute/core';
import { deleteBrutes } from '../lib/utils/user/deleteUserBrutes.js';

const fixture = ({
  members, masterId = 'master', deletedAt = null,
}) => {
  const clan = {
    id: 'clan',
    masterId,
    deletedAt,
  };

  const brutes = members.map((id) => ({
    id,
    clanId: clan.id,
    clanRoleId: 'role',
    deletedAt: null,
    level: 1,
    ranking: 10,
    ascensions: 0,
  }));

  const ownershipWrites = [];
  const rawQueries = [];
  let ownershipReads = 0;

  const prisma = {
    $executeRaw: async (...args) => {
      rawQueries.push(args);
    },
    brute: {
      update: async ({ where, data }) => {
        const brute = brutes.find((row) => row.id === where.id);

        assert.equal(brute.deletedAt, null);
        Object.assign(brute, {
          deletedAt: data.deletedAt,
          deletionReason: data.deletionReason,
          clanId: data.clanId,
          clanRoleId: data.clanRoleId,
        });

        if (data.masterOfClan?.disconnect && clan.masterId === brute.id) {
          clan.masterId = null;
        }

        return brute;
      },
    },
    clan: {
      findUnique: async ({ where, select }) => {
        ownershipReads += 1;
        assert.equal(where.id, clan.id);
        assert.equal(select.brutes.take, 1);
        assert.deepEqual(select.brutes.where, { deletedAt: null });

        return {
          deletedAt: clan.deletedAt,
          master: brutes.find((brute) => brute.id === clan.masterId) ?? null,
          brutes: brutes.filter((brute) => brute.clanId === clan.id && !brute.deletedAt)
            .sort((a, b) => a.id.localeCompare(b.id)).slice(0, 1),
        };
      },
      update: async ({ where, data }) => {
        assert.equal(where.id, clan.id);

        if (!data.points) {
          ownershipWrites.push(data);
          Object.assign(clan, data);

          // Ownership must never pass to another brute awaiting deletion.
          if (data.masterId) {
            assert.ok(!pendingIds.includes(data.masterId));
          }
        }

        return clan;
      },
    },
  };

  let pendingIds = [];

  return {
    clan,
    brutes,
    ownershipWrites,
    rawQueries,
    get ownershipReads() {
      return ownershipReads;
    },
    async remove(ids, reason) {
      pendingIds = ids;

      // Capture the same original ownership snapshot as the account-ban query.
      const batch = ids.map((id) => ({
        ...brutes.find((brute) => brute.id === id),
        masterOfClan: clan.masterId === id ? { id: clan.id } : null,
      }));

      await deleteBrutes(prisma, batch, reason);
    },
  };
};

for (const order of [['master', 'member'], ['member', 'master']]) {
  test(`deleting all members retires the clan (${order.join(', ')})`, async () => {
    const db = fixture({ members: ['master', 'member'] });

    await db.remove(order);

    assert.ok(db.clan.deletedAt instanceof Date);
    assert.equal(db.clan.masterId, null);
    assert.equal(db.ownershipReads, 1);
    assert.equal(db.ownershipWrites.length, 1);
    assert.equal(db.rawQueries.length, 2);

    for (const brute of db.brutes) {
      assert.ok(brute.deletedAt instanceof Date);
      assert.equal(brute.clanId, null);
      assert.equal(brute.clanRoleId, null);
      assert.equal(brute.deletionReason, BruteDeletionReason.BANNED_USER);
    }
  });

  test(`ownership passes to a surviving member (${order.join(', ')})`, async () => {
    const db = fixture({ members: ['master', 'member', 'survivor'] });

    await db.remove(order);

    assert.equal(db.clan.deletedAt, null);
    assert.equal(db.clan.masterId, 'survivor');
    assert.equal(db.ownershipWrites.length, 1);
  });
}

test('deleting an ordinary member preserves the surviving master', async () => {
  const db = fixture({ members: ['master', 'member', 'another'] });

  await db.remove(['member'], null);

  assert.equal(db.clan.masterId, 'master');
  assert.equal(db.clan.deletedAt, null);
  assert.deepEqual(db.ownershipWrites, []);
  assert.equal(db.brutes.find((brute) => brute.id === 'member').deletionReason, undefined);
});

test('removing the last member also retires a clan with stale ownership', async () => {
  const db = fixture({
    members: ['member'],
    masterId: 'previously-deleted',
  });

  await db.remove(['member']);

  assert.ok(db.clan.deletedAt instanceof Date);
  assert.equal(db.clan.masterId, null);
});

test('a lone clan master deletion retires the clan', async () => {
  const db = fixture({ members: ['master'] });

  await db.remove(['master']);

  assert.ok(db.clan.deletedAt instanceof Date);
  assert.equal(db.clan.masterId, null);
});

test('an empty deletion batch does not query or change clans', async () => {
  const db = fixture({ members: ['master'] });

  await db.remove([]);

  assert.equal(db.ownershipReads, 0);
  assert.deepEqual(db.ownershipWrites, []);
  assert.deepEqual(db.rawQueries, []);
});
