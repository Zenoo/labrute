import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import {
  after, before, beforeEach, mock, test,
} from 'node:test';
import { PrismaClient } from '@labrute/prisma';

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    LOGGER: {
      log() {},
      error() {},
    },
    DISCORD: () => ({}),
  },
});

const {
  recordAccountObservation, findMultipleAccountObservationGroups,
  reportMultipleAccountObservations, cleanupAccountObservations,
} = await import('../lib/utils/accountObservations.js');

const {
  editSharedBrowserExemptions, setIdentifierRestriction, getIdentifierRestrictions,
  findUserForAuthentication,
} = await import('../lib/utils/identifierSanctions.js');

const { registerFingerprintIdentity } = await import('../lib/utils/fingerprintEvent.js');
const { createFingerprint } = await import('../lib/utils/fingerprintIdentity.js');
const { normalizeIp } = await import('../lib/utils/clientIp.js');

const {
  createMultipleAccountCases, listMultipleAccountCases,
  getMultipleAccountCase, reviewMultipleAccountCase,
} = await import('../lib/utils/multipleAccountCases.js');

test('observation IPs normalize IPv6 spelling and mapped IPv4 without inventing missing IPs', () => {
  for (const [input, expected] of [
    [' 192.0.2.1 ', '192.0.2.1'],
    ['2001:0DB8:0:0:0:0:0:1', '2001:db8::1'],
    ['::ffff:192.0.2.1', '192.0.2.1'], ['::FFFF:c000:201', '192.0.2.1'],
    [undefined, null], ['', null], ['unknown', null], ['999.0.0.1', null], ['fe80::1%eth0', null],
  ]) {
    assert.equal(normalizeIp(input), expected);
  }
});

test('malformed case reviews are rejected before opening a transaction', async () => {
  const db = {
    $transaction() {
      assert.fail('Invalid review reached the database');
    },
  };

  const actor = randomUUID();
  const id = 'a'.repeat(64);

  for (const input of [null, {}, {
    revision: 1,
    decision: 'ban',
    reason: 'Invalid',
  },
  {
    revision: 0,
    decision: 'open',
    reason: 'Invalid',
  },
  {
    revision: Number.MAX_SAFE_INTEGER,
    decision: 'open',
    reason: 'Invalid',
  },
  {
    revision: 1,
    decision: ['open'],
    reason: 'Invalid',
  },
  {
    revision: 1,
    decision: 'open',
    reason: ' ',
  },
  {
    revision: 1,
    decision: 'open',
    reason: 'x'.repeat(501),
  }]) {
    await assert.rejects(reviewMultipleAccountCase(db, id, actor, input));
  }
});

const databaseUrl = process.env.OBSERVATION_TEST_DATABASE_URL;
const schema = `observation_test_${randomUUID().replaceAll('-', '')}`;
let admin;
let prisma;
let migratedLegacy;
let fingerprintReset;
const now = new Date('2026-11-11T12:00:00.000Z');
const browser = randomUUID();
const fingerprint = `v2:${'a'.repeat(32)}:none`;
const otherFingerprint = `v2:${'b'.repeat(32)}:none`;
const daysAgo = (days) => new Date(now.getTime() - days * 86400000);

const request = (browserId = browser, fp = fingerprint, ip = '192.0.2.1', headers = {}) => ({
  signedCookies: { browserId },
  security: {
    browserId,
    fingerprint: fp,
    validHeaders: true,
  },
  headers,
  socket: { remoteAddress: ip },
});

before(async () => {
  if (!databaseUrl) {
    return;
  }

  const url = new URL(databaseUrl);

  // Never reset tables in a configured development/production database.
  assert.ok(['localhost', '127.0.0.1'].includes(url.hostname));
  assert.ok(['/observation_test', '/labrute_observation_test'].includes(url.pathname));
  admin = new PrismaClient({ datasources: { db: { url: url.toString() } } });
  await admin.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  url.searchParams.set('schema', schema);
  prisma = new PrismaClient({ datasources: { db: { url: url.toString() } } });
  await prisma.$executeRawUnsafe(`CREATE TABLE "User" (
    id UUID PRIMARY KEY, name TEXT DEFAULT 'Fixture account', "bannedAt" TIMESTAMP, "sharedBrowserId" TEXT,
    "connexionToken" UUID DEFAULT '33333333-3333-4333-8333-333333333333',
    lang TEXT DEFAULT 'en', admin BOOLEAN DEFAULT false, moderator BOOLEAN DEFAULT false, "banReason" TEXT,
    "lastSeen" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, fingerprints TEXT[] DEFAULT '{}',
    ips TEXT[] DEFAULT '{}', "browserIds" TEXT[] DEFAULT '{}'
  )`);
  await prisma.$executeRawUnsafe('CREATE TABLE "KnownFingerprint" (id VARCHAR(255) PRIMARY KEY)');
  await prisma.$executeRawUnsafe(`CREATE TABLE "SharedBrowser" (
    id VARCHAR(255) PRIMARY KEY, description VARCHAR(500), "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
  await prisma.$executeRawUnsafe('CREATE TABLE "BannedBrowser" (id VARCHAR(255) PRIMARY KEY)');
  await prisma.$executeRawUnsafe('CREATE TABLE "BannedFingerprint" (id VARCHAR(255) PRIMARY KEY)');

  const migration = readFileSync(new URL(
    '../prisma/migrations/20261111160000_account_observations/migration.sql', import.meta.url,
  ), 'utf8');

  for (const statement of migration.split(';').filter((sql) => sql.trim())) {
    await prisma.$executeRawUnsafe(statement);
  }

  const legacyUser = randomUUID();

  await prisma.$executeRaw`INSERT INTO "SharedBrowser" (id, description) VALUES (${browser}, 'Legacy family')`;
  await prisma.$executeRaw`INSERT INTO "User" (id, "sharedBrowserId") VALUES (${legacyUser}::uuid, ${browser})`;
  await prisma.$executeRaw`INSERT INTO "BannedBrowser" (id) VALUES (${browser})`;
  await prisma.$executeRaw`INSERT INTO "BannedFingerprint" (id) VALUES (${fingerprint})`;

  const sanctionsMigration = readFileSync(new URL(
    '../prisma/migrations/20261111170000_separate_identifier_sanctions/migration.sql', import.meta.url,
  ), 'utf8');

  for (const statement of sanctionsMigration.split(';').filter((sql) => sql.trim())) {
    await prisma.$executeRawUnsafe(statement);
  }

  migratedLegacy = {
    exemptions: await prisma.sharedBrowserExemption.findMany(),
    history: await prisma.securityAction.findMany(),
  };
  await prisma.$executeRaw`UPDATE "User" SET fingerprints = ARRAY['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0000'],
    "bannedAt" = '2026-11-01'::timestamp, "browserIds" = ARRAY[${browser}], ips = ARRAY['192.0.2.1']
    WHERE id = ${legacyUser}::uuid`;
  await prisma.$executeRawUnsafe('INSERT INTO "KnownFingerprint" (id) VALUES (\'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0000\')');
  await prisma.$executeRaw`INSERT INTO "AccountObservation"
    (id, "userId", "browserId", fingerprint, "visitorId", "observedDay", "firstSeen", "lastSeen")
    VALUES (${'f'.repeat(64)}, ${legacyUser}::uuid, ${browser}::uuid, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0000',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2026-11-01'::date, '2026-11-01'::timestamp, '2026-11-01'::timestamp)`;

  const resetMigration = readFileSync(new URL(
    '../prisma/migrations/20261111180000_fingerprint_v2/migration.sql', import.meta.url,
  ), 'utf8');

  for (const statement of resetMigration.split(';').filter((sql) => sql.trim())) {
    await prisma.$executeRawUnsafe(statement);
  }

  const casesMigration = readFileSync(new URL(
    '../prisma/migrations/20261111200000_multiple_account_cases/migration.sql', import.meta.url,
  ), 'utf8');

  for (const statement of casesMigration.split(';').filter((sql) => sql.trim())) {
    await prisma.$executeRawUnsafe(statement);
  }

  const automaticMigration = readFileSync(new URL(
    '../prisma/migrations/20261111210000_automatic_case_actions/migration.sql', import.meta.url,
  ), 'utf8');

  for (const statement of automaticMigration.split(';').filter((sql) => sql.trim())) {
    await prisma.$executeRawUnsafe(statement);
  }

  const appealMigration = readFileSync(new URL(
    '../prisma/migrations/20261111220000_ban_appeal_codes/migration.sql', import.meta.url,
  ), 'utf8');

  for (const statement of appealMigration.split(';').filter((sql) => sql.trim())) {
    await prisma.$executeRawUnsafe(statement);
  }

  fingerprintReset = {
    users: await prisma.$queryRaw`SELECT fingerprints, "bannedAt", "browserIds", ips FROM "User"`,
    known: await prisma.knownFingerprint.count(),
    banned: await prisma.bannedFingerprint.count(),
    observations: await prisma.accountObservation.count(),
    browsers: await prisma.bannedBrowser.count(),
    approvals: await prisma.sharedBrowserExemption.count(),
    audits: await prisma.securityAction.count(),
  };

});

beforeEach(async () => {
  if (prisma) {
    await prisma.$executeRawUnsafe(`TRUNCATE "AccountObservation", "KnownFingerprint", "User",
    "SharedBrowser", "SecurityAction", "BannedBrowser", "BannedFingerprint",
    "MultipleAccountCaseAction", "MultipleAccountCaseReview", "MultipleAccountCase" CASCADE`);
  }
});

after(async () => {
  await prisma?.$disconnect();

  if (admin) {
    await admin.$executeRawUnsafe(`DROP SCHEMA "${schema}" CASCADE`);
    await admin.$disconnect();
  }
});

const integration = (name, fn) => test(name, { skip: !databaseUrl }, fn);

const user = async (sharedBrowserId = null, bannedAt = null) => {
  const id = randomUUID();

  await prisma.$executeRaw`INSERT INTO "User" (id, "sharedBrowserId", "bannedAt")
    VALUES (${id}::uuid, ${sharedBrowserId}, ${bannedAt})`;

  if (sharedBrowserId) {
    await prisma.sharedBrowser.upsert({
      where: { id: sharedBrowserId },
      create: { id: sharedBrowserId },
      update: {},
    });
    await prisma.sharedBrowserExemption.create({
      data: {
        userId: id,
        browserId: sharedBrowserId,
        reason: 'Approved fixture',
      },
    });
  }

  return id;
};

const caseGroup = (overrides = {}) => ({
  signal: 'browser',
  browserId: browser,
  fingerprint: null,
  ip: null,
  userIds: Array.from({ length: 4 }, () => randomUUID()).sort(),
  firstSeen: daysAgo(1),
  lastSeen: now,
  ...overrides,
});

integration('daily cases preserve observed evidence and active exclusions without duplicate or rewritten snapshots', async () => {
  const ids = [];

  for (let i = 0; i < 4; i++) {
    const id = await user();

    ids.push(id);
    await recordAccountObservation(prisma, id, request(), now);
  }

  const approved = await user(browser);

  await recordAccountObservation(prisma, approved, request(), now);
  const logs = [];

  await Promise.all(Array.from({ length: 2 }, () => reportMultipleAccountObservations(
    prisma, { log: (line) => logs.push(line) }, now,
  )));
  const original = await prisma.multipleAccountCase.findFirst();

  assert.equal(original.ruleVersion, 1);
  assert.equal(original.signal, 'browser');
  assert.equal(original.threshold, 3);
  assert.equal(original.confidence, 'uncalibrated');
  assert.deepEqual(original.userIds, ids.sort());
  assert.equal(original.accountCount, 4);
  assert.equal(original.windowStart.getTime(), daysAgo(7).getTime());
  assert.equal(original.windowEnd.getTime(), now.getTime());
  assert.equal(original.excludedCount, 1);
  assert.equal(original.exemptions[0].userId, approved);
  assert.equal(original.exemptions[0].browserId, browser);
  assert.equal(original.exemptions[0].reason, 'Approved fixture');
  const actor = randomUUID();

  await reviewMultipleAccountCase(prisma, original.id, actor,
    {
      revision: 1,
      decision: 'dismissed',
      reason: 'Reviewed family',
    });
  await reportMultipleAccountObservations(
    prisma,
    { log: (line) => logs.push(line) },
    new Date(now.getTime() + 60000),
  );
  const saved = await prisma.multipleAccountCase.findFirst();

  assert.equal(await prisma.multipleAccountCase.count(), 1);
  assert.equal(saved.status, 'dismissed');
  assert.equal(saved.revision, 2);
  assert.equal(saved.windowEnd.getTime(), original.windowEnd.getTime());
  assert.deepEqual(saved.exemptions, original.exemptions);
  assert.ok(logs.every((line) => !line.includes(ids[0])), 'logs contain bounded counts, not complete evidence');
  await reportMultipleAccountObservations(prisma, { log() {} }, new Date(now.getTime() + 86400000));
  assert.equal(await prisma.multipleAccountCase.count(), 1, 'unchanged evidence does not reopen reviewed cases each day');
});

integration('case list uses bounded pages and does not return full account arrays or exemption payloads', async () => {
  await createMultipleAccountCases(
    prisma,
    Array.from({ length: 26 }, () => caseGroup({ browserId: randomUUID() })),
    now,
  );
  const first = await listMultipleAccountCases(prisma);

  assert.equal(first.cases.length, 25);
  assert.ok(first.nextCursor);
  assert.ok(first.cases.every((row) => !('userIds' in row) && !('exemptions' in row)));
  const second = await listMultipleAccountCases(prisma, 'open', first.nextCursor);

  assert.equal(second.cases.length, 1);
  assert.equal(second.nextCursor, null);
  assert.equal(new Set([...first.cases, ...second.cases].map((row) => row.id)).size, 26);
  await assert.rejects(listMultipleAccountCases(prisma, ['open']));
  await assert.rejects(listMultipleAccountCases(prisma, 'open', '<invalid>'));
});

integration('case detail paginates snapshot accounts and retains IDs after account deletion', async () => {
  const live = await user();
  const ids = [live, ...Array.from({ length: 30 }, () => randomUUID())].sort();

  await createMultipleAccountCases(prisma, [caseGroup({
    signal: 'fingerprint-ip',
    browserId: null,
    fingerprint,
    ip: '192.0.2.1',
    userIds: ids,
  })], now);
  const row = await prisma.multipleAccountCase.findFirst();
  const first = await getMultipleAccountCase(prisma, row.id);
  const second = await getMultipleAccountCase(prisma, row.id, String(first.nextAccountOffset));

  assert.equal(first.users.length, 25);
  assert.equal(second.users.length, 6);
  assert.equal(second.nextAccountOffset, null);
  assert.deepEqual([...first.users, ...second.users].map((entry) => entry.id), ids);
  assert.equal([...first.users, ...second.users].find((entry) => entry.id === live).name, 'Fixture account');
  await prisma.$executeRaw`DELETE FROM "User" WHERE id = ${live}::uuid`;
  const page = await getMultipleAccountCase(prisma, row.id, ids.indexOf(live) >= 25 ? '25' : '0');

  assert.equal(page.users.find((entry) => entry.id === live).name, null);
  assert.equal((await prisma.multipleAccountCase.findFirst()).accountCount, 31);
  await assert.rejects(getMultipleAccountCase(prisma, row.id, '-1'));
});

integration('large cases keep list and detail responses bounded without expanding all members in a page query', async () => {
  const ids = Array.from({ length: 40000 }, () => randomUUID()).sort();

  await createMultipleAccountCases(prisma, [caseGroup({ userIds: ids })], now);
  const list = await listMultipleAccountCases(prisma);

  assert.equal(list.cases[0].accountCount, 40000);
  assert.ok(JSON.stringify(list).length < 2000);
  const first = await getMultipleAccountCase(prisma, list.cases[0].id);

  assert.deepEqual(first.users.map((entry) => entry.id), ids.slice(0, 25));
  const last = await getMultipleAccountCase(prisma, list.cases[0].id, '39975');

  assert.deepEqual(last.users.map((entry) => entry.id), ids.slice(39975));
  assert.equal(last.nextAccountOffset, null);
});

integration('concurrent case reviews cannot overwrite each other and exact retries do not duplicate audits', async () => {
  await createMultipleAccountCases(prisma, [caseGroup()], now);
  const original = await prisma.multipleAccountCase.findFirst();
  const actor = randomUUID();

  const decisions = [
    {
      revision: 1,
      decision: 'dismissed',
      reason: 'Family evidence',
    },
    {
      revision: 1,
      decision: 'needs-action',
      reason: 'Needs further investigation',
    },
  ];

  const outcomes = await Promise.allSettled(
    decisions.map((input) => reviewMultipleAccountCase(prisma, original.id, actor, input)),
  );

  assert.equal(outcomes.filter((result) => result.status === 'fulfilled').length, 1);
  const winner = outcomes.findIndex((result) => result.status === 'fulfilled');

  await reviewMultipleAccountCase(prisma, original.id, actor, decisions[winner]);
  assert.equal(await prisma.multipleAccountCaseReview.count(), 1);
  assert.equal((await prisma.multipleAccountCase.findFirst()).revision, 2);
  await assert.rejects(
    reviewMultipleAccountCase(prisma, original.id, randomUUID(), decisions[winner]),
    /changed/,
  );
  await reviewMultipleAccountCase(prisma, original.id, actor,
    {
      revision: 2,
      decision: 'open',
      reason: 'Reopen for additional evidence',
    });
  const reviews = await prisma.multipleAccountCaseReview.findMany({ orderBy: { revision: 'asc' } });

  assert.deepEqual(reviews.map((entry) => entry.revision), [2, 3]);
  assert.equal(reviews[0].reviewerId, actor);
  assert.deepEqual((await prisma.multipleAccountCase.findFirst()).userIds, original.userIds);
  assert.equal(await prisma.bannedBrowser.count(), 0);
  assert.equal(await prisma.bannedFingerprint.count(), 0);
});

integration('review audit failures roll back the status and revision together', async () => {
  await createMultipleAccountCases(prisma, [caseGroup()], now);
  const row = await prisma.multipleAccountCase.findFirst();

  await prisma.$executeRawUnsafe(`CREATE FUNCTION fail_case_review() RETURNS trigger LANGUAGE plpgsql AS $$
    BEGIN RAISE EXCEPTION 'Review audit unavailable'; END $$`);
  await prisma.$executeRawUnsafe(`CREATE TRIGGER fail_case_review BEFORE INSERT ON "MultipleAccountCaseReview"
    FOR EACH ROW EXECUTE FUNCTION fail_case_review()`);

  try {
    await assert.rejects(reviewMultipleAccountCase(prisma, row.id, randomUUID(),
      {
        revision: 1,
        decision: 'dismissed',
        reason: 'Reviewed',
      }));
    assert.equal((await prisma.multipleAccountCase.findFirst()).revision, 1);
    assert.equal((await prisma.multipleAccountCase.findFirst()).status, 'open');
    assert.equal(await prisma.multipleAccountCaseReview.count(), 0);
  } finally {
    await prisma.$executeRawUnsafe('DROP TRIGGER fail_case_review ON "MultipleAccountCaseReview"');
    await prisma.$executeRawUnsafe('DROP FUNCTION fail_case_review()');
  }
});

integration('authentication lookup combines credentials with fresh restrictions and approvals in one query', async () => {
  const id = await user();
  const token = '33333333-3333-4333-8333-333333333333';
  const actorId = randomUUID();
  let queries = 0;

  const counted = {
    $queryRaw: (...args) => {
      queries++;

      return prisma.$queryRaw(...args);
    },
  };

  let row = await findUserForAuthentication(counted, id, token, browser, fingerprint);

  assert.equal(queries, 1);
  assert.equal(row.id, id);
  assert.equal(row.lang, 'en');
  assert.equal(row.browserRestricted, false);
  assert.equal(
    await findUserForAuthentication(prisma, id, randomUUID(), browser, fingerprint),
    null,
  );
  await setIdentifierRestriction(prisma, 'browser', browser, true, actorId, 'Reviewed restriction');
  row = await findUserForAuthentication(prisma, id, token, browser, fingerprint);
  assert.equal(row.browserRestricted, true, 'committed changes are visible on the next lookup');
  await editSharedBrowserExemptions(prisma, browser, [id], actorId, 'Family approval');
  row = await findUserForAuthentication(prisma, id, token, browser, fingerprint);
  assert.equal(row.browserRestricted, false, 'no stale authorization cache');
});

integration('fingerprint reset clears old identity state while preserving account and browser decisions', async () => {
  assert.deepEqual(fingerprintReset.users[0].fingerprints, []);
  assert.ok(fingerprintReset.users[0].bannedAt);
  assert.deepEqual(fingerprintReset.users[0].browserIds, [browser]);
  assert.deepEqual(fingerprintReset.users[0].ips, ['192.0.2.1']);
  assert.equal(fingerprintReset.known, 0);
  assert.equal(fingerprintReset.banned, 0);
  assert.equal(fingerprintReset.observations, 0);
  assert.equal(fingerprintReset.browsers, 1);
  assert.equal(fingerprintReset.approvals, 1);
  assert.equal(fingerprintReset.audits, migratedLegacy.history.length);
});

integration('new identities register atomically without duplicates and banned accounts cannot gain identities', async () => {
  const id = await user();

  await Promise.all(
    Array.from({ length: 12 }, () => registerFingerprintIdentity(prisma, id, fingerprint)),
  );
  const [row] = await prisma.$queryRaw`SELECT fingerprints FROM "User" WHERE id = ${id}::uuid`;

  assert.deepEqual(row.fingerprints, [fingerprint]);
  const banned = await user(null, now);

  assert.equal(await registerFingerprintIdentity(prisma, banned, fingerprint), 0);
  await assert.rejects(async () => registerFingerprintIdentity(prisma, id, 'a'.repeat(32) + '0000'));
});

integration('full JA4 comparison identities persist and enforce independently of other visitor IDs', async () => {
  const id = await user();
  const headers = { 'et-ja4': 't13d1516h2_synthetic_ja4' };
  const current = createFingerprint('a'.repeat(32), { headers });
  const unrelated = createFingerprint('b'.repeat(32), { headers });

  assert.equal(current.length, 104);
  await registerFingerprintIdentity(prisma, id, current);
  await recordAccountObservation(prisma, id, request(browser, current, '192.0.2.1', headers), now);
  const row = await prisma.accountObservation.findFirst();

  assert.equal(row.fingerprint, current);
  assert.equal(row.visitorId, 'a'.repeat(32));
  assert.equal(row.formatVersion, 2);
  assert.equal(row.ja4Hash, current.split(':')[3]);
  await setIdentifierRestriction(prisma, 'fingerprint', current, true, randomUUID(), 'Reviewed abuse');
  assert.equal(
    (await getIdentifierRestrictions(prisma, id, browser, current)).fingerprintRestricted,
    true,
  );
  assert.equal(
    (await getIdentifierRestrictions(prisma, id, browser, unrelated)).fingerprintRestricted,
    false,
  );
});

integration('migration preserves legacy approvals and explicitly labels unknown restriction provenance', async () => {
  assert.equal(migratedLegacy.exemptions.length, 1);
  assert.equal(migratedLegacy.exemptions[0].reason, 'Legacy family');
  assert.equal(migratedLegacy.exemptions[0].createdBy, null);
  assert.equal(migratedLegacy.history.length, 3);
  assert.equal(migratedLegacy.history.filter((event) => event.action === 'legacy-restrict').length, 2);
  assert.ok(migratedLegacy.history.every((event) => event.actorId === null));
});

integration('reviewed restrictions are independent, idempotent, audited and do not spread through history', async () => {
  const id = await user();
  const actorId = randomUUID();

  await Promise.all(Array.from({ length: 6 }, () => setIdentifierRestriction(
    prisma, 'browser', browser, true, actorId, 'Reviewed device abuse',
  )));
  assert.equal(await prisma.bannedBrowser.count(), 1);
  assert.equal(await prisma.securityAction.count(), 1);
  assert.deepEqual(await getIdentifierRestrictions(prisma, id, browser, fingerprint), {
    browserRestricted: true,
    fingerprintRestricted: false,
  });
  assert.deepEqual(await getIdentifierRestrictions(prisma, id, randomUUID(), fingerprint), {
    browserRestricted: false,
    fingerprintRestricted: false,
  });
  await setIdentifierRestriction(prisma, 'fingerprint', fingerprint, true, actorId, 'Reviewed client abuse');
  await setIdentifierRestriction(prisma, 'browser', browser, false, actorId, 'Device appeal accepted');
  assert.equal(await prisma.bannedFingerprint.count(), 1, 'releasing a browser cannot release a fingerprint');
  assert.equal(await prisma.securityAction.count(), 3);
  assert.equal(
    (await getIdentifierRestrictions(prisma, id, browser, otherFingerprint)).fingerprintRestricted,
    false,
    'a historical restricted fingerprint does not restrict another current fingerprint');
  await prisma.$executeRaw`INSERT INTO "KnownFingerprint" (id) VALUES (${fingerprint})`;
  assert.equal(
    (await getIdentifierRestrictions(prisma, id, browser, fingerprint)).fingerprintRestricted,
    false,
  );
});

integration('multiple approved devices bypass identifier restrictions only for their approved account/browser pair', async () => {
  const id = await user();
  const unapproved = await user();
  const actorId = randomUUID();
  const secondBrowser = randomUUID();

  for (const device of [browser, secondBrowser]) {
    await editSharedBrowserExemptions(prisma, device, [id], actorId, 'Approved family devices');
    await setIdentifierRestriction(prisma, 'browser', device, true, actorId, 'Unapproved account abuse');
  }

  await setIdentifierRestriction(prisma, 'fingerprint', fingerprint, true, actorId, 'Client restriction');

  for (const device of [browser, secondBrowser]) {
    assert.deepEqual(await getIdentifierRestrictions(prisma, id, device, fingerprint), {
      browserRestricted: false,
      fingerprintRestricted: false,
    });
    assert.equal(
      (await getIdentifierRestrictions(prisma, unapproved, device, fingerprint)).browserRestricted,
      true,
    );
  }

  await editSharedBrowserExemptions(prisma, browser, [], actorId, 'Approval revoked after review');
  assert.equal(
    (await getIdentifierRestrictions(prisma, id, browser, fingerprint)).browserRestricted,
    true,
  );
  assert.equal(
    (await getIdentifierRestrictions(prisma, id, secondBrowser, fingerprint)).browserRestricted,
    false,
  );
  await editSharedBrowserExemptions(prisma, secondBrowser, [], actorId, 'Shared browser deleted', true);
  const history = await prisma.securityAction.findMany({ where: { subjectId: secondBrowser } });

  assert.ok(history.some((event) => event.action === 'grant'));
  assert.ok(history.some((event) => event.action === 'revoke'));
  assert.equal(await prisma.bannedBrowser.count(), 2, 'deleting approvals cannot remove explicit restrictions');
  await prisma.$executeRaw`DELETE FROM "User" WHERE id = ${id}::uuid`;
  assert.equal(await prisma.securityAction.count({ where: { userId: id } }), 4,
    'approval history remains after account deletion');
});

integration('approval updates and identifier transitions roll back if their audit write fails', async () => {
  const id = await user();
  const actorId = randomUUID();

  // Invalid actor UUID is rejected before any state can change.
  await assert.rejects(editSharedBrowserExemptions(prisma, browser, [id], 'not-a-uuid', 'Reason'));
  await assert.rejects(setIdentifierRestriction(prisma, 'browser', browser, true, actorId, ''));
  assert.equal(await prisma.sharedBrowserExemption.count(), 0);
  assert.equal(await prisma.bannedBrowser.count(), 0);
  // Force a database audit failure after mutation; the whole transaction must roll back.
  await prisma.$executeRawUnsafe(`ALTER TABLE "SecurityAction" ADD CONSTRAINT "test_audit_failure"
    CHECK (reason <> 'reject audit')`);

  try {
    await assert.rejects(setIdentifierRestriction(prisma, 'browser', browser, true, actorId, 'reject audit'));
    await assert.rejects(editSharedBrowserExemptions(prisma, browser, [id], actorId, 'reject audit'));
    assert.equal(await prisma.bannedBrowser.count(), 0);
    assert.equal(await prisma.sharedBrowserExemption.count(), 0);
  } finally {
    await prisma.$executeRawUnsafe('ALTER TABLE "SecurityAction" DROP CONSTRAINT "test_audit_failure"');
  }
});

integration('approved users are excluded from both observation thresholds', async () => {
  const actorId = randomUUID();
  const approved = [];

  for (let i = 0; i < 31; i++) {
    const id = await user();

    approved.push(id);
    await recordAccountObservation(prisma, id, request(), now);
  }

  await editSharedBrowserExemptions(prisma, browser, approved, actorId, 'Approved public shared device');

  for (let i = 0; i < 3; i++) {
    await recordAccountObservation(prisma, await user(), request(), now);
  }

  assert.deepEqual(await findMultipleAccountObservationGroups(prisma, now), []);
  await recordAccountObservation(prisma, await user(), request(), now);
  const groups = await findMultipleAccountObservationGroups(prisma, now);

  assert.equal(groups.length, 1);
  assert.equal(groups[0].signal, 'browser');
  assert.equal(groups[0].userIds.length, 4);
});

integration('daily tuples deduplicate concurrent requests, throttle writes, preserve timestamps, and roll over in UTC', async () => {
  const id = await user();

  await Promise.all(
    Array.from({ length: 12 }, () => recordAccountObservation(prisma, id, request(), now)),
  );
  assert.equal(await prisma.accountObservation.count(), 1);
  await recordAccountObservation(prisma, id, request(), new Date(now.getTime() + 60000));
  let row = await prisma.accountObservation.findFirst();

  assert.equal(row.firstSeen.toISOString(), now.toISOString());
  assert.equal(row.lastSeen.toISOString(), now.toISOString());
  await recordAccountObservation(prisma, id, request(), new Date(now.getTime() + 300000));
  row = await prisma.accountObservation.findFirst();
  assert.equal(row.lastSeen.getTime(), now.getTime() + 300000);
  await recordAccountObservation(prisma, id, request(), new Date(now.getTime() - 60000));
  assert.equal(
    (await prisma.accountObservation.findFirst()).lastSeen.getTime(),
    now.getTime() + 300000,
  );
  await recordAccountObservation(prisma, id, request(), new Date('2026-11-12T00:00:00.000Z'));
  assert.equal(await prisma.accountObservation.count(), 2);
});

integration('independent process caches share database deduplication and cannot move lastSeen backward', async () => {
  const id = await user();
  const secondWorker = { $executeRaw: (...args) => prisma.$executeRaw(...args) };

  await recordAccountObservation(prisma, id, request(), now);
  await recordAccountObservation(secondWorker, id, request(), new Date(now.getTime() + 60000));
  assert.equal(await prisma.accountObservation.count(), 1);
  assert.equal(
    (await prisma.accountObservation.findFirst()).lastSeen.getTime(),
    now.getTime() + 60000,
  );
  await recordAccountObservation(prisma, id, request(), new Date(now.getTime() + 30000));
  assert.equal(
    (await prisma.accountObservation.findFirst()).lastSeen.getTime(),
    now.getTime() + 60000,
  );
});

integration('TLS keys are separate SHA-256 values; missing signals and invalid IPs remain null', async () => {
  const id = await user();

  const headers = {
    'et-ja3': ' 771,4866-4867,11,29,0 ',
    'et-ja4': ' t13d1516h2_example_example ',
  };

  await recordAccountObservation(prisma, id, request(browser, fingerprint, '::ffff:192.0.2.1', headers), now);
  const row = await prisma.accountObservation.findFirst();

  assert.equal(row.ip, '192.0.2.1');
  assert.equal(row.visitorId, 'a'.repeat(32));
  assert.equal(row.ja3Hash, createHash('sha256').update(headers['et-ja3'].trim()).digest('hex'));
  assert.equal(row.ja4Hash, createHash('sha256').update(headers['et-ja4'].trim()).digest('hex'));
  await recordAccountObservation(prisma, id, request(browser, fingerprint, 'invalid'), now);
  const missing = await prisma.accountObservation.findFirst({ where: { ip: null } });

  assert.equal(missing.ja3Hash, null);
  assert.equal(missing.ja4Hash, null);
  assert.equal(missing.formatVersion, 2);
});

integration('invalid or unverified request identifiers cannot create observations', async () => {
  const id = await user();

  for (const invalid of [
    {
      ...request(),
      signedCookies: {},
    },
    {
      ...request(),
      security: {
        fingerprint,
        browserId: browser,
        validHeaders: false,
      },
    },
    request(browser, '<img src=x>'), request('<img src=x>'),
  ]) {
    await recordAccountObservation(prisma, id, invalid, now);
  }

  assert.equal(await prisma.accountObservation.count(), 0);
});

integration('home/school switching cannot manufacture a fingerprint/IP pair from legacy arrays', async () => {
  for (let i = 0; i < 31; i++) {
    const id = await user();

    await prisma.$executeRaw`UPDATE "User" SET fingerprints = ARRAY[${fingerprint}, ${otherFingerprint}],
      ips = ARRAY['192.0.2.1', '198.51.100.1'] WHERE id = ${id}::uuid`;
    // Different actual home IP per account; a shared school IP with different fingerprints.
    await recordAccountObservation(prisma, id, request(randomUUID(), fingerprint, `192.0.2.${i + 1}`), now);
    await recordAccountObservation(prisma, id, request(randomUUID(), `v2:${i.toString(16).padStart(32, '0')}:none`, '198.51.100.1'), now);
  }

  assert.deepEqual(await findMultipleAccountObservationGroups(prisma, now), []);
});

integration('thresholds count distinct accounts, ignore old evidence and banned accounts, and report without sanctions', async () => {
  const logs = [];
  const ids = [];

  for (let i = 0; i < 4; i++) {
    const id = await user();

    ids.push(id);
    await recordAccountObservation(prisma, id, request(), now);
    await recordAccountObservation(prisma, id, request(), daysAgo(1));
  }

  await recordAccountObservation(prisma, await user(null, now), request(), now);
  await recordAccountObservation(prisma, await user(), request(), daysAgo(8));

  const groups = await reportMultipleAccountObservations(
    prisma,
    { log: (line) => logs.push(line) },
    now,
  );

  assert.equal(groups.length, 1);
  assert.equal(groups[0].signal, 'browser');
  assert.deepEqual(groups[0].userIds, ids.sort());
  assert.match(logs[0], /Multiple-account observations/);
  const banned = await prisma.$queryRaw`SELECT COUNT(*)::int AS count FROM "User" WHERE "bannedAt" IS NOT NULL`;

  assert.equal(banned[0].count, 1, 'reporting must not ban another account');
  await prisma.$executeRaw`UPDATE "User" SET "lastSeen" = ${now}`;
  assert.deepEqual((await findMultipleAccountObservationGroups(prisma, now))[0].userIds, ids);
});

integration('shared-browser exemptions are removed before counting and old browsers do not become recent on account activity', async () => {
  for (let i = 0; i < 3; i++) {
    await recordAccountObservation(prisma, await user(browser), request(), now);
  }

  await recordAccountObservation(prisma, await user(), request(), now);
  assert.deepEqual(await findMultipleAccountObservationGroups(prisma, now), []);

  for (let i = 0; i < 4; i++) {
    const id = await user();

    await recordAccountObservation(prisma, id, request(), daysAgo(8));
    await recordAccountObservation(prisma, id, request(randomUUID()), now);
  }

  assert.deepEqual(await findMultipleAccountObservationGroups(prisma, now), []);
});

integration('fingerprint/IP reporting uses observed seven-day pairs, distinct users and known-fingerprint exclusions', async () => {
  for (let i = 0; i < 30; i++) {
    const id = await user();

    await recordAccountObservation(prisma, id, request(randomUUID()), now);
    await recordAccountObservation(prisma, id, request(randomUUID()), daysAgo(1));
  }

  assert.deepEqual(await findMultipleAccountObservationGroups(prisma, now), []);
  const id = await user();

  await recordAccountObservation(prisma, id, request(randomUUID()), now);
  const groups = await findMultipleAccountObservationGroups(prisma, now);

  assert.equal(groups.length, 1);
  assert.equal(groups[0].signal, 'fingerprint-ip');
  assert.equal(groups[0].userIds.length, 31);
  assert.equal(groups[0].ip, '192.0.2.1');
  await prisma.$executeRaw`INSERT INTO "KnownFingerprint" (id) VALUES (${fingerprint})`;
  assert.deepEqual(await findMultipleAccountObservationGroups(prisma, now), []);
});

integration('retention removes only expired observations and user deletion cascades', async () => {
  const id = await user();

  await recordAccountObservation(prisma, id, request(), daysAgo(31));
  await recordAccountObservation(prisma, id, request(), daysAgo(30));
  await recordAccountObservation(prisma, id, request(), now);
  assert.equal(await cleanupAccountObservations(prisma, now), 1);
  assert.equal(await prisma.accountObservation.count(), 2);
  await prisma.$executeRaw`DELETE FROM "User" WHERE id = ${id}::uuid`;
  assert.equal(await prisma.accountObservation.count(), 0);
});

integration('representative observation volume has a measured query plan', async (t) => {
  // 2,000 accounts, four tuples/day, 30 days: 240,000 actual observation rows.
  await prisma.$executeRawUnsafe(`INSERT INTO "User" (id)
    SELECT md5('user-' || n::text)::uuid FROM generate_series(1, 2000) n`);
  await prisma.$executeRawUnsafe(`INSERT INTO "AccountObservation"
    (id, "userId", "browserId", fingerprint, "visitorId", ip, "observedDay", "firstSeen", "lastSeen")
    SELECT md5(n::text || '-' || d::text || '-' || v::text) || md5('tuple-' || n::text || '-' || d::text || '-' || v::text),
      md5('user-' || n::text)::uuid, md5('browser-' || n::text)::uuid,
      'v2:' || md5('fingerprint-' || n::text) || ':none', md5('fingerprint-' || n::text),
      '192.0.2.' || ((n % 250) + 1)::text,
      ('2026-11-11'::date - d),
      ('2026-11-11 12:00:00'::timestamp - d * INTERVAL '1 day'),
      ('2026-11-11 12:00:00'::timestamp - d * INTERVAL '1 day')
    FROM generate_series(1,2000) n CROSS JOIN generate_series(0,29) d CROSS JOIN generate_series(1,4) v`);
  await prisma.$executeRawUnsafe('ANALYZE "AccountObservation"');
  let plan;

  const explaining = {
    $queryRaw: async (strings, ...values) => {
    // Execute the actual production query with EXPLAIN, not a substitute query.
      const statement = Array.from(strings);

      statement[0] = `EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) ${statement[0]}`;
      statement.raw = [...statement];
      plan = await prisma.$queryRaw(statement, ...values);

      return [];
    },
  };

  await findMultipleAccountObservationGroups(explaining, now);
  const data = plan[0]['QUERY PLAN'][0];

  t.diagnostic(`240000 observations: planning ${data['Planning Time']}ms, execution ${data['Execution Time']}ms`);
  const cte = data.Plan.Plans?.find((node) => node['Subplan Name'] === 'CTE recent');

  if (cte) {
    t.diagnostic(`recent observation projection width: ${cte['Plan Width']} bytes`);
  }

  assert.ok(data.Plan);
  let legacyPlan;

  await findMultipleAccountObservationGroups({
    $queryRaw: async (strings, ...values) => {
      const statement = Array.from(strings);

      statement[0] = `EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) ${statement[0].replace(
        /SELECT o\."userId"[\s\S]*?FROM "AccountObservation" o/,
        'SELECT o.* FROM "AccountObservation" o',
      )}`;
      statement.raw = [...statement];
      legacyPlan = (await prisma.$queryRaw(statement, ...values))[0]['QUERY PLAN'][0];

      return [];
    },
  }, now);
  const legacyCte = legacyPlan.Plan.Plans?.find((node) => node['Subplan Name'] === 'CTE recent');

  if (cte && legacyCte) {
    t.diagnostic(`legacy projection width: ${legacyCte['Plan Width']} bytes`);
    assert.ok(cte['Plan Width'] <= legacyCte['Plan Width']);
  }
});

integration('retention deletes in bounded transactions and skips rows currently locked by another worker', async () => {
  const id = await user();

  await prisma.$executeRaw`
    INSERT INTO "AccountObservation"
      (id, "userId", "browserId", fingerprint, "visitorId", "observedDay", "firstSeen", "lastSeen")
    SELECT md5(n::text) || md5('expired-' || n::text), ${id}::uuid, ${browser}::uuid,
      ${fingerprint}, ${'a'.repeat(32)}, '2026-09-01'::date, '2026-09-01'::timestamp, '2026-09-01'::timestamp
    FROM generate_series(1, 5002) n
  `;
  let unlock;
  let markLocked;

  const locked = new Promise((resolve) => {
    markLocked = resolve;
  });

  const release = new Promise((resolve) => {
    unlock = resolve;
  });

  const transaction = prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT id FROM "AccountObservation" ORDER BY id LIMIT 1 FOR UPDATE`;
    markLocked();
    await release;
  });

  const batches = [];

  const counted = {
    $executeRaw: async (...args) => {
      const count = await prisma.$executeRaw(...args);

      batches.push(count);

      return count;
    },
  };

  try {
    await locked;
    assert.equal(await cleanupAccountObservations(counted, now), 5001);
    assert.deepEqual(batches, [5000, 1]);
    assert.equal(await prisma.accountObservation.count(), 1);
  } finally {
    unlock();
    await transaction;
  }

  assert.equal(await cleanupAccountObservations(prisma, now), 1);
});
