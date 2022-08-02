/* eslint-disable no-process-exit, no-console */
import generateBrute from '@eternaltwin/labrute-core/brute/generateBrute';
import dotenv from 'dotenv';
import pg from 'pg';

const [level, name] = process.argv.slice(2);

if (!level || !name) {
  console.log('Usage: yarn db:brute:generate -- <level> <name>');
  process.exit(1);
}
console.log(level, name);
console.log('Loading environment variables...');
dotenv.config();

// Create a new Postgres client
console.log('Connecting to Postgres...');
const client = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
});

await client.connect();
console.log('Connected to Postgres.');

console.log('Generating brute...');
const bruteData = generateBrute(+level, name);

// Insert brute
console.log('Inserting brute...');
await client.query('INSERT INTO brutes (data) VALUES ($1)', [bruteData]);

console.log('Done!');
await client.end();