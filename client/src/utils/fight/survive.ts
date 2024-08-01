import { SurviveStep } from '@labrute/core';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './utils/findFighter';
import updateHp from './updateHp';
import { Fight } from '@labrute/prisma';

const survive = (
  app: Application,
  fight: Fight,
  fighters: AnimationFighter[],
  step: SurviveStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Ignore if clan war fight
  if (fight.clanWarId) {
    return;
  }

  // Set brute HP to 1
  updateHp(fighters, brute, 1, speed, true);
};

export default survive;
