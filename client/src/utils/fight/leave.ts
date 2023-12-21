/* eslint-disable no-void */
import { LeaveStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';

const leave = async (
  app: Application,
  fighters: AnimationFighter[],
  step: LeaveStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Invert fighter
  fighter.animation.container.scale.x *= -1;

  // Move fighter to the position
  await Tweener.add({
    target: fighter.animation.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear
  }, { x: fighter.animation.team === 'left' ? -100 : 600 });

  // Remove fighter
  fighter.animation.destroy();
  fighters.splice(fighters.indexOf(fighter), 1);
};

export default leave;