import { SurviveStep } from '@eternaltwin/labrute-core/types';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import updateHp from './updateHp.js';

const survive = (
  app: Application,
  fighters: AnimationFighter[],
  step: SurviveStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set brute HP to 1
  updateHp(brute, 1, true);
};

export default survive;