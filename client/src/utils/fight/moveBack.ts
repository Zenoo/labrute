/* eslint-disable no-void */
import { MoveBackStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';

import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';

const moveBack = async (
  app: Application,
  fighters: AnimationFighter[],
  step: MoveBackStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Invert fighter
  fighter.animation.container.scale.x *= -1;

  // Get positions
  const { x, y } = getRandomPosition(fighters, fighter.animation.team);

  // Move fighter to the position
  await Tweener.add({
    target: fighter.animation.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear
  }, { x, y });

  // Invert fighter
  fighter.animation.container.scale.x *= -1;

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default moveBack;
