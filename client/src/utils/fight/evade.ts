/* eslint-disable no-void */
import { EvadeStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { getRealKnockBack } from './utils/knockBack';

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
  const jumpHeight = Math.min(100, fighter.animation.baseHeight * 0.5);

  // Add vertical tween
  await Tweener.add({
    target: fighter.animation.container,
    duration: (duration * 0.5) / speed.current,
    ease: Easing.easeTo,
    onUpdate(progress: number) {
      // Update fighter shadow
      fighter.animation.updateShadow();
      // Move linearly on x axis
      // eslint-disable-next-line no-param-reassign
      fighter.animation.container.x = initialX + setBack * 0.5 * progress;
    },
  }, { y: fighter.animation.container.y - jumpHeight });

  await Tweener.add({
    target: fighter.animation.container,
    duration: (duration * 0.5) / speed.current,
    ease: Easing.easeFrom,
    onUpdate(progress: number) {
      // Update fighter shadow
      fighter.animation.updateShadow();
      // Move linearly on x axis
      // eslint-disable-next-line no-param-reassign
      fighter.animation.container.x = initialX + setBack * (0.5 + 0.5 * progress);
    },
  }, { y: fighter.animation.container.y + jumpHeight });

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
