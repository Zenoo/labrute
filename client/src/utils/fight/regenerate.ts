import { RegenerationStep } from '@labrute/core';
import { Application } from 'pixi.js';

import { updateHp } from './updateHp';
import { displayHeal } from './utils/displayHeal';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { fightDelay } from './utils/tween';

export const regenerate = async (
  app: Application,
  fighters: AnimationFighter[],
  step: RegenerationStep,
  speed: React.RefObject<number>,
  isClanWar: boolean,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  displayHeal(app, fighter, step.h, speed);

  // Heal brute
  updateHp(fighters, fighter, step.h, speed, isClanWar);

  // Delay
  if (step.d) {
    await fightDelay(0.5 / speed.current);
  }
};
