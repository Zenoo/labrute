import { BruteWithBodyColors, getBruteVisuals } from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { workerData } from 'worker_threads';
import createSpritesheet from '../utils/createSpritesheet.js';
import formatSpritesheet from '../utils/formatSpritesheet.js';

const brute = workerData as BruteWithBodyColors;
const prisma = new PrismaClient();

try {
  const visuals = getBruteVisuals(brute);

  // Check if spritesheet already exists
  const count = await prisma.bruteSpritesheet.count({
    where: { ...visuals },
  });

  if (count > 0) {
    throw new Error(`Spritesheet already exists for ${brute.name}`);
  }

  // Create spritesheet
  const spritesheet = await createSpritesheet(visuals);

  await prisma.bruteSpritesheet.create({
    data: {
      image: spritesheet.image,
      json: formatSpritesheet(spritesheet, visuals) as unknown as Prisma.JsonObject,
      ...visuals,
    },
    select: { id: true },
  });
} catch (error) { /* ignore */ }