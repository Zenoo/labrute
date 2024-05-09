import { SurviveStep } from '@labrute/core';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
import updateHp from './updateHp';

const survive = (
  app: Application,
  fighters: AnimationFighter[],
  step: SurviveStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set brute HP to 1
  updateHp(brute, 1, speed, true);
};

export default survive;
