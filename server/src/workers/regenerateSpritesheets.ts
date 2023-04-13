/* eslint-disable no-await-in-loop */
import { BruteWithBodyColors } from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { workerData } from 'worker_threads';
import createSpritesheet from '../utils/createSpritesheet.js';
import DiscordUtils from '../utils/DiscordUtils.js';
import formatSpritesheet from '../utils/formatSpritesheet.js';

const brutes = workerData as BruteWithBodyColors[];
const prisma = new PrismaClient();

await DiscordUtils.sendLog('Regenerating all spritesheets...');
await DiscordUtils.sendLog(`Found ${brutes.length} brutes`);

for (let i = 0; i < brutes.length; i++) {
  const brute = brutes[i];

  // Create spritesheet
  const spritesheet = await createSpritesheet(brute);

  await prisma.bruteSpritesheet.upsert({
    where: { bruteId: brute.id },
    create: {
      image: spritesheet.image,
      json: formatSpritesheet(spritesheet, brute) as unknown as Prisma.JsonObject,
      brute: { connect: { id: brute.id } },
    },
    update: {
      image: spritesheet.image,
      json: formatSpritesheet(spritesheet, brute) as unknown as Prisma.JsonObject,
    },
  });

  await DiscordUtils.sendLog(`Regenerated spritesheet for ${brute.name} (${i + 1}/${brutes.length})`);
}