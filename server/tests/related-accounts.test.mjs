import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import {
  after, before, beforeEach, mock, test,
} from 'node:test';
import { createSecurityDatabase } from './helpers/securityDatabase.mjs';

const spans = [];
let activeSpan;

mock.module('../lib/utils/trace.js', {
  namedExports: {
    traced: async (name, callback) => {
      spans.push(name);
      const previous = activeSpan;

      activeSpan = name;

      try {
        return await callback();
      } finally {
        activeSpan = previous;
      }
    },
  },
});

const { findRelatedAccounts } = await import('../lib/utils/relatedAccounts.js');

const enabled = !!process.env.OBSERVATION_TEST_DATABASE_URL;
const integration = (name, fn) => test(name, { skip: !enabled }, fn);
let fixture;
let db;

before(async () => {
  if (enabled) {
    fixture = await createSecurityDatabase();
    db = fixture.prisma;
  }
});
beforeEach(async () => {
  await db?.user.deleteMany();
});
after(async () => fixture?.close());

const user = (data = {}) => db.user.create({
  data: {
    id: randomUUID(),
    name: 'Appeal fixture',
    connexionToken: randomUUID(),
    ...data,
  },
});

test('malformed IDs and cursors are rejected before looking up identifiers', async () => {
  for (const [id, cursor] of [[null], ['bad'], [randomUUID(), ['bad']], [randomUUID(), 'bad']]) {
    await assert.rejects(findRelatedAccounts({}, id, cursor), /Invalid user ID/);
  }
});

test('every investigation query runs inside its trace without per-account database lookups', async () => {
  spans.length = 0;
  const id = randomUUID();

  const db = {
    user: {
      findUnique: async () => {
        assert.equal(activeSpan, 'relatedAccounts.target');

        return {
          browserIds: ['legacy-browser'],
          fingerprints: [],
          ips: [],
        };
      },
      findMany: async (args) => {
        assert.equal(activeSpan, 'relatedAccounts.candidates');
        assert.equal(args.take, 26);

        return Array.from({ length: 25 }, () => ({
          id: randomUUID(),
          name: 'Legacy match',
          bannedAt: null,
          banReason: null,
          browserIds: ['legacy-browser'],
          fingerprints: [],
          ips: [],
        }));
      },
    },
    $queryRaw: async () => {
      assert.equal(activeSpan, 'relatedAccounts.observedIdentifiers');

      return [];
    },
  };

  const result = await findRelatedAccounts(db, id);

  assert.equal(result.accounts.length, 25);
  assert.deepEqual(spans, [
    'relatedAccounts.target',
    'relatedAccounts.observedIdentifiers',
    'relatedAccounts.candidates',
    'relatedAccounts.observedIdentifiers',
  ]);
});

integration('legacy bans can be investigated without cases, audit entries or recent observations', async () => {
  const target = await user({
    bannedAt: new Date('2025-01-01'),
    banReason: 'multipleAccounts',
    browserIds: ['legacy-browser'],
    fingerprints: ['legacy-fingerprint'],
    ips: ['192.0.2.1'],
  });

  const banned = await user({
    browserIds: ['legacy-browser'],
    bannedAt: new Date('2025-01-02'),
  });

  const active = await user({ ips: ['192.0.2.1'] });

  const fingerprint = await user({
    fingerprints: ['legacy-fingerprint'],
    ips: ['198.51.100.1'],
  });

  await user({ browserIds: ['unrelated'] });
  const result = await findRelatedAccounts(db, target.id);

  assert.equal(result.accounts.length, 3);
  assert.ok(result.accounts.every((account) => account.id !== target.id));
  assert.ok(result.accounts.find((account) => account.id === banned.id).bannedAt);
  const bannedDate = result.accounts.find((account) => account.id === banned.id).bannedAt;

  assert.equal(new Date(bannedDate).toISOString(), '2025-01-02T00:00:00.000Z');
  assert.deepEqual(result.accounts.find((account) => account.id === active.id).sharedIps, ['192.0.2.1']);
  const fingerprintMatch = result.accounts.find((account) => account.id === fingerprint.id);

  assert.deepEqual(fingerprintMatch.sharedFingerprints, ['legacy-fingerprint']);
  assert.deepEqual(fingerprintMatch.sharedIps, [], 'must not invent historical fingerprint/IP pairs');
  assert.ok(!('scoreEvidence' in fingerprintMatch));
  assert.deepEqual(result.identifierCounts, {
    browsers: 1,
    fingerprints: 1,
    ips: 1,
  });
  assert.equal(await db.multipleAccountCase.count(), 0, 'investigation must not create cases');
  assert.equal(await db.securityAction.count(), 0, 'investigation must not change sanctions');
});

integration('retained observations supply links when historical arrays are empty', async () => {
  const target = await user({ bannedAt: new Date() });
  const related = await user();
  const browserId = randomUUID();

  for (const owner of [target, related]) {
    await db.accountObservation.create({
      data: {
        id: randomUUID().replaceAll('-', '').repeat(2),
        userId: owner.id,
        browserId,
        fingerprint: `v2:${'a'.repeat(32)}:none`,
        visitorId: 'a'.repeat(32),
        observedDay: new Date('2026-11-01'),
        firstSeen: new Date('2026-11-01'),
        lastSeen: new Date('2026-11-01'),
      },
    });
  }

  const result = await findRelatedAccounts(db, target.id);

  assert.equal(result.accounts[0].id, related.id);
  assert.deepEqual(result.accounts[0].sharedBrowserIds, [browserId]);

  const historicalOnly = await user({ browserIds: [browserId] });
  const mixed = await findRelatedAccounts(db, target.id);

  assert.equal(mixed.accounts.length, 2);
  assert.deepEqual(
    mixed.accounts.find((account) => account.id === historicalOnly.id).sharedBrowserIds,
    [browserId],
  );
  const reverse = await findRelatedAccounts(db, historicalOnly.id);

  assert.ok(reverse.accounts.some((account) => account.id === target.id));
  assert.ok(reverse.accounts.some((account) => account.id === related.id));
});

integration('pages and shared identifier payloads remain bounded, with no duplicates across pages', async () => {
  const browsers = Array.from({ length: 12 }, (_, index) => `legacy-${index}`);
  const target = await user({ browserIds: browsers });

  for (let index = 0; index < 27; index++) {
    await user({ browserIds: browsers });
  }

  const first = await findRelatedAccounts(db, target.id);
  const second = await findRelatedAccounts(db, target.id, first.nextCursor);

  assert.equal(first.accounts.length, 25);
  assert.equal(second.accounts.length, 2);
  const ids = [...first.accounts, ...second.accounts].map((account) => account.id);

  assert.equal(new Set(ids).size, 27);
  assert.equal(first.accounts[0].browserCount, 12);
  assert.equal(first.accounts[0].sharedBrowserIds.length, 10);
  assert.equal(second.nextCursor, null);
});

integration('missing and identifier-free users are distinguished without fabricated evidence', async () => {
  await assert.rejects(findRelatedAccounts(db, randomUUID()), /User not found/);
  const target = await user({ bannedAt: new Date() });
  const result = await findRelatedAccounts(db, target.id);

  assert.deepEqual(result.accounts, []);
  assert.deepEqual(result.identifierCounts, {
    browsers: 0,
    fingerprints: 0,
    ips: 0,
  });
});
