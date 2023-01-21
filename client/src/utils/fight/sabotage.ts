import { SabotageStep } from '@labrute/core';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
import updateWeapons from './updateWeapons';

const sabotage = (
  app: Application,
  fighters: AnimationFighter[],
  step: SabotageStep,
) => {
  const opponent = findFighter(fighters, step.opponent);
  if (!opponent) {
    throw new Error('Opponent not found');
  }

  // Update weapon list
  updateWeapons(app, opponent, step.weapon, 'remove');
};

export default sabotage;