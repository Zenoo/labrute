import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { mock } from 'node:test';
import { performance } from 'node:perf_hooks';
import { PrismaClient } from '@labrute/prisma';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);
mock.module('../lib/context.js', { namedExports: {
  GLOBAL: {}, LOGGER: { log() {}, error() {} }, DISCORD: () => ({ logObject: async () => {} }),
} });
mock.module('../lib/utils/ServerState.js', { namedExports: {
  ServerState: { isIpBanned: async () => false },
} });
const { auth } = await import('../lib/utils/auth.js');
const { findUserForAuthentication } = await import('../lib/utils/identifierSanctions.js');
const url = new URL(process.env.OBSERVATION_TEST_DATABASE_URL);
assert.ok(['127.0.0.1', 'localhost'].includes(url.hostname));
assert.equal(url.pathname, '/observation_test');
const schema = `request_bench_${randomUUID().replaceAll('-', '')}`;
const admin = new PrismaClient({ datasources: { db: { url: url.toString() } } });
url.searchParams.set('schema', schema);
url.searchParams.set('connection_limit', '16');
const prisma = new PrismaClient({
  datasources: { db: { url: url.toString() } }, log: [{ level: 'query', emit: 'event' }],
});
let queries = 0;
prisma.$on('query', () => { queries++; });
const token = randomUUID();
const fingerprint = 'a'.repeat(32) + '0000';
const browserId = randomUUID();
const ids = Array.from({ length: 128 }, () => randomUUID());
const extraAccounts = Number(process.env.AUTH_BENCH_EXTRA_ACCOUNTS ?? '0');
assert.ok(Number.isInteger(extraAccounts) && extraAccounts >= 0 && extraAccounts <= 1000000);
const requests = ids.map((id) => ({
  headers: { authorization: `Basic ${Buffer.from(`${id}:${token}`).toString('base64')}` },
  signedCookies: { browserId },
  security: { browserId, fingerprint, validHeaders: true },
  socket: { remoteAddress: '192.0.2.1' },
}));
const select = {
  id: true, lang: true, admin: true, moderator: true, bannedAt: true, banReason: true,
  ips: true, fingerprints: true, browserIds: true, lastSeen: true,
};

const run = async (name, operation) => {
  const samples = [];
  const total = 4096;
  const concurrency = 32;
  let next = 0;
  queries = 0;
  const start = performance.now();
  await Promise.all(Array.from({ length: concurrency }, async () => {
    while (next < total) {
      const index = next++;
      const begin = performance.now();
      await operation(index);
      samples.push(performance.now() - begin);
    }
  }));
  const elapsed = performance.now() - start;
  samples.sort((a, b) => a - b);
  console.log(JSON.stringify({
    name, requests: total, concurrency, databaseQueries: queries,
    requestsPerSecond: Math.round(total / elapsed * 1000),
    p50ms: +samples[Math.floor(samples.length * 0.5)].toFixed(2),
    p95ms: +samples[Math.floor(samples.length * 0.95)].toFixed(2),
    p99ms: +samples[Math.floor(samples.length * 0.99)].toFixed(2),
  }));
};

try {
  await admin.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  await prisma.$executeRawUnsafe(`CREATE TABLE "User" (
    id UUID PRIMARY KEY, "connexionToken" UUID NOT NULL, lang TEXT DEFAULT 'en',
    admin BOOLEAN DEFAULT false, moderator BOOLEAN DEFAULT false, "bannedAt" TIMESTAMP, "banReason" TEXT,
    "lastSeen" DATE DEFAULT CURRENT_DATE, ips TEXT[], fingerprints TEXT[], "browserIds" TEXT[],
    "sharedBrowserId" TEXT
  )`);
  await prisma.$executeRawUnsafe('CREATE TABLE "KnownFingerprint" (id VARCHAR(255) PRIMARY KEY)');
  await prisma.$executeRawUnsafe('CREATE TABLE "BannedBrowser" (id VARCHAR(255) PRIMARY KEY)');
  await prisma.$executeRawUnsafe('CREATE TABLE "BannedFingerprint" (id VARCHAR(255) PRIMARY KEY)');
  await prisma.$executeRawUnsafe(`CREATE TABLE "SharedBrowser" (
    id VARCHAR(255) PRIMARY KEY, description VARCHAR(500), "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
  for (const migration of ['20261111160000_account_observations', '20261111180000_separate_identifier_sanctions']) {
    const sql = readFileSync(new URL(`../prisma/migrations/${migration}/migration.sql`, import.meta.url), 'utf8');
    for (const statement of sql.split(';').filter((part) => part.trim())) await prisma.$executeRawUnsafe(statement);
  }
  for (const id of ids) await prisma.$executeRaw`
    INSERT INTO "User" (id, "connexionToken", ips, fingerprints, "browserIds")
    VALUES (${id}::uuid, ${token}::uuid, ARRAY['192.0.2.1'], ARRAY[${fingerprint}], ARRAY[${browserId}])
  `;
  if (extraAccounts) await prisma.$executeRaw`
    INSERT INTO "User" (id, "connexionToken", ips, fingerprints, "browserIds")
    SELECT md5('inactive-' || n::text)::uuid, ${token}::uuid, '{}'::text[], '{}'::text[], '{}'::text[]
    FROM generate_series(1, ${extraAccounts}::int) n
  `;
  // Seed a nonempty set of restrictions; each lookup still uses indexed equality checks.
  await prisma.$executeRawUnsafe(`INSERT INTO "BannedBrowser" (id)
    SELECT md5(n::text)::uuid::text FROM generate_series(1,10000) n`);
  await prisma.$executeRawUnsafe(`INSERT INTO "BannedFingerprint" (id)
    SELECT md5(n::text) || '0000' FROM generate_series(1,10000) n`);
  if (extraAccounts >= 10000) {
    await prisma.$executeRawUnsafe(`INSERT INTO "KnownFingerprint" (id)
      SELECT md5('known-' || n::text) || '0000' FROM generate_series(1,10000) n`);
    await prisma.$executeRawUnsafe(`INSERT INTO "SharedBrowser" (id)
      SELECT md5('shared-' || n::text)::uuid::text FROM generate_series(1,10000) n`);
    await prisma.$executeRawUnsafe(`INSERT INTO "SharedBrowserExemption" ("userId", "browserId", reason)
      SELECT md5('inactive-' || n::text)::uuid, md5('shared-' || n::text)::uuid::text, 'Benchmark approval'
      FROM generate_series(1,10000) n`);
  }
  await prisma.$executeRawUnsafe('ANALYZE');
  console.log(JSON.stringify({ activeAccounts: ids.length, inactiveAccounts: extraAccounts }));
  // Warm connections, observation tuples, and JIT before measuring steady-state requests.
  for (const request of requests) await auth(prisma, request);
  let lookupPlan;
  await findUserForAuthentication({ $queryRaw: async (strings, ...values) => {
    const statement = Array.from(strings);
    statement[0] = `EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) ${statement[0]}`;
    statement.raw = [...statement];
    lookupPlan = (await prisma.$queryRaw(statement, ...values))[0]['QUERY PLAN'][0];
    return [];
  } }, ids[0], token, browserId, fingerprint);
  const scans = [];
  const visit = (plan) => {
    if (plan['Relation Name']) scans.push({
      table: plan['Relation Name'], method: plan['Node Type'], index: plan['Index Name'],
    });
    for (const child of plan.Plans ?? []) visit(child);
  };
  visit(lookupPlan.Plan);
  console.log(JSON.stringify({ lookupExecutionMs: lookupPlan['Execution Time'], scans }));
  await run('account lookup only (comparison)', (i) => prisma.user.findFirst({
    where: { id: ids[i % ids.length], connexionToken: token }, select,
  }));
  await run('authentication, 128 active accounts', (i) => auth(prisma, requests[i % requests.length]));
  await run('authentication, one busy account', () => auth(prisma, requests[0]));
  await run('authentication, new TLS tuple each request', (i) => auth(prisma, {
    ...requests[i % requests.length],
    headers: { ...requests[i % requests.length].headers, 'et-ja4': `new-tls-client-${i}` },
  }));
} finally {
  await prisma.$disconnect();
  await admin.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
  await admin.$disconnect();
}
