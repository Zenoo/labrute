import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { performance } from 'node:perf_hooks';
import {
  after, before, beforeEach, mock, test,
} from 'node:test';
import { createSecurityDatabase } from './helpers/securityDatabase.mjs';
import {
  BanReason, BruteDeletionReason, getBruteGoldValueFromLevel, getBruteGoldValueFromRanking,
} from '@labrute/core';

const errors = [];

const logger = {
  log() {},
  error: (message) => errors.push(message),
};

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    LOGGER: logger,
    DISCORD: () => ({}),
  },
});
const { enforceMultipleAccountCases } = await import('../lib/utils/automaticCaseActions.js');
const { recordAccountObservation, reportMultipleAccountObservations } = await import('../lib/utils/accountObservations.js');

const {
  reviewMultipleAccountCase, listMultipleAccountCases, getMultipleAccountCase,
} = await import('../lib/utils/multipleAccountCases.js');

const { editSharedBrowserExemptions } = await import('../lib/utils/identifierSanctions.js');
const { unbanUser } = await import('../lib/utils/user/unbanUser.js');
const { banUser } = await import('../lib/utils/user/banUser.js');
const enabled = !!process.env.OBSERVATION_TEST_DATABASE_URL;
const integration = (name, fn) => test(name, { skip: !enabled }, fn);
let fixture;
let db;
const now = new Date();
const fingerprint = `v2:${'a'.repeat(32)}:none`;

const actor = {
  id: randomUUID(),
  admin: true,
  lang: 'en',
  fingerprints: [],
};

before(async () => {
  if (enabled) {
    fixture = await createSecurityDatabase();
    db = fixture.prisma;
  }
});
after(async () => fixture?.close());
beforeEach(async () => {
  errors.length = 0;

  if (db) {
    await db.$executeRawUnsafe(`TRUNCATE "User", "SharedBrowser", "KnownFingerprint",
    "SecurityAction", "MultipleAccountCaseAction", "MultipleAccountCaseReview", "MultipleAccountCase" CASCADE`);
  }
});

const user = (options = {}) => db.user.create({
  data: {
    id: randomUUID(),
    name: 'Account ' + randomUUID().slice(0, 8),
    connexionToken: randomUUID(),
    ...options,
  },
});

const observe = (id, browserId, fp = fingerprint, ip = '192.0.2.1', time = now) => recordAccountObservation(db, id, {
  signedCookies: { browserId },
  security: {
    browserId,
    fingerprint: fp,
    validHeaders: true,
  },
  headers: {},
  socket: { remoteAddress: ip },
}, time);

const group = async (count = 4, options = {}) => {
  const browserId = randomUUID();
  const users = [];

  for (let i = 0; i < count; i++) {
    const row = await user(i === 0 ? options : {});

    users.push(row);
    await observe(row.id, browserId);
  }

  return {
    users,
    browserId,
  };
};

const capture = () => reportMultipleAccountObservations(db, logger, now);
const enforce = () => enforceMultipleAccountCases(db, logger, () => now);

integration('automatic browser policy bans a qualifying cohort once and preserves case-linked audit evidence', async () => {
  const data = await group();

  await capture();
  await Promise.all([enforce(), enforce()]);
  assert.equal(await db.user.count({
    where: {
      bannedAt: { not: null },
      banReason: BanReason.MULTIPLE_ACCOUNTS,
    },
  }), 4);
  assert.equal(await db.userLog.count({ where: { type: 'BANNED' } }), 4);
  const actions = await db.multipleAccountCaseAction.findMany();

  assert.equal(actions.length, 4);
  assert.ok(actions.every((action) => action.status === 'banned' && action.attempts === 1));
  assert.equal((await db.multipleAccountCase.findFirst()).status, 'processed');
  const audits = await db.securityAction.findMany({ where: { action: 'ban' } });

  assert.equal(audits.length, 4);
  assert.ok(
    audits.every((audit) => audit.actorId === null && audit.reason.includes(actions[0].caseId)),
  );
  const profile = await listMultipleAccountCases(db, 'all', undefined, data.users[0].id);

  assert.equal(profile.cases.length, 1);
  assert.equal(profile.cases[0].accountAction.status, 'banned');
  const detail = await getMultipleAccountCase(db, actions[0].caseId);
  const bannedUser = await db.user.findUnique({ where: { id: data.users[0].id } });

  assert.equal(bannedUser.banAppealCode, detail.case.appealCode);
  const appeal = await getMultipleAccountCase(db, `  MC-${bannedUser.banAppealCode.toUpperCase()}  `);

  assert.equal(appeal.case.id, detail.case.id, 'appeals resolve the exact ban case, even when processed');
  assert.ok(detail.users.every((entry) => entry.automaticAction.status === 'banned'));
  await enforce();
  assert.equal(await db.userLog.count({ where: { type: 'BANNED' } }), 4);
});

integration('approved pairs, staff, and below-threshold cohorts are not automatically sanctioned', async () => {
  const data = await group(4, { admin: true });

  await capture();
  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
  assert.equal(await db.multipleAccountCaseAction.count(), 0, 'staff cannot push three ordinary accounts over the threshold');
  assert.equal((await db.multipleAccountCase.findFirst()).status, 'processed');
  const other = await group(5);

  await editSharedBrowserExemptions(db, other.browserId, [other.users[0].id, other.users[1].id], actor.id, 'Family');
  await capture();
  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
  assert.equal((await db.user.findUnique({ where: { id: data.users[0].id } })).admin, true);
});

integration('manual unban and reban clear the automatic case appeal reference', async () => {
  const data = await group();

  await capture();
  await enforce();
  const manual = data.users[0];

  await unbanUser(db, manual.id, actor);
  assert.equal((await db.user.findUnique({ where: { id: manual.id } })).banAppealCode, null);
  await banUser(db, manual.id, BanReason.MULTIPLE_ACCOUNTS, actor);
  const row = await db.multipleAccountCase.findFirst();

  for (const account of data.users.slice(1)) {
    const banned = await db.user.findUnique({ where: { id: account.id } });

    assert.equal(banned.banAppealCode, row.appealCode);
  }

  assert.equal((await db.user.findUnique({ where: { id: manual.id } })).banAppealCode, null,
    'a later manual ban must not retain an older automatic case reference');
});

integration('overlapping qualifying browser cohorts sanction every eligible account without duplicate ban logs', async () => {
  const first = await group();
  const secondBrowser = randomUUID();

  await observe(first.users[0].id, secondBrowser);

  for (let i = 0; i < 3; i++) {
    const row = await user();

    await observe(row.id, secondBrowser);
  }

  await capture();
  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 7);
  assert.equal(await db.userLog.count({ where: { type: 'BANNED' } }), 7);
  assert.equal(await db.multipleAccountCaseAction.count({ where: { status: 'banned' } }), 7);
});

integration('the fingerprint/IP rule requires more than thirty current non-exempt accounts', async () => {
  for (let i = 0; i < 31; i++) {
    const row = await user();

    await observe(row.id, randomUUID());
  }

  await capture();
  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 31);
  assert.equal((await db.multipleAccountCase.findFirst()).signal, 'fingerprint-ip');
});

integration('known fingerprints and a manual case dismissal prevent automatic bans', async () => {
  const data = await group();

  await capture();
  const row = await db.multipleAccountCase.findFirst();

  await reviewMultipleAccountCase(db, row.id, actor.id, {
    revision: 1,
    decision: 'dismissed',
    reason: 'Shared household',
  });
  await enforce();
  assert.equal(await db.multipleAccountCaseAction.count(), 0);
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
  const otherFp = `v2:${'b'.repeat(32)}:none`;

  for (let i = 0; i < 31; i++) {
    const account = await user();

    await observe(account.id, randomUUID(), otherFp, '198.51.100.1');
  }

  await capture();
  await db.knownFingerprint.create({ data: { id: otherFp } });
  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
  assert.equal((await db.user.findUnique({ where: { id: data.users[0].id } })).bannedAt, null);
});

integration('expired evidence and unsupported rule versions cannot trigger automatic sanctions', async () => {
  await group();
  await capture();
  await enforceMultipleAccountCases(db, logger, () => new Date(now.getTime() + 8 * 86400000));
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
  const other = await group();

  await capture();
  await db.multipleAccountCase.updateMany({
    where: { browserId: other.browserId },
    data: { ruleVersion: 2 },
  });
  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
});

integration('a newly approved pair after queue creation invalidates a four-account cohort before any ban', async () => {
  const data = await group();

  await capture();
  await db.sharedBrowser.create({ data: { id: data.browserId } });
  const chosen = data.users[0].id;

  await db.$executeRawUnsafe(`CREATE FUNCTION approve_queued_pair() RETURNS trigger LANGUAGE plpgsql AS $$
    BEGIN IF NEW."userId" = '${chosen}'::uuid THEN
      INSERT INTO "SharedBrowserExemption" ("userId", "browserId", reason, "createdAt")
      VALUES ('${chosen}', '${data.browserId}', 'Approval committed after queue selection', NOW())
      ON CONFLICT DO NOTHING;
    END IF; RETURN NEW; END $$`);
  await db.$executeRawUnsafe(`CREATE TRIGGER approve_queued_pair AFTER INSERT ON "MultipleAccountCaseAction"
    FOR EACH ROW EXECUTE FUNCTION approve_queued_pair()`);

  try {
    await enforce();
    assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
    assert.equal(await db.multipleAccountCaseAction.count({ where: { status: 'skipped' } }), 4);
  } finally {
    await db.$executeRawUnsafe('DROP TRIGGER approve_queued_pair ON "MultipleAccountCaseAction"');
    await db.$executeRawUnsafe('DROP FUNCTION approve_queued_pair()');
  }
});

integration('failed ban transactions roll back brute/clan changes and resume without repeating successful sanctions', async () => {
  const data = await group();
  const owner = data.users[0];
  const outsider = await user();
  const clan = await db.clan.create({ data: { name: 'Rollback clan' } });

  const brute = await db.brute.create({
    data: {
      name: 'Banned owner',
      gender: 'male',
      userId: owner.id,
      clanId: clan.id,
    },
  });

  const survivor = await db.brute.create({
    data: {
      name: 'Surviving owner',
      gender: 'male',
      userId: outsider.id,
      clanId: clan.id,
    },
  });

  const points = getBruteGoldValueFromLevel(brute.level)
  + getBruteGoldValueFromRanking(brute.ranking, brute.ascensions) * 2;

  await db.clan.update({
    where: { id: clan.id },
    data: {
      masterId: brute.id,
      points: points * 2,
    },
  });
  await capture();
  await db.$executeRawUnsafe(`CREATE FUNCTION fail_owner_ban() RETURNS trigger LANGUAGE plpgsql AS $$
    BEGIN IF NEW.id = '${brute.id}'::uuid AND NEW."deletedAt" IS NOT NULL THEN
      RAISE EXCEPTION 'Simulated brute deletion failure'; END IF; RETURN NEW; END $$`);
  await db.$executeRawUnsafe('CREATE TRIGGER fail_owner_ban BEFORE UPDATE ON "Brute" FOR EACH ROW EXECUTE FUNCTION fail_owner_ban()');

  try {
    await enforce();
    assert.equal((await db.user.findUnique({ where: { id: owner.id } })).bannedAt, null);
    assert.equal((await db.brute.findUnique({ where: { id: brute.id } })).deletedAt, null);
    assert.equal((await db.clan.findUnique({ where: { id: clan.id } })).points, points * 2);
    assert.equal(await db.multipleAccountCaseAction.count({ where: { status: 'failed' } }), 1);
    assert.equal(await db.userLog.count({ where: { type: 'BANNED' } }), 3);
    assert.equal(errors.length, 1);
  } finally {
    await db.$executeRawUnsafe('DROP TRIGGER fail_owner_ban ON "Brute"');
    await db.$executeRawUnsafe('DROP FUNCTION fail_owner_ban()');
  }

  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 4);
  assert.equal(await db.userLog.count({ where: { type: 'BANNED' } }), 4);
  const action = await db.multipleAccountCaseAction.findFirst({ where: { userId: owner.id } });

  assert.equal(action.status, 'banned');
  assert.equal(action.attempts, 2);
  const updated = await db.clan.findUnique({ where: { id: clan.id } });

  assert.equal(updated.masterId, survivor.id);
  assert.equal(updated.points, points);
  assert.equal(
    (await db.brute.findUnique({ where: { id: brute.id } })).deletionReason,
    BruteDeletionReason.BANNED_USER,
  );
  await unbanUser(db, owner.id, actor);
  await enforce();
  assert.equal((await db.user.findUnique({ where: { id: owner.id } })).bannedAt, null, 'processed cases do not undo manual unbans');
});

integration('hundreds of automatic account actions run in bounded batches with no duplicate bans', async (t) => {
  const users = [];

  for (let i = 0; i < 200; i++) {
    users.push(await user());
  }

  for (const account of users) {
    await observe(account.id, randomUUID());
  }

  await capture();
  const start = performance.now();

  await enforce();
  t.diagnostic(`200 automatic account actions: ${Math.round(performance.now() - start)}ms locally`);
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 200);
  assert.equal(await db.userLog.count({ where: { type: 'BANNED' } }), 200);
  assert.equal(await db.securityAction.count({ where: { action: 'ban' } }), 200);
  assert.equal(await db.multipleAccountCaseAction.count({ where: { status: 'banned' } }), 200);
});

integration('an audit failure rolls back the account ban and ban log and is retried exactly once', async () => {
  const data = await group();

  await capture();
  const selected = data.users[0].id;

  await db.$executeRawUnsafe(`CREATE FUNCTION fail_ban_audit() RETURNS trigger LANGUAGE plpgsql AS $$
    BEGIN IF NEW."userId" = '${selected}'::uuid AND NEW.action = 'ban' THEN
      RAISE EXCEPTION 'Audit unavailable'; END IF; RETURN NEW; END $$`);
  await db.$executeRawUnsafe('CREATE TRIGGER fail_ban_audit BEFORE INSERT ON "SecurityAction" FOR EACH ROW EXECUTE FUNCTION fail_ban_audit()');

  try {
    await enforce();
    assert.equal((await db.user.findUnique({ where: { id: selected } })).bannedAt, null);
    assert.equal(await db.userLog.count({
      where: {
        type: 'BANNED',
        userId: selected,
      },
    }), 0);
    assert.equal(await db.multipleAccountCaseAction.count({
      where: {
        userId: selected,
        status: 'failed',
      },
    }), 1);
  } finally {
    await db.$executeRawUnsafe('DROP TRIGGER fail_ban_audit ON "SecurityAction"');
    await db.$executeRawUnsafe('DROP FUNCTION fail_ban_audit()');
  }

  await enforce();
  assert.equal(await db.userLog.count({ where: { type: 'BANNED' } }), 4);
  assert.equal(
    (await db.multipleAccountCaseAction.findFirst({ where: { userId: selected } })).attempts,
    2,
  );
});

integration('manual unbans stop an older queued cohort from automatically undoing an appeal', async () => {
  const data = await group();

  await capture();
  const row = await db.multipleAccountCase.findFirst();

  await db.multipleAccountCaseAction.createMany({
    data: data.users.map((account) => ({
      caseId: row.id,
      userId: account.id,
      policyVersion: 1,
      reason: 'Interrupted queue',
      status: 'pending',
    })),
  });
  await banUser(db, data.users[0].id, BanReason.MULTIPLE_ACCOUNTS, actor);
  await unbanUser(db, data.users[0].id, actor);
  await enforce();
  assert.equal(await db.user.count({ where: { bannedAt: { not: null } } }), 0);
  assert.equal(await db.multipleAccountCaseAction.count({ where: { status: 'skipped' } }), 4);
});

integration('unban restoration, rename tokens and account state roll back together on audit failure', async () => {
  const account = await user();

  const brute = await db.brute.create({
    data: {
      name: 'Restored name',
      gender: 'male',
      userId: account.id,
    },
  });

  await banUser(db, account.id, BanReason.MULTIPLE_ACCOUNTS, actor);
  await db.brute.create({
    data: {
      name: brute.name,
      gender: 'male',
    },
  });
  await db.$executeRawUnsafe(`CREATE FUNCTION fail_unban_audit() RETURNS trigger LANGUAGE plpgsql AS $$
    BEGIN IF NEW.action = 'unban' THEN RAISE EXCEPTION 'Audit unavailable'; END IF; RETURN NEW; END $$`);
  await db.$executeRawUnsafe('CREATE TRIGGER fail_unban_audit BEFORE INSERT ON "SecurityAction" FOR EACH ROW EXECUTE FUNCTION fail_unban_audit()');

  try {
    await assert.rejects(unbanUser(db, account.id, actor));
    assert.ok((await db.user.findUnique({ where: { id: account.id } })).bannedAt);
    const unchanged = await db.brute.findUnique({ where: { id: brute.id } });

    assert.ok(unchanged.deletedAt);
    assert.equal(unchanged.name, brute.name);
    assert.equal(await db.inventoryItem.count({ where: { bruteId: brute.id } }), 0);
  } finally {
    await db.$executeRawUnsafe('DROP TRIGGER fail_unban_audit ON "SecurityAction"');
    await db.$executeRawUnsafe('DROP FUNCTION fail_unban_audit()');
  }

  await unbanUser(db, account.id, actor);
  await unbanUser(db, account.id, actor);
  assert.equal((await db.brute.findUnique({ where: { id: brute.id } })).deletedAt, null);
  assert.equal((await db.inventoryItem.findFirst({ where: { bruteId: brute.id } })).count, 1);
  assert.equal(await db.securityAction.count({ where: { action: 'unban' } }), 1);
});
