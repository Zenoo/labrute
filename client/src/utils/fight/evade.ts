/* eslint-disable no-void */
import { EvadeStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';
import { sound } from '@pixi/sound';

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

  // Play evade SFX
  void sound.play('hit/evade', {
    speed: speed.current,
  });

  // Add vertical tween
  await Tweener.add({
    target: fighter.container,
    duration: 0.25 / speed.current,
    ease: Easing.easeTo,
  }, { y: fighter.container.y - fighter.currentAnimation.height / 2 });

  await Tweener.add({
    target: fighter.container,
    duration: 0.25 / speed.current,
    ease: Easing.easeFrom,
  }, { y: fighter.container.y + fighter.currentAnimation.height / 2 });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);
};

export default evade;