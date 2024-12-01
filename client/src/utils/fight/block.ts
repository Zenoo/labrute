/* eslint-disable no-void */
import { BlockStep, randomBetween } from '@labrute/core';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { knockBack } from './utils/knockBack';
import { playDustEffect } from './utils/playVFX';

const block = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BlockStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }

  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  const animationsEnded = [fighter.animation.waitForEvent('block:end')];

  // Set animation to `block` (start at frame 3)
  fighter.animation.setAnimation('block', 3);

  // Slight knockBack
  animationsEnded.push(knockBack(fighter, speed, 9, 0.25));

  // Dust cloud from the knockBack slowdown
  playDustEffect(app, fighter, speed, 14);

  // Play block SFX
  void sound.play('sfx', { sprite: `block${randomBetween(1, 4)}` });

  // Wait for animation to complete
  await Promise.all(animationsEnded);

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default block;
