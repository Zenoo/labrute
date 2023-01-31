import { BlockStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';

const block = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BlockStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `block`
  changeAnimation(app, fighter, 'block', speed);

  // Wait for animation to complete
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);
};

export default block;