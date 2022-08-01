/* eslint-disable no-process-exit, no-console */
import path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';
import pg from 'pg';
import * as url from 'url';
import * as semverSort from 'semver-sort';

const PACKAGE_ROOT = path.join(url.fileURLToPath(import.meta.url), '..', '..', '..');
const MIGRATIONS_DIR = path.join(PACKAGE_ROOT, 'migrations');

// Apply scripts
const applyScripts = async (client: pg.Client, scripts: string[]) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const script of scripts) {
    console.log(`Applying script ${script}`);
    const scriptPath = path.join(MIGRATIONS_DIR, `${script}.sql`);
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');

    // Get upgrade part of the script
    const upgrade = scriptContent.split('-- DOWN --')[0];

    // eslint-disable-next-line no-await-in-loop
    await client.query(upgrade);
    console.log(`Applied script ${script}`);
  }
};

console.log('Loading environment variables...');
dotenv.config();

// Get the list of files from /server/db/migrations
console.log('Loading migrations...');
const files = fs.readdirSync(MIGRATIONS_DIR);
console.log(`Found ${files.length} migrations.`);

// Create a new Postgres client
console.log('Connecting to Postgres...');
const client = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? +process.env.DB_PORT : 9000,
});

await client.connect();
console.log('Connected to Postgres.');

// Check if the migration table exists
const { rows: { 0: migration } } = await client.query<{ count: string }>('SELECT count(*) FROM information_schema.tables WHERE table_schema = current_schema() AND table_name = \'migration\';');

let current: { version: string } | null = null;

if (+migration.count) {
  // Get the current database version
  const { rows: { 0: currentQuery } } = await client.query<{ version: string }>('SELECT version FROM migration LIMIT 1');
  current = currentQuery;
}

// Order scripts by version
const orderedScripts = [...files]
  .map((n) => n.replace('.sql', ''));
semverSort.asc(orderedScripts);

// Get last script
const lastScript = [...orderedScripts].pop();

if (current && migration.count) {
  if (current.version === lastScript) {
    console.log('Database is up to date.');
    await client.end();
    process.exit(0);
  }

  console.log('Database is not up to date.');
  console.log('Migrating from version', current.version, 'to', lastScript);
  await applyScripts(
    client,
    orderedScripts.splice(orderedScripts.indexOf(current.version) + 1),
  );
} else {
  // Apply all migrations
  console.log('No database version found. Applying all migrations...');
  await applyScripts(client, orderedScripts);
}

// Delete the current database version
await client.query('DELETE FROM migration');

// Store the current database version
await client.query('INSERT INTO migration (version) VALUES ($1)', [lastScript]);

await client.end();

console.log('Database migration complete.');
