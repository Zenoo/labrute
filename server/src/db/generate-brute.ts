/* eslint-disable no-process-exit, no-console */
import generateBrute from '@eternaltwin/labrute-core/brute/generateBrute';
import DB from './client.js';

const [level, name] = process.argv.slice(2);

if (!level || !name) {
  console.log('Usage: yarn db:brute:generate -- <level> <name>');
  process.exit(1);
}

console.log('Connecting to Postgres...');
const client = await DB.connect();
console.log('Connected to Postgres.');

console.log('Generating brute...');
const bruteData = generateBrute(+level);

// Insert brute
console.log('Inserting brute...');
await client.query('INSERT INTO brutes (name, data) VALUES ($1)', [name, bruteData]);

console.log('Done!');
await client.end();