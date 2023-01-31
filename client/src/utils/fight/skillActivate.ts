import { SkillActivateStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';

const skillActivate = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillActivateStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `strenghten`
  changeAnimation(app, brute, 'strengthen', speed);

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `idle`
      changeAnimation(app, brute, 'idle', speed);

      resolve(null);
    };
  });

  // TODO: different visual for every skill activation
};

export default skillActivate;