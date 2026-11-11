import assert from 'node:assert/strict';
import { after, before, mock, test } from 'node:test';
import { randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { AuthType } from '@eternaltwin/core/auth/auth-type';
import { CSRF_HEADER, getPredictableHeaders } from '@labrute/core';

const id = '11111111-1111-4111-8111-111111111111';
const browserId = '22222222-2222-4222-8222-222222222222';
const fingerprint = `v2:${'a'.repeat(32)}:none`;
const fpAesSecret = 'a'.repeat(32);
let fingerprintBanned = false;
let browserBanned = false;
const bans = [];
let exchanges = 0;
const checkedIps = [];
const accessToken = '44444444-4444-4444-8444-444444444444';
mock.module('../lib/context.js', { namedExports: {
  GLOBAL: { config: { fpAesSecret } },
  LOGGER: { log() {}, error() {} }, DISCORD: () => ({ logObject: async () => {} }),
} });
mock.module('@eternaltwin/oauth-client-http/rfc-oauth-client', { namedExports: {
  RfcOauthClient: class { async getAccessToken() { exchanges++; return { accessToken }; } },
  GetAccessTokenError: class extends Error {},
} });
mock.module('@eternaltwin/client-node', { namedExports: {
  EternaltwinNodeClient: class {
    async getAuthSelf() {
      return { type: AuthType.AccessToken, user: { id, displayName: { current: { value: 'Test' } } } };
    }
  },
} });
mock.module('../lib/utils/ServerState.js', { namedExports: { ServerState: {
  isIpBanned: async (_prisma, ip) => { checkedIps.push(ip); return false; },
  isFingerprintBanned: async () => fingerprintBanned,
  isBrowserBanned: async () => false,
  getModifiers: async () => ({}), getCurrentEvent: async () => null,
} } });
mock.module('../lib/utils/createUserLog.js', { namedExports: { createUserLog() {} } });
mock.module('../lib/utils/user/banUser.js', { namedExports: { banUser: async () => { bans.push(true); } } });
const { OAuth } = await import('../lib/controllers/OAuth.js');
const { issueFingerprintEvent } = await import('../lib/utils/fingerprintEvent.js');

const run = async ({ bannedAt = null, validHeaders = true, mismatchedEvent = false, expired = false,
  newFingerprint = false, newAccount = false, database, headers = {}, remoteAddress = '192.0.2.1' } = {}) => {
  const observations = [];
  const writes = [];
  const previousExchanges = exchanges;
  let securityReads = 0;
  let accountReads = 0;
  const user = { id, bannedAt, fingerprints: newFingerprint ? [] : [fingerprint], lang: 'en' };
  const prisma = database ?? {
    user: {
      upsert: async (args) => {
        assert.equal(args.where.bannedAt, null);
        if (bannedAt) throw new Prisma.PrismaClientKnownRequestError('Conflict', { code: 'P2002', clientVersion: 'test' });
        writes.push('upsert');
        if (newAccount) user.fingerprints = [...args.create.fingerprints];
        return user;
      },
      update: async (args) => {
        assert.equal(args.where.bannedAt, null);
        throw new Prisma.PrismaClientKnownRequestError('Rejected conditional update', { code: 'P2025', clientVersion: 'test' });
      },
      findUnique: async () => { accountReads++; return user; },
    },
    $queryRaw: async () => {
      securityReads++;
      return [{ browserRestricted: browserBanned, fingerprintRestricted: fingerprintBanned }];
    },
    $executeRaw: async (strings, ...args) => {
      if (strings[0].includes('UPDATE "User"')) writes.push('register');
      else observations.push([strings, ...args]);
      return 1;
    },
  };
  const controller = new OAuth({
    eternaltwin: { url: 'https://example.test/', clientRef: 'test', secret: 'test' },
    selfUrl: new URL('https://example.test/'),
  }, prisma);
  const eventId = issueFingerprintEvent(
    fingerprint, browserId, 'full-payload', Date.now() - (expired ? 16 * 60000 : 0),
  );
  const req = {
    body: { code: 'test-code', eventId },
    headers: validHeaders ? { [CSRF_HEADER]: 'csrf', ...getPredictableHeaders('csrf'), ...headers } : {},
    security: { fingerprint: mismatchedEvent ? 'b'.repeat(32) + '0000' : fingerprint, browserId, validHeaders },
    signedCookies: { browserId }, socket: { remoteAddress },
  };
  const res = { header() {}, status(code) { this.statusCode = code; return this; }, send(body) { this.body = body; } };
  await controller.token(req, res);
  return { observations, res, writes, securityReads, accountReads, exchanges: exchanges - previousExchanges };
};

test('OAuth records one observation after validated login', async () => {
  const { observations, res, writes, securityReads, accountReads } = await run();
  assert.equal(observations.length, 1);
  assert.equal(res.body.user.id, id);
  assert.equal(securityReads, 1, 'only the identifier restriction query precedes upsert');
  assert.equal(accountReads, 0, 'successful login does not fetch the user separately');
  assert.deepEqual(writes, ['upsert'], 'known fingerprints do not need a registration write');
});

test('OAuth registers a new fingerprint only after the single security lookup succeeds', async () => {
  const result = await run({ newFingerprint: true });
  assert.equal(result.securityReads, 1);
  assert.deepEqual(result.writes, ['upsert', 'register']);
  assert.equal(result.observations.length, 1);
});

test('first-time OAuth stores the fingerprint in account creation without a separate registration write', async () => {
  const result = await run({ newAccount: true });
  assert.equal(result.securityReads, 1);
  assert.equal(result.accountReads, 0);
  assert.deepEqual(result.writes, ['upsert']);
  assert.deepEqual(result.res.body.user.fingerprints, [fingerprint]);
});

test('OAuth ban checks and observations use the same normalized address', async () => {
  const result = await run({ headers: { 'x-forwarded-for': '::FFFF:c000:0201,198.51.100.1' },
    remoteAddress: '127.0.0.1' });
  assert.equal(result.res.body.user.id, id);
  assert.equal(checkedIps.at(-1), '192.0.2.1');
  assert.equal(result.observations[0][8], '192.0.2.1');
});

test('OAuth cannot record observations for banned users, invalid headers, or mismatched events', async () => {
  for (const options of [{ bannedAt: new Date() }, { validHeaders: false }, { mismatchedEvent: true }, { expired: true }]) {
    const result = await run(options);
    assert.equal(result.observations.length, 0);
    assert.deepEqual(result.writes, [], 'all receipt/restriction checks precede account mutations');
    if (options.expired || options.mismatchedEvent) assert.equal(result.exchanges, 0);
    assert.equal(result.securityReads, options.bannedAt ? 1 : 0);
  }
  fingerprintBanned = true;
  try {
    assert.equal((await run()).observations.length, 0);
  } finally {
    fingerprintBanned = false;
  }
  browserBanned = true;
  try {
    assert.equal((await run()).observations.length, 0);
    assert.deepEqual(bans, [], 'identifier matches and header failures must not ban accounts');
  } finally {
    browserBanned = false;
  }
});

const databaseUrl = process.env.OBSERVATION_TEST_DATABASE_URL;
const schema = `oauth_test_${randomUUID().replaceAll('-', '')}`;
let admin;
let database;
let databaseQueries = 0;
before(async () => {
  if (!databaseUrl) return;
  const url = new URL(databaseUrl);
  assert.ok(['localhost', '127.0.0.1'].includes(url.hostname));
  assert.equal(url.pathname, '/observation_test');
  admin = new PrismaClient({ datasources: { db: { url: url.toString() } } });
  await admin.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public');
  await admin.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public');
  await admin.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  url.searchParams.set('schema', schema);
  database = new PrismaClient({ datasources: { db: { url: url.toString() } },
    log: [{ level: 'query', emit: 'event' }] });
  database.$on('query', () => { databaseQueries++; });
  // Exercise the real controller/upsert/nested inventory creation against the complete current schema.
  const root = fileURLToPath(new URL('../../', import.meta.url));
  const sql = execFileSync(process.execPath, [
    fileURLToPath(new URL('../node_modules/prisma/build/index.js', import.meta.url)),
    'migrate', 'diff', '--from-empty', '--to-schema-datamodel', 'server/prisma/schema.prisma', '--script',
  ], { cwd: root, env: { ...process.env, DATABASE_URL: url.toString() }, encoding: 'utf8', maxBuffer: 2 * 1024 * 1024 });
  const statements = sql.replaceAll('uuid_generate_v4()', 'public.uuid_generate_v4()')
    .replaceAll('gin_trgm_ops', 'public.gin_trgm_ops').split(';');
  for (const statement of statements) {
    if (statement.trim()) await database.$executeRawUnsafe(statement);
  }
});
after(async () => {
  await database?.$disconnect();
  if (admin) {
    await admin.$executeRawUnsafe(`DROP SCHEMA "${schema}" CASCADE`);
    await admin.$disconnect();
  }
});
const integration = (name, fn) => test(name, { skip: !databaseUrl }, fn);
const reset = () => database.$executeRawUnsafe(`TRUNCATE "User", "BannedBrowser", "BannedFingerprint",
  "KnownFingerprint", "SharedBrowser", "SecurityAction" CASCADE`);
const trackDatabase = (beforeWrite = async () => {}) => {
  const operations = [];
  const upserts = [];
  return { operations, upserts, client: {
    user: {
      upsert: async (args) => {
        operations.push('upsert');
        await beforeWrite();
        const start = databaseQueries;
        const result = await database.user.upsert(args);
        upserts.push({ args, queries: databaseQueries - start });
        return result;
      },
      update: async (args) => { operations.push('update'); return database.user.update(args); },
      findUnique: async (args) => { operations.push('account-read'); return database.user.findUnique(args); },
    },
    $queryRaw: (...args) => { operations.push('restriction-read'); return database.$queryRaw(...args); },
    $executeRaw: (...args) => { operations.push('identifier-write'); return database.$executeRaw(...args); },
  } };
};

integration('real OAuth creates a first-time account, grants five favorites once, and logs in again without an account prefetch', async () => {
  await reset();
  assert.equal(await database.user.count(), 0);
  const tracked = trackDatabase();
  const first = await run({ database: tracked.client });
  assert.equal(first.res.body.user.id, id);
  assert.deepEqual(first.res.body.user.fingerprints, [fingerprint]);
  assert.deepEqual(tracked.operations.slice(0, 2), ['restriction-read', 'upsert']);
  assert.ok(!tracked.operations.includes('account-read'));
  assert.equal(tracked.operations.filter((op) => op === 'identifier-write').length, 1,
    'new-account fingerprint is part of creation; only the observation needs another write');
  const second = await run({ database: tracked.client });
  assert.equal(second.res.body.user.id, id);
  assert.ok(!tracked.operations.includes('account-read'));
  const inventory = await database.inventoryItem.findMany({ where: { userId: id } });
  assert.equal(inventory.length, 1);
  assert.equal(inventory[0].type, 'favoriteFight');
  assert.equal(inventory[0].count, 5);
  const existingUpsert = tracked.upserts[1];
  const start = databaseQueries;
  await database.user.upsert({ ...existingUpsert.args, where: { id } });
  assert.equal(existingUpsert.queries, databaseQueries - start,
    'the conditional guard must not add round trips to the existing-account upsert');
});

integration('real OAuth rejects banned accounts without changing their token, name, fingerprints or inventory', async () => {
  await reset();
  const original = await database.user.create({ data: {
    id, name: 'Original', connexionToken: randomUUID(), bannedAt: new Date(), banReason: 'account_deleted',
    fingerprints: [`v2:${'b'.repeat(32)}:none`],
  } });
  const tracked = trackDatabase();
  const result = await run({ database: tracked.client });
  assert.ok(result.res.statusCode >= 400, 'the controller must reject the login');
  assert.deepEqual(await database.user.findUnique({ where: { id } }), original);
  assert.equal(await database.inventoryItem.count(), 0);
  assert.equal(await database.accountObservation.count(), 0);
  assert.equal(tracked.operations.filter((op) => op === 'account-read').length, 1,
    'the ban explanation is fetched only after the conditional write rejects');
});

integration('a ban committed between restriction checking and upsert prevents OAuth account changes', async () => {
  await reset();
  const token = randomUUID();
  await database.user.create({ data: { id, name: 'Original', connexionToken: token } });
  const tracked = trackDatabase(async () => {
    await database.user.update({ where: { id }, data: { bannedAt: new Date(), banReason: 'account_deleted' } });
  });
  const result = await run({ database: tracked.client });
  assert.ok(result.res.statusCode >= 400, 'the controller must reject the login');
  const row = await database.user.findUnique({ where: { id } });
  assert.equal(row.name, 'Original');
  assert.equal(row.connexionToken, token);
  assert.deepEqual(row.fingerprints, []);
  assert.equal(await database.accountObservation.count(), 0);
});

integration('concurrent first-time OAuth logins create one account and one five-favorite grant', async () => {
  await reset();
  const tracked = trackDatabase();
  const results = await Promise.all([run({ database: tracked.client }), run({ database: tracked.client })]);
  for (const result of results) assert.equal(result.res.body.user.id, id);
  assert.equal(await database.user.count(), 1);
  assert.equal(await database.inventoryItem.count(), 1);
  assert.equal((await database.inventoryItem.findFirst()).count, 5);
  assert.ok(!tracked.operations.includes('account-read'));
});
