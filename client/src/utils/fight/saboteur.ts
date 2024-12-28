/* eslint-disable no-void */
import { randomBetween, SaboteurStep } from '@labrute/core';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './utils/findFighter';
import stagger from './stagger';
import itemDrop from './itemDrop';

const saboteur = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SaboteurStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/thrown-weapons.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const animation = brute.gender === 'male'
    ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}` as const
    : 'hit' as const;

  brute.animation.waitForEvent(`${animation}:end`).then(() => {
    // Set animation to `idle`
    brute.animation.setAnimation('idle');
  }).catch(console.error);

  // Set animation to `hit`
  brute.animation.setAnimation(animation);

  // Play saboteur SFX
  void sound.play('sfx', { sprite: 'saboteur' });

  // Stagger animation
  const staggerVfx = stagger(brute, speed);

  // Update active weapon
  brute.animation.weapon = null;

  // Weapon position
  const initialPosition = {
    x: brute.animation.container.x,
    y: brute.animation.container.y - brute.animation.baseHeight * 0.6,
  };

  // Weapon velocity
  const initialVelocity = {
    x: 2,
    y: -3,
  };

  // Drop saboteur weapon
  itemDrop({
    app,
    fighter: brute,
    speed,
    item: step.w,
    initialPosition,
    initialVelocity,
    saboteur: true
  });

  // Wait for stagger
  await staggerVfx;
};

export default saboteur;
