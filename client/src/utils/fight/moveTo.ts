
import { MoveStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { repositionFighters } from './utils/repositionFighters';
import { getHitDistance } from './utils/getHitDistance';
import { tween } from './utils/tween';

export const moveTo = async (
  fighters: AnimationFighter[],
  step: MoveStep,
  speed: React.RefObject<number>,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Filter the only moveTo case outside of neutral (melee repositioning)
  if (!step.r) {
    // Reposition mispositionned other fighters before moveTo
    await repositionFighters(fighters, speed, fighter.id);
  }

  const distance = getHitDistance(fighter, target, !!step.c, !!step.s);

  // Get travel position
  const targetX = target.team === 'R'
    ? target.animation.container.x - distance
    : target.animation.container.x + distance;
  const targetY = target.animation.container.y;

  // Get travel distance
  const travelDistance = Math.hypot(
    targetX - fighter.animation.container.x,
    targetY - fighter.animation.container.y,
  );

  if (travelDistance < 1) {
    return;
  }

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Play running SFX
  if (fighter.type === 'pet') {
    // Remove numbers from pet name
    void sound.play('sfx', { sprite: `${fighter.name.replace(/\d/g, '')}` });
  }

  // Travel duration depends on distance
  const duration = Math.max(0.16, travelDistance / 430);

  // Move fighter to the position
  await tween(fighter.animation.container, {
    duration: duration / speed.current,
    ease: 'none',
    x: targetX,
    y: targetY,
  });

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};
