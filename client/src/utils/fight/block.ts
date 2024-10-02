/* eslint-disable no-void */
import { BlockStep, randomBetween } from '@labrute/core';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './utils/findFighter';

const block = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BlockStep,
) => {
  if (!app.loader) {
    return;
  }
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  const animationEnded = fighter.animation.waitForEvent('block:end');

  // Set animation to `block` (start at frame 3)
  fighter.animation.setAnimation('block', 3);

  // Play block SFX
  void sound.play('sfx', { sprite: `block${randomBetween(1, 4)}` });

  // Wait for animation to complete
  await animationEnded;

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default block;
