import { DeathStep } from '@eternaltwin/labrute-core/types';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import { changeAnimation } from './setupFight.js';

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