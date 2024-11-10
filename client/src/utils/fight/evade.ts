/* eslint-disable no-void */
import { EvadeStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';

const evade = async (
  fighters: AnimationFighter[],
  step: EvadeStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `evade`
  fighter.animation.setAnimation('evade');
  // Play evade SFX
  void sound.play('sfx', { sprite: 'evade' });

  // Add vertical tween
  await Tweener.add({
    target: fighter.animation.container,
    duration: 0.25 / speed.current,
    ease: Easing.easeTo,
  }, { y: fighter.animation.container.y - fighter.animation.container.height / 2 });

  await Tweener.add({
    target: fighter.animation.container,
    duration: 0.25 / speed.current,
    ease: Easing.easeFrom,
  }, { y: fighter.animation.container.y + fighter.animation.container.height / 2 });

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default evade;
