import { AttemptHitStep, weapons } from '@labrute/core';

import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';

const attemptHit = (
  app: Application,
  fighters: AnimationFighter[],
  step: AttemptHitStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Custom animation for brutes
  const animation = step.fighter.type === 'brute'
    ? weapons.find((w) => w.name === step.weapon)?.animation || 'fist'
    : 'attack';

  // Set animation to the correct hitting animation
  changeAnimation(app, fighter, animation, speed);

  // Wait for animation to finish
  (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
    // Set animation to `idle`
    changeAnimation(app, fighter, 'idle', speed);
  };
};

export default attemptHit;