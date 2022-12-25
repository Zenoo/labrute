import { TrashStep } from '@eternaltwin/labrute-core/types';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import updateWeapons from './updateWeapons.js';

const trash = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrashStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `trash`
  changeAnimation(app, brute, 'trash');
  (brute.currentAnimation as AnimatedSprite).animationSpeed = 0.5;

  // Remove weapon from brute
  updateWeapons(app, brute, step.name, 'remove');

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `idle`
      changeAnimation(app, brute, 'idle');

      resolve(null);
    };
  });
};

export default trash;