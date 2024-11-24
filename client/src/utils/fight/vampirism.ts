/* eslint-disable no-void */
import { FIGHTER_WIDTH, VampirismStep } from '@labrute/core';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { displayHeal } from './utils/displayHeal';
import displayDamage from './utils/displayDamage';
import updateHp from './updateHp';
import { untrap } from './untrap';

export const vampirism = async (
  app: Application,
  fighters: AnimationFighter[],
  step: VampirismStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
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
    x: target.team === 'R'
      ? target.animation.container.x + FIGHTER_WIDTH.brute / 2
      : target.animation.container.x - FIGHTER_WIDTH.brute / 2,
    y: target.animation.container.y - 1,
  });

  // Reverse brute
  brute.animation.container.scale.x *= -1;

  const animationEnded = brute.animation.waitForEvent('steal:end');

  // Set brute animation to `steal`
  brute.animation.setAnimation('steal');
  // Play steal SFX
  void sound.play('sfx', { sprite: 'vampirism' });

  // Untrap target
  untrap(app, target);

  // Set target animation to `stolen`
  if (target.type === 'brute') {
    target.animation.setAnimation('stolen');
  }

  displayHeal(app, brute, step.h, speed);
  displayDamage(app, target, step.d, speed);

  // Update HP bar
  updateHp(fighters, brute, step.h, speed, isClanWar);
  updateHp(fighters, target, -step.d, speed, isClanWar);

  // Wait for animation to finish
  await animationEnded;

  // Restore scale
  brute.animation.container.scale.x *= -1;

  // Set target animation to `idle`
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

  // Set brute animation to `idle`
  brute.animation.setAnimation('idle');
};
