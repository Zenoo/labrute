/* eslint-disable no-void */
import { MoveStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import findFighter, { AnimationFighter } from './utils/findFighter';
import repositionFighters from './utils/repositionFighters';
import getHitDistance from './utils/getHitDistance';

const moveTo = async (
  app: Application,
  fighters: AnimationFighter[],
  step: MoveStep,
  speed: React.MutableRefObject<number>,
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
    await repositionFighters(app, fighters.filter((f) => f.id !== fighter.id), speed);
  }

  // Set animation to `run`
  fighter.animation.setAnimation('run');

  // Play running SFX
  if (fighter.type === 'pet') {
    // Remove numbers from pet name
    void sound.play('sfx', { sprite: `${fighter.name.replace(/\d/g, '')}` });
  }

  const distance = getHitDistance(fighter, target, !!step.c, !!step.s);

  // Get travel position
  const targetX = target.team === 'R'
    ? target.animation.container.x - distance
    : target.animation.container.x + distance;
  const targetY = target.animation.container.y;

  // Get travel distance
  const travelDistance = Math.sqrt(
    (targetX - fighter.animation.container.x) ** 2
    + (targetY - fighter.animation.container.y) ** 2
  );

  // Travel duration depends on distance
  const duration = Math.max(0.16, travelDistance / 430);

  // Move fighter to the position
  await Tweener.add({
    target: fighter.animation.container,
    duration: duration / speed.current,
    ease: Easing.linear
  }, {
    x: targetX,
    y: targetY,
  });

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default moveTo;
