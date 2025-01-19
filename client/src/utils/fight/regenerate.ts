/* eslint-disable no-void */
import { RegenerationStep } from '@labrute/core';
import { Application } from 'pixi.js';

import updateHp from './updateHp';
import { displayHeal } from './utils/displayHeal';
import findFighter, { AnimationFighter } from './utils/findFighter';

export const regenerate = (
  app: Application,
  fighters: AnimationFighter[],
  step: RegenerationStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  displayHeal(app, fighter, step.h, speed);

  // Heal brute
  updateHp(fighters, fighter, step.h, speed, isClanWar);
};
