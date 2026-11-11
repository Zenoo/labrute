import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PrismaClient } from '@labrute/prisma';

export const createSecurityDatabase = async () => {
  const url = new URL(process.env.OBSERVATION_TEST_DATABASE_URL);
  assert.ok(['localhost', '127.0.0.1'].includes(url.hostname));
  assert.equal(url.pathname, '/observation_test');
  const admin = new PrismaClient({ datasources: { db: { url: url.toString() } } });
  await admin.$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtextextended('security-test-extensions', 0))`;
    await tx.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public');
    await tx.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public');
  });
  const schema = `security_test_${randomUUID().replaceAll('-', '')}`;
  await admin.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  url.searchParams.set('schema', schema);
  const prisma = new PrismaClient({ datasources: { db: { url: url.toString() } } });
  try {
    const sql = execFileSync(process.execPath, [
      fileURLToPath(new URL('../../node_modules/prisma/build/index.js', import.meta.url)),
      'migrate', 'diff', '--from-empty', '--to-schema-datamodel', 'server/prisma/schema.prisma', '--script',
    ], { cwd: fileURLToPath(new URL('../../../', import.meta.url)),
      env: { ...process.env, DATABASE_URL: url.toString() }, encoding: 'utf8', maxBuffer: 2 * 1024 * 1024 });
    for (const statement of sql.replaceAll('uuid_generate_v4()', 'public.uuid_generate_v4()')
      .replaceAll('gin_trgm_ops', 'public.gin_trgm_ops').split(';')) {
      if (statement.trim()) await prisma.$executeRawUnsafe(statement);
    }
  } catch (error) {
    await prisma.$disconnect();
    await admin.$executeRawUnsafe(`DROP SCHEMA "${schema}" CASCADE`);
    await admin.$disconnect();
    throw error;
  }
  return { prisma, async close() {
    await prisma.$disconnect();
    await admin.$executeRawUnsafe(`DROP SCHEMA "${schema}" CASCADE`);
    await admin.$disconnect();
  } };
};
