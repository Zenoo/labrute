/* eslint-disable no-void */
import { FIGHTER_WIDTH, MoveStep, weapons } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import findFighter, { AnimationFighter } from './utils/findFighter';
import getFighterType from './utils/getFighterType';
import repositionFighters from './utils/repositionFighters';

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
    // Reposition mispositionned fighters before moveTo
    await repositionFighters(app, fighters, speed);
  }

  // Set animation to `run`
  fighter.animation.setAnimation('run');
  // Play running SFX
  if (fighter.type === 'pet') {
    // Remove numbers from pet name
    void sound.play('sfx', { sprite: `${fighter.name.replace(/\d/g, '')}` });
  }

  const targetX = target.animation.container.x;
  let modifier = 0;

  // Same space
  if (step.s) {
    modifier = 20;
  }

  // Weapon reach
  if (!step.s) {
    // Adjust for fighter width
    let width = FIGHTER_WIDTH[getFighterType(fighter)];
    if (fighter.type === 'boss') {
      width *= 1.5;
    }
    modifier += width;

    let reach = 0;

    // Countered, take opponent weapon reach into account
    if (step.c) {
      reach = weapons.find((w) => w.name === target.animation.weapon)?.reach || 0;
    } else {
      // Take fighter weapon reach into account
      reach = weapons.find((w) => w.name === fighter.animation.weapon)?.reach || 0;
    }

    modifier += reach * 16;
  }

  // Smaller duration if target were already close
  const duration = Math.abs(targetX - fighter.animation.container.x) < 150 ? 0.2 : 0.5;

  // Move fighter to the position
  await Tweener.add({
    target: fighter.animation.container,
    duration: duration / speed.current,
    ease: Easing.linear
  }, {
    x: target.team === 'R'
      ? targetX - modifier
      : targetX + modifier,
    y: target.animation.container.y,
  });

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default moveTo;
