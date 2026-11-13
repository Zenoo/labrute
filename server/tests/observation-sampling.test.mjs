import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { mock, test } from 'node:test';

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
const { recordAccountObservation } = await import('../lib/utils/accountObservations.js');
const userId = randomUUID();
const browserId = randomUUID();
const now = new Date('2026-11-11T12:00:00.000Z');

const request = (browser = browserId, headers = {}) => ({
  signedCookies: { browserId: browser },
  security: {
    fingerprint: `v2:${'a'.repeat(32)}:none`,
    validHeaders: true,
  },
  socket: { remoteAddress: '192.0.2.1' },
  headers,
});

test('concurrent requests for one tuple share a write and warm requests avoid database calls', async () => {
  let calls = 0;
  let finish;

  const prisma = {
    $executeRaw: () => {
      calls++;

      return new Promise((resolve) => {
        finish = resolve;
      });
    },
  };

  const requests = Array.from(
    { length: 100 },
    () => recordAccountObservation(prisma, userId, request(), now),
  );

  assert.equal(calls, 1);
  finish(1);
  await Promise.all(requests);

  for (let i = 0; i < 100; i++) {
    await recordAccountObservation(prisma, userId, request(), new Date(now.getTime() + 1000));
  }

  assert.equal(calls, 1);

  prisma.$executeRaw = async () => {
    calls++;

    return 1;
  };

  await recordAccountObservation(prisma, userId, request(), new Date(now.getTime() + 300000));
  assert.equal(calls, 2);
});

test('failed writes reject all waiting callers and retry rather than recording a cached success', async () => {
  let calls = 0;

  const prisma = {
    $executeRaw: async () => {
      calls++;
      throw new Error('temporary database failure');
    },
  };

  const results = await Promise.allSettled(Array.from({ length: 20 },
    () => recordAccountObservation(prisma, userId, request(), now)));

  assert.equal(calls, 1);
  assert.ok(results.every((result) => result.status === 'rejected'));

  prisma.$executeRaw = async () => {
    calls++;

    return 1;
  };

  await recordAccountObservation(prisma, userId, request(), now);
  assert.equal(calls, 2);
});

test('rapid A-B-A account changes bypass the daily tuple throttle without extra database round trips', async () => {
  const writes = [];

  const prisma = {
    $executeRaw: async (strings, ...values) => {
      writes.push({
        sql: strings.join('?'),
        values,
      });

      return 1;
    },
  };

  const otherUser = randomUUID();

  for (const [index, id] of [userId, otherUser, userId, otherUser].entries()) {
    await recordAccountObservation(prisma, id, request(), new Date(now.getTime() + index * 1000));
  }

  assert.equal(writes.length, 4);
  assert.ok(writes.every((write) => write.sql.includes('INSERT INTO "AccountActivitySample"')));
  await recordAccountObservation(prisma, otherUser, request(), new Date(now.getTime() + 4000));
  assert.equal(writes.length, 4, 'ordinary requests remain cached after a switch');
});

test('tuple changes, UTC day changes and separate database clients are never merged', async () => {
  let calls = 0;

  const first = {
    $executeRaw: async () => {
      calls++;

      return 1;
    },
  };

  const second = { $executeRaw: first.$executeRaw };

  await recordAccountObservation(first, userId, request(), now);
  await recordAccountObservation(second, userId, request(), now);
  await recordAccountObservation(first, userId, request(randomUUID()), now);
  await recordAccountObservation(first, userId, request(browserId, { 'et-ja4': 'different TLS client' }), now);
  await recordAccountObservation(first, userId, request(), new Date('2026-11-12T00:00:00.000Z'));
  assert.equal(calls, 5);
});

test('the per-client cache evicts old entries instead of growing with unique request identities', async () => {
  let calls = 0;

  const prisma = {
    $executeRaw: async () => {
      calls++;

      return 1;
    },
  };

  const browsers = Array.from({ length: 10001 }, () => randomUUID());

  for (const browser of browsers) {
    await recordAccountObservation(prisma, userId, request(browser), now);
  }

  assert.equal(calls, 10001);
  await recordAccountObservation(prisma, userId, request(browsers[browsers.length - 1]), now);
  assert.equal(calls, 10001, 'recent tuples remain cached');
  await recordAccountObservation(prisma, userId, request(browsers[0]), now);
  assert.equal(calls, 10002, 'evicted identities are safely sampled again');
});
