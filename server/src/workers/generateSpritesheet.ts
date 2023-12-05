import { BruteWithBodyColors, SPRITESHEET_VERSION, getBruteVisuals } from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { workerData } from 'worker_threads';
import createSpritesheet from '../utils/createSpritesheet.js';
import formatSpritesheet from '../utils/formatSpritesheet.js';
import startJob from './startJob.js';

const {
  payload: brute,
  jobId,
} = workerData as {
  payload: BruteWithBodyColors;
  jobId: number;
};
const prisma = new PrismaClient();

try {
  const visuals = getBruteVisuals(brute);

  // Check if spritesheet already exists
  const count = await prisma.bruteSpritesheet.count({
    where: {
      ...visuals,
      version: SPRITESHEET_VERSION,
    },
  });

  if (count > 0) {
    throw new Error(`Spritesheet already exists for ${brute.name}`);
  }

  // Create spritesheet
  const spritesheet = await createSpritesheet(visuals);

  // Delete outdated spritesheet
  await prisma.bruteSpritesheet.deleteMany({
    where: {
      ...visuals,
      version: { not: SPRITESHEET_VERSION },
    },
  });

  await prisma.bruteSpritesheet.create({
    data: {
      image: spritesheet.image,
      json: formatSpritesheet(spritesheet, visuals) as unknown as Prisma.JsonObject,
      ...visuals,
    },
    select: { id: true },
  });
} catch (error) {
  console.error(error);
} finally {
  // Delete job
  await prisma.workerJob.delete({ where: { id: jobId } });

  // Start the next job
  await startJob(prisma);
}