import { BlockStep } from '@eternaltwin/labrute-core/types';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';

const block = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BlockStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `block`
  changeAnimation(app, fighter, 'block');

  // Wait for animation to complete
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle');
};

export default block;