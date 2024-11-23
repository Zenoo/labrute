/* eslint-disable no-void */
import { LeaveStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './utils/findFighter';

const leave = async (
  app: Application,
  fighters: AnimationFighter[],
  step: LeaveStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Remove fighter from fighters
  fighters.splice(fighters.indexOf(fighter), 1);

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Invert fighter
  fighter.animation.container.scale.x *= -1;

  // Move fighter to the position
  const moveFighter = Tweener.add({
    target: fighter.animation.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear
  }, { x: fighter.team === 'L' ? -100 : 600 })
    .then(() => {
      // Then remove fighter
      fighter.animation.destroy();
    });

  // Await if it is not a pet leaving
  if (fighter.type !== 'pet') await moveFighter;
};

export default leave;
