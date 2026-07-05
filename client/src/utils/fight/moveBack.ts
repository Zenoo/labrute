
import { MoveBackStep } from '@labrute/core';

import { getRandomPosition } from './utils/fightPositions';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { tween } from './utils/tween';

export const moveBack = async (
  fighters: AnimationFighter[],
  step: MoveBackStep,
  speed: React.RefObject<number>,
  targetPosition?: { x: number; y: number },
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Get positions
  const { x, y } = targetPosition ?? getRandomPosition(fighters, fighter);

  const travelDistance = Math.hypot(
    x - fighter.animation.container.x,
    y - fighter.animation.container.y,
  );

  // No-op movement: skip animation/tween overhead.
  if (travelDistance < 1) {
    return;
  }

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Is fighter inversion needed ?
  const invertFighter = fighter.team === 'L'
    ? fighter.animation.container.x > x
    : fighter.animation.container.x < x;

  // Invert fighter if needed
  if (invertFighter) fighter.animation.container.scale.x *= -1;

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
