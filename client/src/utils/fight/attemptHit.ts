import weapons from '@eternaltwin/labrute-core/brute/weapons';
import { AttemptHitStep } from '@eternaltwin/labrute-core/types';

import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';
import findFighter, { AnimationFighter } from './findFighter.js';

const attemptHit = (
  app: Application,
  fighters: AnimationFighter[],
  step: AttemptHitStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Custom animation for brutes
  const animation = step.fighter.type === 'brute'
    ? weapons.find((w) => w.name === step.weapon)?.animation || 'fist'
    : 'attack';

  // Set animation to the correct hitting animation
  changeAnimation(app, fighter, animation);
};

export default attemptHit;