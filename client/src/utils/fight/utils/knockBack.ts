import { AnimationFighter } from './findFighter';
import type { HitStep } from '@labrute/core';

export const isOwnSideHit = (fighter: AnimationFighter, target: AnimationFighter) => {
  const side = fighter.animation.container.x > 250 ? 'R' : 'L';
  return fighter.team === side && (target.animation.container.x > 250 ? 'R' : 'L') === side;
};

export const getHitKnockBack = (
  fighter: AnimationFighter, target: AnimationFighter, step: HitStep,
) => {
  let distance = 0;
  if (!isOwnSideHit(fighter, target)) {
    distance = step.d > target.maxHp * 0.2
      ? 16 * (1 + (step.d - target.maxHp * 0.2) / (target.maxHp * 0.8))
      : 16 * (step.d / (target.maxHp * 0.2));
    if (distance < 1) distance = 2;
    distance = Math.min(32, distance);
  } else if (step.s) {
    distance = 65;
  }
  return distance + (step.c ? 12 : 0);
};

// Sign a knockback relative to a fighter and clamp it so it stays in the stage
export const getRealKnockBack = (
  fighter: AnimationFighter,
  unsignedKnockBack: number,
): number => {
  const edgeScreenMargin = fighter.animation.baseWidth / 2 + 2;
  let realKnockBack = unsignedKnockBack;
  if (fighter.team === 'L') {
    realKnockBack = Math.min(fighter.animation.container.x - edgeScreenMargin, realKnockBack);
    realKnockBack = Math.max(0, realKnockBack);
    realKnockBack = -realKnockBack;
  } else {
    realKnockBack = Math.min(500 - fighter.animation.container.x - edgeScreenMargin, realKnockBack);
    realKnockBack = Math.max(0, realKnockBack);
  }
  return realKnockBack;
};
