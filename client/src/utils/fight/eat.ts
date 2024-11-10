/* eslint-disable no-void */
import { EatStep, randomBetween } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import updateHp from './updateHp';
import { displayHeal } from './utils/displayHeal';
import findFighter, { AnimationFighter } from './utils/findFighter';

const eat = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EatStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const pet = findFighter(fighters, step.t);
  if (!pet) {
    throw new Error('Pet not found');
  }

  const animationEnded = brute.animation.waitForEvent('eat:end');

  // Set brute animation to `eat`
  brute.animation.setAnimation('eat');

  // Resize pet to 0 in 0.5s
  Tweener.add({
    target: pet.animation.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear
  }, {
    height: 0,
    width: 0,
  }).catch(console.error);
  // Play eat SFX
  void sound.play('sfx', { sprite: `tamer${randomBetween(1, 2)}` });

  displayHeal(app, brute, step.h, speed);

  // Wait for animation to complete
  await animationEnded;

  // Heal brute
  updateHp(fighters, brute, step.h, speed, isClanWar);
};

export default eat;
