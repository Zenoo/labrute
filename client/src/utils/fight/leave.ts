import { LeaveStep } from '@eternaltwin/labrute-core/types';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';

const leave = async (
  app: Application,
  fighters: AnimationFighter[],
  step: LeaveStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `run`
  changeAnimation(app, fighter, 'run');

  // Invert fighter
  fighter.currentAnimation.scale.x *= -1;

  // Move fighter to the position
  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.5,
    ease: Easing.linear
  }, { x: fighter.team === 'left' ? -100 : 600 });

  // Remove fighter
  fighter.currentAnimation.destroy();
  fighters.splice(fighters.indexOf(fighter), 1);
};

export default leave;