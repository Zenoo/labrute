/* eslint-disable no-void */
import { MoveBackStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import { getRandomPosition } from './fightPositions';
import findFighter, { AnimationFighter } from './findFighter';

const moveBack = async (
  app: Application,
  fighters: AnimationFighter[],
  step: MoveBackStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `run`
  changeAnimation(app, fighter, 'run', speed);

  // Invert fighter
  fighter.currentAnimation.scale.x *= -1;

  // Get positions
  const { x, y } = getRandomPosition(fighters, fighter.team);

  // Move fighter to the position
  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.5 / speed.current,
    ease: Easing.linear
  }, { x, y });

  // Invert fighter
  fighter.currentAnimation.scale.x *= -1;

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);
};

export default moveBack;