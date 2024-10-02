/* eslint-disable no-void */
import { FIGHTER_HEIGHT, randomBetween, SaboteurStep, WeaponById } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';

import { BevelFilter } from '@pixi/filter-bevel';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';
import stagger from './stagger';

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

  // Create weapon sprite
  const weapon = new Sprite(spritesheet.textures[`${WeaponById[step.w]}.png`]);
  weapon.filters = [new BevelFilter()];
  weapon.zIndex = 1;

  // Anchor to left center
  weapon.anchor.set(0, 0.5);

  // Set position
  weapon.position.set(
    brute.animation.container.x,
    brute.animation.container.y - FIGHTER_HEIGHT.brute * 0.5,
  );

  // Set angle
  weapon.angle = brute.team === 'L' ? -110 : 70;

  // Add to stage
  app.stage.addChild(weapon);

  // Animate the fall
  Tweener.add({
    target: weapon,
    duration: 0.3 / speed.current,
    ease: Easing.linear,
  }, {
    x: brute.team === 'L'
      ? weapon.x - 20
      : weapon.x + 20,
    y: weapon.y + 50,
    angle: brute.team === 'L' ? -180 : 0,
  }).then(() => {
    // Wait a bit
    setTimeout(() => {
      // Decrease opacity
      Tweener.add({
        target: weapon,
        duration: 0.5 / speed.current,
        ease: Easing.linear,
      }, {
        alpha: 0,
      }).then(() => {
        // Remove from stage
        app.stage.removeChild(weapon);
      }).catch(console.error);
    }, 500 / speed.current);
  }).catch(console.error);

  // Wait for stagger
  await staggerVfx;
};

export default saboteur;
