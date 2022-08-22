import { HealStep } from '@eternaltwin/labrute-core/types';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import updateHp from './updateHp.js';

const heal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HealStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `drink`
  changeAnimation(app, brute, 'drink');

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Heal brute
  updateHp(brute, step.amount);
};

export default heal;