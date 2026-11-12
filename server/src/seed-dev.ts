import 'dotenv/config';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { parseSeedOptions, withSeedRandom } from './dev-seed/options.js';
import { seedWorld, SEED_MARKER } from './dev-seed/world.js';

const options = parseSeedOptions(process.argv.slice(2).filter((arg) => arg !== '--'), process.env);

if (!options) {
  console.warn(`Usage: pnpm db:seed:dev [--user-id LOCAL_ETWIN_UUID] [--seed 12345] [--reset DATABASE_NAME]

Uses server/.env DATABASE_URL (or an environment override). Only loopback PostgreSQL is allowed.
Seeds an empty/migrated database; existing arena bots/config/release/server state are allowed.
Re-running is a no-op. --reset DATABASE_NAME wipes application tables in the selected schema.
--user-id grants your local Eternaltwin account admin access and ownership of the demo brutes.
No Eternaltwin accounts are created by this command.`);
} else {
  const prisma = new PrismaClient();
  // Import the server simulator only after validating the destination. Its shared context is
  // closed below; no HTTP server, scheduled jobs, or achievement announcements are started.
  const { GLOBAL } = await import('./context.js');

  try {
    const { generateFight } = await import('./utils/fight/generateFight.js');
    const result = await withSeedRandom(options.seed, () => prisma.$transaction(async (db) => {
      await db.$executeRaw`SELECT pg_advisory_xact_lock(192837465)`;

      if (options.reset) {
        const tables = await db.$queryRaw<{ tablename: string }[]>`
          SELECT tablename FROM pg_tables
          WHERE schemaname = ${options.schema} AND tablename <> '_prisma_migrations'
        `;
        const quote = (identifier: string) => `"${identifier.replace(/"/g, '""')}"`;

        if (tables.length) {
          // Identifiers come from the catalog, are quoted, and are confined to the selected schema.
          const names = tables.map(({ tablename }) => `${quote(options.schema)}.${quote(tablename)}`);
          await db.$executeRawUnsafe(`TRUNCATE TABLE ${names.join(', ')} RESTART IDENTITY`);
        }
      }

      if (await db.config.findUnique({ where: { key: SEED_MARKER } })) {
        return null;
      }

      // Allow bootstrap state and a single already-authenticated local account. Refuse to mix
      // synthetic fixtures with a restored database. Any failure rolls back even a requested reset.
      for (const model of Prisma.dmmf.datamodel.models) {
        if (['Config', 'ServerState', 'Release'].includes(model.name)) {
          continue;
        }

        const loginTables = ['UserStats', 'UserLog', 'AccountObservation', 'InventoryItem', 'Notification'];
        let where = Prisma.empty;

        if (model.name === 'Brute') {
          where = Prisma.sql`WHERE "userId" IS NOT NULL`;
        } else if (model.name === 'User' && options.userId) {
          where = Prisma.sql`WHERE id <> ${options.userId}::uuid`;
        } else if (loginTables.includes(model.name) && options.userId) {
          where = Prisma.sql`WHERE "userId" IS DISTINCT FROM ${options.userId}::uuid`;
        }

        const rows = await db.$queryRaw<{ count: bigint }[]>(Prisma.sql`
          SELECT COUNT(*) FROM ${Prisma.raw(`"${options.schema}"."${model.name}"`)} ${where}
        `);

        if (rows.some((row) => row.count > 0n)) {
          throw new Error(`Table ${model.name} contains data. Use a fresh database or --reset ${options.database}.`);
        }
      }

      return seedWorld(db, prisma, generateFight, options.userId);
    }, {
      timeout: 300000,
      maxWait: 10000,
    }));

    if (result) {
      console.warn(`Seeded ${options.database}/${options.schema} (seed ${options.seed}).
Admin user: ${result.adminId}
Main brutes: ${result.brutes}; arena bots: ${result.bots}; perk specimens: all skills/weapons/pets.
Start at /DevRank11/cell. Replay: /fight/${result.arenaFightId}
See docs/engineering/development-seed.md for scenarios and local login.`);
    } else {
      console.warn('Development seed already exists; no changes made. Use --reset DATABASE_NAME to rebuild.');
    }
  } finally {
    await Promise.all([prisma.$disconnect(), GLOBAL.close()]);
  }
}
