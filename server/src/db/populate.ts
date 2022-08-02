/* eslint-disable no-process-exit, no-console */
import createRandomBruteStats from '@eternaltwin/labrute-core/brute/createRandomBruteStats';
import getLevelUpChoices from '@eternaltwin/labrute-core/brute/getLevelUpChoices';
import getRandomBody from '@eternaltwin/labrute-core/brute/getRandomBody';
import getRandomColors from '@eternaltwin/labrute-core/brute/getRandomColors';
import updateBruteData from '@eternaltwin/labrute-core/brute/updateBruteData';
import { ARENA_OPPONENTS_COUNT } from '@eternaltwin/labrute-core/constants';
import {
  Brute, Gender,
} from '@eternaltwin/labrute-core/types';
import dotenv from 'dotenv';
import pg from 'pg';
import format from 'pg-format';
import {
  adjectives, animals, colors, languages, names, starWars, uniqueNamesGenerator,
} from 'unique-names-generator';

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

// Check if already populated
const { rows: { 0: brutes } } = await client.query<{ count: string }>('SELECT count(*) FROM brutes;');

if (+brutes.count >= ARENA_OPPONENTS_COUNT * 100) {
  console.log('Database is already populated.');
  await client.end();
  process.exit(0);
}

// Generate random names
console.log('Generating random brutes...');
const nicks: string[] = [];
const bruteDatas: (Brute['data'])[][] = [];
for (let i = 0; i < ARENA_OPPONENTS_COUNT * 100; i++) {
  let generatedName = uniqueNamesGenerator({
    dictionaries: [colors, adjectives, animals, names, languages, starWars],
    style: 'capital',
    separator: '',
    length: 3,
  }).replace(/\s/g, '');

  // Reroll if name already exists
  while (nicks.includes(generatedName)) {
    generatedName = uniqueNamesGenerator({
      dictionaries: [colors, adjectives, animals, names, languages, starWars],
      style: 'capital',
      separator: '',
      length: 3,
    }).replace(/\s/g, '');
  }

  nicks.push(generatedName);

  // 50% change male
  const gender: Gender = Math.random() > 0.5 ? 'male' : 'female';

  // Level 1 stats
  let data = {
    user: '',
    name: generatedName,
    gender,
    body: getRandomBody(gender),
    colors: getRandomColors(gender),
    master: {
      id: 0,
      name: '',
    },
    victories: 0,
    pupils: 0,
    ...createRandomBruteStats(),
  };

  // Level the brute to desired level
  for (let j = 1; j < i / (ARENA_OPPONENTS_COUNT / 2); j++) {
    // NOTE: Destiny is ignored for now

    // Get level up choices
    const levelUpChoices = getLevelUpChoices({ data } as Brute);

    // Randomly choose one of the choices
    const levelUpChoice = Math.random() > 0.5 ? levelUpChoices[0] : levelUpChoices[1];

    // Update the brute data
    data = {
      ...data,
      ...updateBruteData(
        { data } as Brute,
        levelUpChoice,
      ),
    };
  }

  bruteDatas.push([data]);
}

console.log(`Generated ${bruteDatas.length} brutes.`);

// Insert all brutes at once
console.log('Inserting brutes...');
await client.query(format('INSERT INTO brutes (data) VALUES %L', bruteDatas));

console.log('Done!');
await client.end();