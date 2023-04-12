import { BreakStep } from '@labrute/core';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
import { updateActiveWeapon } from './updateWeapons';

const breakShield = (
  app: Application,
  fighters: AnimationFighter[],
  step: BreakStep,
) => {
  const brute = findFighter(fighters, step.opponent);
  if (!brute) {
    throw new Error('Fighter not found');
  }

  brute.shield = false;

  // Update active weapon
  updateActiveWeapon(app, brute, brute.activeWeapon ? brute.activeWeapon.name : null);
};

export default breakShield;