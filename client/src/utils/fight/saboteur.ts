import { SaboteurStep } from '@eternaltwin/labrute-core/types';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import stagger from './stagger.js';
import updateWeapons from './updateWeapons.js';

const saboteur = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SaboteurStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `hit`
  changeAnimation(app, brute, 'hit');

  // Stagger animation
  await stagger(brute.currentAnimation as AnimatedSprite, brute.team);

  // Update weapon list
  updateWeapons(app, brute, step.weapon, 'remove');
};

export default saboteur;