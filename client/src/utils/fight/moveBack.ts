
import { MoveBackStep } from '@labrute/core';

import { getRandomPosition } from './utils/fightPositions';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { tween } from './utils/tween';

export const moveBack = async (
  fighters: AnimationFighter[],
  step: MoveBackStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Get positions
  const { x, y } = getRandomPosition(fighters, fighter);

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Is fighter inversion needed ?
  const invertFighter = fighter.team === 'L'
    ? fighter.animation.container.x > x
    : fighter.animation.container.x < x;

  // Invert fighter if needed
  if (invertFighter) fighter.animation.container.scale.x *= -1;

  const travelDistance = Math.sqrt(
    (x - fighter.animation.container.x) ** 2
    + (y - fighter.animation.container.y) ** 2
  );

  // Travel duration depends on distance
  const duration = Math.max(0.15, travelDistance / 480);

  // Move fighter to the position
  await tween(fighter.animation.container, {
    duration: duration / speed.current,
    ease: 'none',
    x,
    y
  });

  // Invert fighter if needed
  if (invertFighter) fighter.animation.container.scale.x *= -1;

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};
