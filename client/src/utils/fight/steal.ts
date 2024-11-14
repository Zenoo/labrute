/* eslint-disable no-void */
import { FIGHTER_HEIGHT, StealStep, WeaponById } from '@labrute/core';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';

const steal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: StealStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Move brute to target position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x: target.animation.container.x,
    y: target.animation.container.y - FIGHTER_HEIGHT.brute / 2,
  });

  // Reverse brute
  brute.animation.container.scale.x *= -1;

  // Set brute animation to `steal`
  brute.animation.setAnimation('steal');
  // Play steal SFX
  void sound.play('sfx', { sprite: 'thief' });

  const animationEnded = target.animation.waitForEvent('stolen:end');

  // Set target animation to `stolen`
  target.animation.setAnimation('stolen');

  // Wait for animation to finish
  await animationEnded;

  // Update target current weapon
  target.animation.weapon = null;

  // Update brute weapons
  brute.animation.weapon = WeaponById[step.w];

  // Restore scale
  brute.animation.container.scale.x *= -1;

  // Set target animation to normal
  target.animation.setAnimation(target.stunned ? 'death' : 'idle');

  const { x, y } = getRandomPosition(fighters, brute.team);

  // Move brute to position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x,
    y,
  });

  // Set brute animation to normal
  brute.animation.setAnimation('idle');
};

export default steal;
