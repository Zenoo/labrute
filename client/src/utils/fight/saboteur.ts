/* eslint-disable no-void */
import { randomBetween, SaboteurStep } from '@labrute/core';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './findFighter';
import stagger from './stagger';

const saboteur = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SaboteurStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `hit`
  brute.animation.setAnimation(brute.data?.gender === 'male'
    ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
    : 'hit');

  // Play saboteur SFX
  void sound.play('skills/saboteur', {
    speed: speed.current,
  });

  // Stagger animation
  await stagger(brute.animation.container, brute.animation.team, speed);

  // Update active weapon
  brute.animation.weapon = null;
};

export default saboteur;