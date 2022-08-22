import { EndStep } from '@eternaltwin/labrute-core/types';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import { changeAnimation } from './setupFight.js';

const end = (
  app: Application,
  fighters: AnimationFighter[],
  step: EndStep,
) => {
  const winner = findFighter(fighters, step.winner);
  if (!winner) {
    throw new Error('Fighter not found');
  }

  // Set animation to `win`
  changeAnimation(app, winner, 'win');
};

export default end;