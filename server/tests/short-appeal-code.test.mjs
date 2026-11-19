import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import {
  after, before, test,
} from 'node:test';
import { formatAppealCode } from '@labrute/core';
import { Prisma } from '@labrute/prisma';
import { createSecurityDatabase } from './helpers/securityDatabase.mjs';
import { resolveAppealCode } from '../lib/utils/resolveAppealCode.js';
import { retryAppealReferenceCollision } from '../lib/utils/retryAppealReferenceCollision.js';

let fixture;
const enabled = !!process.env.OBSERVATION_TEST_DATABASE_URL;

before(async () => {
  if (enabled) {
    fixture = await createSecurityDatabase();
  }
});
after(async () => fixture?.close());

test('short references are compact, case-insensitive and bounded before database reads', async () => {
  assert.equal(formatAppealCode(randomUUID(), randomUUID(), '0123456789ABCDEF'), 'AP-0123456789ABCDEF');
  assert.ok(formatAppealCode(randomUUID(), null, 'FEDCBA9876543210').length === 19);

  for (const invalid of [null, 'AP-0', 'AP-ZZZZZZ', 'AP-1234567', 'USER-invalid', ['AP-1']]) {
    await assert.rejects(resolveAppealCode({}, invalid), /Invalid short appeal code/);
  }
});

test('references use the indexed account key and do not resolve an unknown account', async () => {
  await assert.rejects(resolveAppealCode({
    user: {
      findUnique: async (args) => {
        assert.deepEqual(args.where, { appealReference: '0123456789ABCDEF' });

        return null;
      },
    },
  }, 'ap-0123456789abcdef'), /Appeal account not found/);
});

test('reference collisions retry creation without confusing account-ID races', async () => {
  const collision = (field) => new Prisma.PrismaClientKnownRequestError('Unique conflict', {
    code: 'P2002',
    clientVersion: 'test',
    meta: { target: [field] },
  });

  let attempts = 0;

  const result = await retryAppealReferenceCollision(async () => {
    attempts++;

    if (attempts < 3) {
      throw collision('appealReference');
    }

    return 'created';
  });

  assert.equal(result, 'created');
  assert.equal(attempts, 3);
  attempts = 0;
  await assert.rejects(retryAppealReferenceCollision(async () => {
    attempts++;
    throw collision('id');
  }));
  assert.equal(attempts, 1);
  attempts = 0;
  await assert.rejects(retryAppealReferenceCollision(async () => {
    attempts++;
    throw collision('appealReference');
  }));
  assert.equal(attempts, 5, 'persistent collisions must fail rather than loop indefinitely');
});

test('each account has a unique stable reference resolving its current case or unbanned profile', {
  skip: !enabled,
}, async () => {
  const db = fixture.prisma;
  const firstCase = randomUUID();

  const first = await db.user.create({
    data: {
      id: randomUUID(),
      name: 'First appeal',
      connexionToken: randomUUID(),
      bannedAt: new Date(),
      banAppealCode: firstCase,
    },
  });

  const second = await db.user.create({
    data: {
      id: randomUUID(),
      name: 'Second appeal',
      connexionToken: randomUUID(),
      bannedAt: new Date(),
      banAppealCode: firstCase,
    },
  });

  assert.notEqual(first.appealReference, second.appealReference);
  assert.match(first.appealReference, /^[0-9A-F]{16}$/);
  await assert.rejects(db.user.create({
    data: {
      id: randomUUID(),
      name: 'Duplicate reference',
      connexionToken: randomUUID(),
      appealReference: first.appealReference,
    },
  }), (error) => error.code === 'P2002');
  const code = formatAppealCode(first.id, firstCase, first.appealReference);

  assert.deepEqual(await resolveAppealCode(db, code), {
    userId: first.id,
    caseCode: `MC-${firstCase}`,
  });
  const nextCase = randomUUID();

  await db.user.update({
    where: { id: first.id },
    data: { banAppealCode: nextCase },
  });
  assert.equal((await resolveAppealCode(db, code)).caseCode, `MC-${nextCase}`);
  await db.user.update({
    where: { id: first.id },
    data: {
      bannedAt: null,
      banAppealCode: null,
    },
  });
  assert.deepEqual(await resolveAppealCode(db, code), {
    userId: first.id,
    caseCode: null,
  });
});
