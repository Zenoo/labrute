import { EquipStep } from '@labrute/core';

import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';

const equip = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EquipStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `equip`
  changeAnimation(app, brute, 'equip', speed);
  (brute.currentAnimation as AnimatedSprite).animationSpeed = 0.5;

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `idle`
      changeAnimation(app, brute, 'idle', speed);

      resolve(null);
    };
  });
};

export default equip;