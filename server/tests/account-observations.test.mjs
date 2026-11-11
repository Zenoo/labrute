import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { after, before, beforeEach, mock, test } from 'node:test';
import { PrismaClient } from '@labrute/prisma';

mock.module('../lib/context.js', {
  namedExports: { GLOBAL: {}, LOGGER: { log() {}, error() {} }, DISCORD: () => ({}) },
});
const {
  recordAccountObservation, normalizeObservationIp, findMultipleAccountObservationGroups,
  reportMultipleAccountObservations, cleanupAccountObservations,
} = await import('../lib/utils/accountObservations.js');

test('observation IPs normalize chains, IPv6 spelling and mapped IPv4 without inventing missing IPs', () => {
  for (const [input, expected] of [
    [' 192.0.2.1,198.51.100.1', '192.0.2.1'],
    ['2001:0DB8:0:0:0:0:0:1', '2001:db8::1'],
    ['::ffff:192.0.2.1', '192.0.2.1'], ['::FFFF:c000:201', '192.0.2.1'],
    [undefined, null], ['', null], ['unknown', null], ['999.0.0.1', null], ['fe80::1%eth0', null],
  ]) assert.equal(normalizeObservationIp(input), expected);
});

const databaseUrl = process.env.OBSERVATION_TEST_DATABASE_URL;
const schema = `observation_test_${randomUUID().replaceAll('-', '')}`;
let admin;
let prisma;
const now = new Date('2026-11-11T12:00:00.000Z');
const browser = randomUUID();
const fingerprint = 'a'.repeat(32) + '0000';
const otherFingerprint = 'b'.repeat(32) + '0000';
const daysAgo = (days) => new Date(now.getTime() - days * 86400000);
const request = (browserId = browser, fp = fingerprint, ip = '192.0.2.1', headers = {}) => ({
  signedCookies: { browserId },
  security: { browserId, fingerprint: fp, validHeaders: true },
  headers,
  socket: { remoteAddress: ip },
});

before(async () => {
  if (!databaseUrl) return;
  const url = new URL(databaseUrl);
  // Never reset tables in a configured development/production database.
  assert.ok(['localhost', '127.0.0.1'].includes(url.hostname));
  assert.equal(url.pathname, '/observation_test');
  admin = new PrismaClient({ datasources: { db: { url: url.toString() } } });
  await admin.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  url.searchParams.set('schema', schema);
  prisma = new PrismaClient({ datasources: { db: { url: url.toString() } } });
  await prisma.$executeRawUnsafe(`CREATE TABLE "User" (
    id UUID PRIMARY KEY, "bannedAt" TIMESTAMP, "sharedBrowserId" TEXT,
    "lastSeen" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, fingerprints TEXT[] DEFAULT '{}',
    ips TEXT[] DEFAULT '{}', "browserIds" TEXT[] DEFAULT '{}'
  )`);
  await prisma.$executeRawUnsafe('CREATE TABLE "KnownFingerprint" (id VARCHAR(255) PRIMARY KEY)');
  const migration = readFileSync(new URL(
    '../prisma/migrations/20261111160000_account_observations/migration.sql', import.meta.url,
  ), 'utf8');
  for (const statement of migration.split(';').filter((sql) => sql.trim())) {
    await prisma.$executeRawUnsafe(statement);
  }
});

beforeEach(async () => {
  if (prisma) await prisma.$executeRawUnsafe('TRUNCATE "AccountObservation", "KnownFingerprint", "User" CASCADE');
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
  return id;
};

integration('daily tuples deduplicate concurrent requests, throttle writes, preserve timestamps, and roll over in UTC', async () => {
  const id = await user();
  await Promise.all(Array.from({ length: 12 }, () => recordAccountObservation(prisma, id, request(), now)));
  assert.equal(await prisma.accountObservation.count(), 1);
  await recordAccountObservation(prisma, id, request(), new Date(now.getTime() + 60000));
  let row = await prisma.accountObservation.findFirst();
  assert.equal(row.firstSeen.toISOString(), now.toISOString());
  assert.equal(row.lastSeen.toISOString(), now.toISOString());
  await recordAccountObservation(prisma, id, request(), new Date(now.getTime() + 300000));
  row = await prisma.accountObservation.findFirst();
  assert.equal(row.lastSeen.getTime(), now.getTime() + 300000);
  await recordAccountObservation(prisma, id, request(), new Date(now.getTime() - 60000));
  assert.equal((await prisma.accountObservation.findFirst()).lastSeen.getTime(), now.getTime() + 300000);
  await recordAccountObservation(prisma, id, request(), new Date('2026-11-12T00:00:00.000Z'));
  assert.equal(await prisma.accountObservation.count(), 2);
});

integration('TLS keys are separate SHA-256 values; missing signals and invalid IPs remain null', async () => {
  const id = await user();
  const headers = { 'et-ja3': ' 771,4866-4867,11,29,0 ', 'et-ja4': ' t13d1516h2_example_example ' };
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
  assert.equal(missing.formatVersion, 1);
});

integration('invalid or unverified request identifiers cannot create observations', async () => {
  const id = await user();
  for (const invalid of [
    { ...request(), signedCookies: {} },
    { ...request(), security: { fingerprint, browserId: browser, validHeaders: false } },
    request(browser, '<img src=x>'), request('<img src=x>'),
  ]) await recordAccountObservation(prisma, id, invalid, now);
  assert.equal(await prisma.accountObservation.count(), 0);
});

integration('home/school switching cannot manufacture a fingerprint/IP pair from legacy arrays', async () => {
  for (let i = 0; i < 31; i++) {
    const id = await user();
    await prisma.$executeRaw`UPDATE "User" SET fingerprints = ARRAY[${fingerprint}, ${otherFingerprint}],
      ips = ARRAY['192.0.2.1', '198.51.100.1'] WHERE id = ${id}::uuid`;
    // Different actual home IP per account; a shared school IP with different fingerprints.
    await recordAccountObservation(prisma, id, request(randomUUID(), fingerprint, `192.0.2.${i + 1}`), now);
    await recordAccountObservation(prisma, id, request(randomUUID(), i.toString(16).padStart(32, '0') + '0000', '198.51.100.1'), now);
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
  const groups = await reportMultipleAccountObservations(prisma, { log: (line) => logs.push(line) }, now);
  assert.equal(groups.length, 1);
  assert.equal(groups[0].signal, 'browser');
  assert.deepEqual(groups[0].userIds, ids.sort());
  assert.match(logs[0], /report only/);
  const banned = await prisma.$queryRaw`SELECT COUNT(*)::int AS count FROM "User" WHERE "bannedAt" IS NOT NULL`;
  assert.equal(banned[0].count, 1, 'reporting must not ban another account');
  await prisma.$executeRaw`UPDATE "User" SET "lastSeen" = ${now}`;
  assert.deepEqual((await findMultipleAccountObservationGroups(prisma, now))[0].userIds, ids);
});

integration('shared-browser exemptions are removed before counting and old browsers do not become recent on account activity', async () => {
  for (let i = 0; i < 3; i++) await recordAccountObservation(prisma, await user(browser), request(), now);
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
      md5('fingerprint-' || n::text) || '0000', md5('fingerprint-' || n::text),
      '192.0.2.' || ((n % 250) + 1)::text,
      ('2026-11-11'::date - d),
      ('2026-11-11 12:00:00'::timestamp - d * INTERVAL '1 day'),
      ('2026-11-11 12:00:00'::timestamp - d * INTERVAL '1 day')
    FROM generate_series(1,2000) n CROSS JOIN generate_series(0,29) d CROSS JOIN generate_series(1,4) v`);
  await prisma.$executeRawUnsafe('ANALYZE "AccountObservation"');
  let plan;
  const explaining = { $queryRaw: async (strings, ...values) => {
    // Execute the actual production query with EXPLAIN, not a substitute query.
    const statement = Array.from(strings);
    statement[0] = `EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) ${statement[0]}`;
    statement.raw = [...statement];
    plan = await prisma.$queryRaw(statement, ...values);
    return [];
  } };
  await findMultipleAccountObservationGroups(explaining, now);
  const data = plan[0]['QUERY PLAN'][0];
  t.diagnostic(`240000 observations: planning ${data['Planning Time']}ms, execution ${data['Execution Time']}ms`);
  assert.ok(data.Plan);
});
