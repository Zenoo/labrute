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

  // Get positions
  const { x, y } = getRandomPosition(fighters, fighter);

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Is fighter inversion needed ?
  const invertFighter = fighter.team === 'L'
    ? fighter.animation.container.x > x
    : fighter.animation.container.x < x;

  // Invert fighter if needed
  if (invertFighter) fighter.animation.container.scale.x *= -1;

  const travelDistance = Math.sqrt(
    (x - fighter.animation.container.x) ** 2
    + (y - fighter.animation.container.y) ** 2
  );

  // Travel duration depends on distance
  const duration = Math.max(0.15, travelDistance / 480);

  // Move fighter to the position
  await Tweener.add({
    target: fighter.animation.container,
    duration: duration / speed.current,
    ease: Easing.linear
  }, { x, y });

  // Invert fighter if needed
  if (invertFighter) fighter.animation.container.scale.x *= -1;

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default moveBack;
