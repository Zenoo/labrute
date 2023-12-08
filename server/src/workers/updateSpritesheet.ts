import { BruteVisuals, SPRITESHEET_VERSION } from '@labrute/core';
import { workerData } from 'worker_threads';
import { GLOBAL, ServerContext } from '../context.js';
import createSpritesheet from '../utils/createSpritesheet.js';
import formatSpritesheet from '../utils/formatSpritesheet.js';
import startJob from './startJob.js';

async function main(cx: ServerContext) {
  const {
    payload: visuals,
    jobId,
  } = workerData as {
    payload: BruteVisuals;
    jobId: number;
  };

  cx.logger.info('updateSpritesheet: start');

  try {
    // Check if spritesheet already exists
    const count = await cx.prisma.bruteSpritesheet.count({
      where: {
        ...visuals,
        version: SPRITESHEET_VERSION,
      },
    });

    if (count > 0) {
      throw new Error('Spritesheet already exists');
    }

    // Create spritesheet
    const spritesheet = await createSpritesheet(visuals);

    // Update spritesheet
    await cx.prisma.bruteSpritesheet.update({
      where: {
        // eslint-disable-next-line max-len
        gender_longHair_lowerRightArm_rightHand_upperRightArm_rightShoulder_rightFoot_lowerRightLeg_upperRightLeg_leftFoot_lowerLeftLeg_pelvis_upperLeftLeg_tummy_torso_head_leftHand_upperLeftArm_lowerLeftArm_leftShoulder_skinColor_skinShade_hairColor_hairShade_primaryColor_primaryShade_secondaryColor_secondaryShade_accentColor_accentShade: visuals,
      },
      data: {
        image: spritesheet.image,
        json: JSON.stringify(formatSpritesheet(spritesheet, visuals)),
        version: SPRITESHEET_VERSION,
      },
      select: { id: true },
    });
  } catch (error) {
    cx.logger.error(error);
  } finally {
    // Delete job
    await cx.prisma.workerJob.delete({ where: { id: jobId } });

    // Start the next job
    await startJob(cx.prisma);
  }

  cx.logger.info('updateSpritesheet: end');
}

/**
 * Initialize the global context, then run `main`
 */
async function mainWrapper() {
  await using context = GLOBAL;
  await main(context);
}

await mainWrapper();
