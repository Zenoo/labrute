/* eslint-disable no-console */
import {
  ARENA_OPPONENTS_COUNT,
  FIGHTS_PER_DAY,
  createRandomBruteStats,
  getLevelUpChoices, getRandomBody,
  getRandomColors,
  updateBruteData,
} from '@labrute/core';
import { Gender, Prisma } from '@labrute/prisma';
import moment from 'moment';
import {
  adjectives, animals, colors, languages, names, starWars, uniqueNamesGenerator,
} from 'unique-names-generator';
import { GLOBAL, ServerContext } from './context.js';

const generateBrute = (
  level: number,
  name: string,
): Prisma.BruteCreateInput => {
  if (level < 1) {
    throw new Error('Level must be at least 1');
  }

  // 50% change male
  const gender: Gender = Math.random() > 0.5 ? 'male' : 'female';

  // Level 1 stats
  let data = {
    id: undefined,
    name,
    gender,
    body: getRandomBody(gender),
    colors: getRandomColors(gender),
    victories: 0,
    losses: 0,
    pupilsCount: 0,
    lastFight: moment.utc().toDate() as Date | null,
    fightsLeft: FIGHTS_PER_DAY,
    ...createRandomBruteStats(),
  };

  // Level the brute to desired level
  for (let j = 1; j < level; j++) {
    // NOTE: Destiny is ignored for now

    // Get level up choices
    const levelUpChoices = getLevelUpChoices(data);

    // Randomly choose one of the choices
    const levelUpChoice = Math.random() > 0.5 ? levelUpChoices[0] : levelUpChoices[1];

    // Update the brute data
    data = {
      ...data,
      ...updateBruteData(
        { ...data, id: '', eventId: null },
        levelUpChoice,
      ),
      id: undefined,
    };
  }

  return data;
};

async function main(cx: ServerContext) {
  // Check if DB is already seeded
  const count = await cx.prisma.brute.count({
    where: { userId: null },
  });

  if (count >= ARENA_OPPONENTS_COUNT * 100) {
    return;
  }

  // Setting old generated brutes as deleted
  await cx.prisma.brute.updateMany({
    where: { userId: null },
    data: { deletedAt: moment.utc().toDate() },
  });

  // Generate random names
  cx.logger.log(`DB only contains ${count} generated brutes, regenerating ${ARENA_OPPONENTS_COUNT * 100}...`);
  const nicks: string[] = [];
  for (let i = 0; i < ARENA_OPPONENTS_COUNT * 100; i++) {
    let generatedName;

    // Reroll if name already exists
    while (!generatedName || nicks.includes(generatedName)) {
      generatedName = uniqueNamesGenerator({
        dictionaries: [colors, adjectives, animals, names, languages, starWars],
        style: 'capital',
        separator: '',
        length: 2,
      }).replace(/\s/g, '').substring(0, 16);
    }

    nicks.push(generatedName);

    await cx.prisma.brute.create({
      data: generateBrute(Math.floor(i / (ARENA_OPPONENTS_COUNT / 2)) + 1, generatedName),
    });
  }
}

/**
 * Initialize the global context, then run `main`
 */
async function mainWrapper() {
  await using context = GLOBAL;
  await main(context);
}

await mainWrapper();
