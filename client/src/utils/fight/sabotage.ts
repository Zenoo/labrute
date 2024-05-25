import { SabotageStep } from '@labrute/core';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
import updateWeapons from './updateWeapons';

const sabotage = (
  app: Application,
  fighters: AnimationFighter[],
  step: SabotageStep,
) => {
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Opponent not found');
  }

  // Update weapon list
  updateWeapons(app, target, step.w, 'remove');
};

export default sabotage;
