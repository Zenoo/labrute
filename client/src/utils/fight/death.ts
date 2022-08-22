import { DeathStep } from '@eternaltwin/labrute-core/types';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';

const death = (
  app: Application,
  fighters: AnimationFighter[],
  step: DeathStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `death`
  changeAnimation(app, fighter, 'death');
};

export default death;