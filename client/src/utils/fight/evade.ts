import { EvadeStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';

const evade = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EvadeStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `evade`
  changeAnimation(app, fighter, 'evade', speed);

  // Add vertical tween
  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.25 / speed.current,
    ease: Easing.easeTo,
  }, { y: fighter.currentAnimation.y - fighter.currentAnimation.height / 2 });

  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.25 / speed.current,
    ease: Easing.easeFrom,
  }, { y: fighter.currentAnimation.y + fighter.currentAnimation.height / 2 });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);
};

export default evade;