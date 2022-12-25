import { EvadeStep } from '@eternaltwin/labrute-core/types';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';
import findFighter, { AnimationFighter } from './findFighter.js';

const evade = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EvadeStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `evade`
  changeAnimation(app, fighter, 'evade');

  // Add vertical tween
  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.25,
    ease: Easing.easeTo,
  }, { y: fighter.currentAnimation.y - fighter.currentAnimation.height / 2 });

  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.25,
    ease: Easing.easeFrom,
  }, { y: fighter.currentAnimation.y + fighter.currentAnimation.height / 2 });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle');
};

export default evade;