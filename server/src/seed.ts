
import { ARENA_OPPONENTS_COUNT } from '@labrute/core';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import {
  adjectives, animals, colors, languages, names, starWars, uniqueNamesGenerator,
} from 'unique-names-generator';
import { GLOBAL, ServerContext } from './context.js';
import { generateBot } from './utils/brute/generateBot.js';

dayjs.extend(utc);

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
    data: { deletedAt: dayjs.utc().toDate() },
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
      data: generateBot(Math.floor(i / (ARENA_OPPONENTS_COUNT / 2)) + 1, generatedName),
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
