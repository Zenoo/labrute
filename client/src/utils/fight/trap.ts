import { TrapStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';

const trap = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrapStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Set fighter animation to `launch`
  changeAnimation(app, brute, 'launch');

  // Wait 500ms
  await new Promise((resolve) => {
    setTimeout(() => {
      // Set fighter animation to `idle`
      changeAnimation(app, brute, 'idle');

      // Set target animation to `trap`
      changeAnimation(app, target, 'trapped-start');

      // Wait for animation to complete
      (target.currentAnimation as AnimatedSprite).onComplete = () => {
        // Set target animation to `trapped-end`
        changeAnimation(app, target, 'trapped-loop');

        resolve(null);
      };
    }, 500);
  });
};

export default trap;