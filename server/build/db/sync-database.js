/* eslint-disable no-process-exit */
import path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';
import pg from 'pg';
import * as url from 'url';
import * as semverSort from 'semver-sort';
const dirname = url.fileURLToPath(new URL('.', import.meta.url));
// Apply scripts
const applyScripts = async (client, scripts) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const script of scripts) {
        console.log(`Applying script ${script}`);
        const scriptPath = path.join(dirname, 'migrations', `${script}.sql`);
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
const files = fs.readdirSync(path.join(dirname, 'migrations'));
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
// Get the current database version
const currentVersion = await client.query('SELECT version FROM migration LIMIT 1');
// Order scripts by version
const orderedScripts = [...files]
    .map((n) => n.replace('.sql', ''));
semverSort.asc(orderedScripts);
// Get last script
const lastScript = [...orderedScripts].pop();
if (currentVersion.rows.length) {
    if (currentVersion.rows[0].version === lastScript) {
        console.log('Database is up to date.');
        await client.end();
        process.exit(0);
    }
    console.log('Database is not up to date.');
    console.log('Migrating from version', currentVersion.rows[0].version, 'to', lastScript);
    await applyScripts(client, orderedScripts.splice(orderedScripts.indexOf(currentVersion.rows[0].version) + 1));
}
else {
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
//# sourceMappingURL=sync-database.js.map