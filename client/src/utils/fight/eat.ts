import { EatStep } from '@eternaltwin/labrute-core/types';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import updateHp from './updateHp.js';

const eat = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EatStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `eat`
  changeAnimation(app, brute, 'eat');

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Heal brute
  updateHp(brute, step.heal);
};

export default eat;