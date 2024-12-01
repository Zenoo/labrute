/* eslint-disable no-void */
import { EvadeStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { getRealKnockBack } from './utils/knockBack';
import { tweenShadow } from './utils/updateShadow';

export const jumpBack = async (
  fighter: AnimationFighter,
  speed: React.MutableRefObject<number>,
  distance: number = 30,
  duration: number = 0.5,
) => {
  // Set animation to `evade`
  fighter.animation.setAnimation('evade');
  // Play evade SFX
  void sound.play('sfx', { sprite: 'evade' });
  // Start airborn phase
  fighter.animation.setAirborn(true);

  // Sign the X backward movement and clamp it
  const setBack = getRealKnockBack(fighter, distance);

  // Store initial X position
  const initialX = fighter.animation.container.x;
  const jumpHeight = Math.min(80, fighter.animation.baseHeight * 0.5);

  const upAnimations = [];

  // Add horizontal tween
  upAnimations.push(Tweener.add({
    target: fighter.animation.container,
    duration: (duration * 0.5) / speed.current,
    ease: Easing.linear,
  }, { x: initialX + setBack * 0.5 }));

  // Add vertical tween
  upAnimations.push(Tweener.add({
    target: fighter.animation.container,
    duration: (duration * 0.5) / speed.current,
    ease: Easing.easeTo,
  }, { y: fighter.animation.container.y - jumpHeight }));

  // Add a tweener for the shadow
  upAnimations.push(tweenShadow({
    fighter,
    speed,
    duration: duration * 0.5,
    ease: Easing.easeTo,
    endAltitude: jumpHeight,
  }));

  await Promise.all(upAnimations);

  const downAnimations = [];

  // Add horizontal tween
  downAnimations.push(Tweener.add({
    target: fighter.animation.container,
    duration: (duration * 0.5) / speed.current,
    ease: Easing.linear,
  }, { x: initialX + setBack }));

  // Add vertical tween
  downAnimations.push(Tweener.add({
    target: fighter.animation.container,
    duration: (duration * 0.5) / speed.current,
    ease: Easing.easeFrom,
  }, { y: fighter.animation.container.y + jumpHeight }));

  // Add a tweener for the shadow
  downAnimations.push(tweenShadow({
    fighter,
    speed,
    duration: duration * 0.5,
    ease: Easing.easeFrom,
    endAltitude: 0,
  }));

  await Promise.all(downAnimations);

  // End airborn phase
  fighter.animation.setAirborn(false);

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

const evade = async (
  fighters: AnimationFighter[],
  step: EvadeStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }
  // Jump back
  await jumpBack(fighter, speed);
};

export default evade;
