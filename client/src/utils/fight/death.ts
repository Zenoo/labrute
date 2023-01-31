import { DeathStep } from '@labrute/core';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';

const death = (
  app: Application,
  fighters: AnimationFighter[],
  step: DeathStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `death`
  changeAnimation(app, fighter, 'death', speed);
};

export default death;