import { MoveBackStep } from '@eternaltwin/labrute-core/types';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import { getRandomPosition } from './fightPositions.js';
import findFighter, { AnimationFighter } from './findFighter.js';

const moveBack = async (
  app: Application,
  fighters: AnimationFighter[],
  step: MoveBackStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `run`
  changeAnimation(app, fighter, 'run');

  // Invert fighter
  fighter.currentAnimation.scale.x *= -1;

  // Get positions
  const { x, y } = getRandomPosition(fighters, fighter.team);

  // Move fighter to the position
  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.5,
    ease: Easing.linear
  }, { x, y });

  // Invert fighter
  fighter.currentAnimation.scale.x *= -1;

  // Set animation to `iddle`
  changeAnimation(app, fighter, 'iddle');
};

export default moveBack;