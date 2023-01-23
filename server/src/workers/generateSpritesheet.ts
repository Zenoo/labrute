import { BruteWithBodyColors } from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { workerData } from 'worker_threads';
import createSpritesheet from '../utils/createSpritesheet.js';
import formatSpritesheet from '../utils/formatSpritesheet.js';

const brute = workerData as BruteWithBodyColors;
const prisma = new PrismaClient();

// Check if spritesheet already exists
const count = await prisma.bruteSpritesheet.count({
  where: { brute: { id: brute.id } },
});

if (count > 0) {
  throw new Error(`Spritesheet already exists for ${brute.name}`);
}

// Create spritesheet
const spritesheet = await createSpritesheet(brute);

await prisma.bruteSpritesheet.create({
  data: {
    image: spritesheet.image,
    json: formatSpritesheet(spritesheet, brute) as unknown as Prisma.JsonObject,
    brute: { connect: { id: brute.id } },
  },
});