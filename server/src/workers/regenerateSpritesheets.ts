/* eslint-disable no-await-in-loop */
import { BruteWithBodyColors, getBruteVisuals } from '@labrute/core';
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

  const visuals = getBruteVisuals(brute);

  // Create spritesheet
  const spritesheet = await createSpritesheet(visuals);

  await prisma.bruteSpritesheet.upsert({
    where: {
      // eslint-disable-next-line max-len
      gender_longHair_lowerRightArm_rightHand_upperRightArm_rightShoulder_rightFoot_lowerRightLeg_upperRightLeg_leftFoot_lowerLeftLeg_pelvis_upperLeftLeg_tummy_torso_head_leftHand_upperLeftArm_lowerLeftArm_leftShoulder_skinColor_skinShade_hairColor_hairShade_primaryColor_primaryShade_secondaryColor_secondaryShade_accentColor_accentShade: visuals,
    },
    create: {
      image: spritesheet.image,
      json: formatSpritesheet(spritesheet, brute) as unknown as Prisma.JsonObject,
      ...visuals,
    },
    update: {
      image: spritesheet.image,
      json: formatSpritesheet(spritesheet, brute) as unknown as Prisma.JsonObject,
    },
  });

  await DiscordUtils.sendLog(`Regenerated spritesheet for ${brute.name} (${i + 1}/${brutes.length})`);
}