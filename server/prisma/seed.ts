/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import { Gender, Prisma, PrismaClient } from '@labrute/prisma';
import {
  ARENA_OPPONENTS_COUNT, createRandomBruteStats, FIGHTS_PER_DAY, getLevelUpChoices, getRandomBody,
  getRandomColors, updateBruteData,
} from '@labrute/core';
import {
  adjectives, animals, colors, languages, names, starWars, uniqueNamesGenerator,
} from 'unique-names-generator';
import moment from 'moment';
import createSpritesheet from '../lib/utils/createSpritesheet';
import formatSpritesheet from '../lib/utils/formatSpritesheet';

const generateBrute = (
  prisma: PrismaClient,
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
    name,
    gender,
    body: {
      create: getRandomBody(gender),
    },
    colors: {
      create: getRandomColors(gender),
    },
    victories: 0,
    pupilsCount: 0,
    lastFight: moment().toDate(),
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
        data,
        levelUpChoice,
      ),
    };
  }

  return data;
};

const prisma = new PrismaClient();
async function main() {
  // Check if DB is already seeded
  const count = await prisma.brute.count();

  if (count > 0) {
    console.warn('DB is not empty, skipping seeding');
    return;
  }

  // Generate random names
  console.log('Generating random brutes...');
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

    const brute = await prisma.brute.create({
      data: generateBrute(prisma, Math.floor(i / (ARENA_OPPONENTS_COUNT / 2)) + 1, generatedName),
      include: { body: true, colors: true },
    });

    // Generate animation spritesheet
    const spritesheet = await createSpritesheet(brute);

    // Store spritesheet image in database as blob and data as json
    await prisma.brute.update({
      where: { id: brute.id },
      data: {
        spritesheet: spritesheet.image,
        spritesheetJson: formatSpritesheet(spritesheet, brute) as unknown as Prisma.JsonObject,
      },
    });

    process.stdout.write(`\r${i + 1}/${ARENA_OPPONENTS_COUNT * 100}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });