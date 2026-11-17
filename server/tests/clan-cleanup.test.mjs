import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import {
  after, before, mock, test,
} from 'node:test';
import { createSecurityDatabase } from './helpers/securityDatabase.mjs';

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    LOGGER: {},
    DISCORD: () => ({ sendError: assert.fail }),
  },
});
mock.module('../lib/utils/auth.js', {
  namedExports: {
    auth: async () => ({
      id: randomUUID(),
      admin: true,
    }),
  },
});
const { Clans } = await import('../lib/controllers/Clans.js');
const { deleteBrutes } = await import('../lib/utils/user/deleteUserBrutes.js');
const enabled = !!process.env.OBSERVATION_TEST_DATABASE_URL;
let fixture;
let db;

before(async () => {
  if (enabled) {
    fixture = await createSecurityDatabase();
    db = fixture.prisma;
  }
});
after(async () => fixture?.close());

const brute = (data) => db.brute.create({
  data: {
    name: randomUUID().slice(0, 12),
    gender: 'male',
    ...data,
  },
});

const clan = (data) => db.clan.create({
  data: {
    name: randomUUID(),
    ...data,
  },
});

test('database batch deletion retires the clan when every member is removed', { skip: !enabled }, async () => {
  for (const masterFirst of [true, false]) {
    const group = await clan();
    const master = await brute({ clanId: group.id });
    const member = await brute({ clanId: group.id });

    await db.clan.update({
      where: { id: group.id },
      data: { masterId: master.id },
    });

    const batch = [
      {
        ...master,
        masterOfClan: { id: group.id },
      },
      {
        ...member,
        masterOfClan: null,
      },
    ];

    await db.$transaction((tx) => deleteBrutes(tx, masterFirst ? batch : batch.reverse()));

    const updated = await db.clan.findUniqueOrThrow({ where: { id: group.id } });

    assert.ok(updated.deletedAt);
    assert.equal(updated.masterId, null);
    assert.equal(await db.brute.count({ where: { clanId: group.id } }), 0);
  }
});

test('database admin deletion detaches members, roles and requests without deleting brutes', { skip: !enabled }, async () => {
  const group = await clan({ participateInClanWar: true });

  const role = await db.clanRole.create({
    data: {
      clanId: group.id,
      name: 'Officer',
    },
  });

  const master = await brute({
    clanId: group.id,
    clanRoleId: role.id,
  });

  const applicant = await brute({ wantToJoinClanId: group.id });

  await db.clan.update({
    where: { id: group.id },
    data: { masterId: master.id },
  });

  const res = {
    status(code) {
      assert.equal(code, 200);

      return this;
    },
    send() {},
  };

  await Clans.adminDelete(db)({ params: { id: group.id } }, res);

  const updated = await db.clan.findUniqueOrThrow({ where: { id: group.id } });
  const detached = await db.brute.findUniqueOrThrow({ where: { id: master.id } });

  assert.ok(updated.deletedAt);
  assert.equal(updated.masterId, null);
  assert.equal(updated.participateInClanWar, false);
  assert.equal(detached.clanId, null);
  assert.equal(detached.clanRoleId, null);
  assert.equal(detached.deletedAt, null);
  assert.equal(await db.clanRole.count({ where: { clanId: group.id } }), 0);
  const updatedApplicant = await db.brute.findUniqueOrThrow({ where: { id: applicant.id } });

  assert.equal(updatedApplicant.wantToJoinClanId, null);
});

test('migration retires only empty active clans and is safe to repeat', { skip: !enabled }, async () => {
  const empty = await clan();
  const ghost = await clan();

  const deletedMaster = await brute({
    clanId: ghost.id,
    deletedAt: new Date(),
  });

  const healthy = await clan();
  const liveMaster = await brute({ clanId: healthy.id });
  const oldDate = new Date('2025-01-01T00:00:00Z');
  const retired = await clan({ deletedAt: oldDate });

  await db.clan.update({
    where: { id: ghost.id },
    data: { masterId: deletedMaster.id },
  });
  await db.clan.update({
    where: { id: healthy.id },
    data: { masterId: liveMaster.id },
  });
  const sql = readFileSync(new URL('../prisma/migrations/20261117120000_cleanup_empty_clans/migration.sql', import.meta.url), 'utf8');

  await db.$executeRawUnsafe(sql);

  for (const id of [empty.id, ghost.id]) {
    const updated = await db.clan.findUniqueOrThrow({ where: { id } });

    assert.ok(updated.deletedAt);
    assert.equal(updated.masterId, null);
  }

  const unchanged = await db.clan.findUniqueOrThrow({ where: { id: healthy.id } });

  assert.equal(unchanged.deletedAt, null);
  assert.equal(unchanged.masterId, liveMaster.id);
  const unchangedRetired = await db.clan.findUniqueOrThrow({ where: { id: retired.id } });

  assert.deepEqual(unchangedRetired.deletedAt, oldDate);
  assert.equal(await db.$executeRawUnsafe(sql), 0);
});
