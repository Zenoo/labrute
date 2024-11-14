/* eslint-disable no-void */
import { FIGHTER_WIDTH, HasteStep, randomBetween } from '@labrute/core';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import displayDamage from './utils/displayDamage';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';
import stagger from './stagger';
import updateHp from './updateHp';
import { untrap } from './untrap';

export const haste = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HasteStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }
  // Play skill SFX
  void sound.play('sfx', { sprite: 'haste' });

  const windUpEnded = brute.animation.waitForEvent('strengthen:end');

  // Set animation to `strenghten`
  brute.animation.setAnimation('strengthen');

  await windUpEnded;

  // Set animation to `run`
  brute.animation.setAnimation('run');

  // Move brute to target position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x: target.animation.container.x,
    y: target.animation.container.y,
  });

  // Get target hit animation (random for male brute)
  const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
    ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
    : 'hit';

  const animationEnded = target.animation.waitForEvent(`${animation}:end`);

  // Untrap target
  untrap(app, target);

  // Set target animation to the correct hit animation
  target.animation.setAnimation(animation);

  displayDamage(app, target, step.d, speed);

  // Update HP bar
  updateHp(fighters, target, -step.d, speed, isClanWar);

  // Stagger
  stagger(target, speed).catch(console.error);

  animationEnded.then(() => {
    // Set target animation to normal
    target.animation.setAnimation(target.stunned ? 'death' : 'idle');
  }).catch(console.error);

  // Get position 200px away from target
  const targetX = target.animation.container.x + (target.team === 'L' ? -200 : 200);
  const targetY = target.animation.container.y;

  // Move brute to target position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.10 / speed.current,
    ease: Easing.linear,
  }, {
    x: targetX,
    y: targetY,
  });

  const { x, y } = getRandomPosition(fighters, brute.team);

  // Teleport brute outside of the screen
  brute.animation.container.x = brute.team === 'L'
    ? -FIGHTER_WIDTH.brute * 2
    : app.screen.width + (FIGHTER_WIDTH.brute * 2);
  brute.animation.container.y = y;

  // Move brute to position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear,
  }, {
    x,
    y,
  });

  // Set brute animation to normal
  brute.animation.setAnimation('idle');
};
