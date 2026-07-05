
import { LeaveStep } from '@labrute/core';

import { AnimationFighter, findFighter } from './utils/findFighter';
import { tween } from './utils/tween';

export const leave = async (
  fighters: AnimationFighter[],
  step: LeaveStep,
  speed: React.RefObject<number>,
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
  const moveFighter = tween(fighter.animation.container, {
    duration: 0.5 / speed.current,
    ease: 'none',
    x: fighter.team === 'L' ? -100 : 600
  }).then(() => {
    // Then remove fighter
    fighter.animation.destroy();
  });

  // Await if it is not a pet leaving
  if (fighter.type !== 'pet') await moveFighter;
};
