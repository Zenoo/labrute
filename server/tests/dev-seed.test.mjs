import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { test } from 'node:test';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { parseSeedOptions, withSeedRandom } from '../lib/dev-seed/options.js';
import { createPlayableBrute } from '../lib/dev-seed/progression.js';
import { seedId, SEED_MARKER } from '../lib/dev-seed/world.js';

const local = { DATABASE_URL: 'postgresql://dev:dev@localhost:5432/labrute_seed_test' };
test('development seed rejects unsafe targets and ambiguous reset arguments', () => {
  for (const DATABASE_URL of [
    'postgresql://dev:dev@production.example/game',
    'postgresql://dev:dev@localhost/postgres',
    'postgresql://dev:dev@localhost/template1',
    'postgresql://dev:dev@localhost/game?schema=bad%22schema',
  ]) {
    assert.throws(() => parseSeedOptions([], { DATABASE_URL }));
  }

  assert.throws(() => parseSeedOptions([], {
    ...local,
    NODE_ENV: 'production',
  }));
  assert.throws(() => parseSeedOptions(['--reset', 'other-db'], local));
  assert.throws(() => parseSeedOptions(['--reset'], local));
  assert.throws(() => parseSeedOptions(['--user-id', 'invalid'], local));
  assert.throws(() => parseSeedOptions(['--seed', '0'], local));
  assert.throws(() => parseSeedOptions(['--typo'], local));
  assert.equal(parseSeedOptions(['--help'], {}), null);
  assert.equal(parseSeedOptions(['--reset', 'labrute_seed_test'], local).reset, true);
});

test('progression is reproducible, stores both destiny branches, and restores RNG on failure', async () => {
  const original = Math.random;
  const first = await withSeedRandom(123, async () => createPlayableBrute('Test', 20));
  const second = await withSeedRandom(123, async () => createPlayableBrute('Test', 20));
  assert.deepEqual(first, second);
  assert.equal(first.destinyPath.length, 19);
  assert.equal(first.destinyChoices.create.length, 41);
  assert.equal(Math.random, original);
  await assert.rejects(withSeedRandom(123, async () => {
    throw new Error('failure');
  }));
  assert.equal(Math.random, original);
  const specimen = await withSeedRandom(123, async () => createPlayableBrute(
    'Shield', 3, 'female', {
      type: 'skill',
      name: 'shield',
    },
  ));
  assert.equal(specimen.skills.filter((skill) => skill === 'shield').length, 3);
  assert.equal(specimen.destinyPath.length, 2);
  assert.ok(specimen.destinyChoices.create.filter((choice) => choice.path.length === 3)
    .every((choice) => choice.skill !== 'shield'), 'next offers must respect the tier cap');
  const dogs = await withSeedRandom(123, async () => createPlayableBrute(
    'Dogs', 5, 'male', {
      type: 'pet',
      name: 'dog3',
    },
  ));
  assert.deepEqual(dogs.pets, ['dog1', 'dog2', 'dog3', 'dog3', 'dog3']);
  const ascended = await withSeedRandom(123, async () => createPlayableBrute(
    'Ascended', 10, 'male', undefined,
    {
      ascendedSkills: ['shield'],
      ascendedWeapons: ['knife'],
      ascendedPets: ['dog1'],
    },
  ));
  assert.ok(ascended.skills.includes('shield'));
  assert.ok(ascended.weapons.includes('knife'));
  assert.ok(ascended.pets.includes('dog1'));
});

// Explicit opt-in: this test wipes this exact disposable database, never the normal development DB.
const integrationUrl = process.env.DEV_SEED_TEST_DATABASE_URL;
test('full CLI seed, every model, replay data, rerun, reset, login ownership and rollback', {
  skip: !integrationUrl,
  timeout: 300000,
}, async () => {
  const url = new URL(integrationUrl);
  assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(url.hostname));
  assert.ok(['/labrute_seed_test', '/labrutebattleyroyale'].includes(url.pathname));
  assert.equal(url.searchParams.get('schema') ?? 'public', 'public');
  const env = {
    ...process.env,
    DATABASE_URL: integrationUrl,
    NODE_ENV: 'development',
  };
  const run = promisify(execFile);
  const cli = (...args) => run(process.execPath, ['lib/seed-dev.js', ...args], { env });
  await run(process.execPath, [
    'node_modules/prisma/build/index.js', 'migrate', 'reset',
    '--force', '--skip-seed', '--skip-generate',
  ], { env });
  const db = new PrismaClient({ datasources: { db: { url: integrationUrl } } });

  try {
    // A normal first OAuth login already creates these rows; seeding should still work.
    const existingUserId = seedId('admin');
    await db.user.create({
      data: {
        id: existingUserId,
        name: 'Local Player',
        connexionToken: seedId('login-token'),
        lang: 'fr',
        inventory: {
          create: {
            type: 'favoriteFight',
            count: 5,
          },
        },
        stats: {
          create: {
            date: new Date().toISOString().slice(0, 10) + 'T00:00:00Z',
            granularity: 'daily',
            connectedDays: 1,
          },
        },
      },
    });
    const start = performance.now();
    await cli('--user-id', existingUserId);
    const account = await db.user.findUnique({ where: { id: existingUserId } });
    assert.equal(account.name, 'Local Player');
    assert.equal(account.lang, 'fr');
    assert.equal(account.connexionToken, seedId('login-token'));
    console.log(`Full development seed: ${((performance.now() - start) / 1000).toFixed(1)}s`);
    const counts = {};

    for (const model of Prisma.dmmf.datamodel.models) {
      const [row] = await db.$queryRawUnsafe(`SELECT COUNT(*)::int AS count FROM "${model.name}"`);
      counts[model.name] = row.count;
      assert.ok(row.count > 0, `${model.name} must have a debugging fixture`);
    }

    const brutes = await db.brute.findMany({
      include: {
        destinyChoices: true,
        startingStats: true,
      },
    });
    assert.equal(brutes.filter((brute) => brute.name.startsWith('DevBot')).length, 1200);

    for (const brute of brutes.filter((brute) => brute.userId)) {
      assert.ok(brute.startingStats, `${brute.name} starting stats`);
      assert.equal(brute.destinyPath.length, brute.level - 1, `${brute.name} destiny depth`);
      assert.ok(brute.hpValue > 0, `${brute.name} valid HP`);
    }

    const fights = await db.fight.findMany();

    for (const fight of fights) {
      const steps = JSON.parse(fight.steps);
      const fighters = JSON.parse(fight.fighters);
      assert.ok(steps.length > 2);
      assert.ok(fighters.some((fighter) => fighter.id === fight.winnerId));
      assert.ok(fighters.some((fighter) => fighter.id === fight.loserId));
    }

    const daily = await db.tournament.findFirst({
      where: { type: 'DAILY' },
      include: {
        fights: true,
        participants: true,
      },
    });
    assert.equal(daily.participants.length, 64);
    assert.equal(daily.fights.length, 63);
    assert.equal(Math.max(...daily.fights.map((fight) => fight.tournamentStep)), 63);
    const warFight = fights.find((fight) => fight.clanWarId);
    assert.ok(JSON.parse(warFight.fighters).filter((fighter) => fighter.type === 'brute').length >= 4);
    const before = await db.brute.findUnique({ where: { id: seedId('DevRank11') } });
    await cli();
    assert.equal(await db.brute.count(), counts.Brute, 'second run adds no rows');
    // Force a late failure. Resetting and all fixture mutations must roll back together.
    await db.$executeRawUnsafe(`CREATE FUNCTION dev_seed_fail() RETURNS trigger AS $$
      BEGIN RAISE EXCEPTION 'intentional seed test failure'; END;
      $$ LANGUAGE plpgsql`);
    await db.$executeRawUnsafe(`CREATE TRIGGER dev_seed_fail BEFORE INSERT ON "Config"
      FOR EACH ROW EXECUTE FUNCTION dev_seed_fail()`);
    await assert.rejects(cli('--reset', url.pathname.slice(1)));
    assert.equal(await db.brute.count(), counts.Brute, 'failed reset preserves old dataset');
    assert.ok(await db.config.findUnique({ where: { key: SEED_MARKER } }));
    await db.$executeRawUnsafe('DROP TRIGGER dev_seed_fail ON "Config"');
    await db.$executeRawUnsafe('DROP FUNCTION dev_seed_fail()');
    const ownerId = '12345678-1234-4234-8234-123456789abc';
    await cli('--reset', url.pathname.slice(1), '--user-id', ownerId);
    assert.equal((await db.user.findUnique({ where: { id: ownerId } })).admin, true);
    const after = await db.brute.findUnique({ where: { id: seedId('DevRank11') } });
    assert.equal(after.userId, ownerId);
    assert.equal(after.body, before.body, 'reset with same seed reproduces appearance');
    assert.equal(await db.brute.count(), counts.Brute);
    console.log('Seed model counts:', counts);
  } finally {
    await db.$disconnect();
  }
});
