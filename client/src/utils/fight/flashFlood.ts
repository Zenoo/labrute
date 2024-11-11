/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, HitStep, WeaponById, randomBetween } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite } from 'pixi.js';

import displayDamage from './utils/displayDamage';
import findFighter, { AnimationFighter } from './utils/findFighter';
import getFighterType from './utils/getFighterType';
import stagger from './stagger';
import updateHp from './updateHp';
import updateWeapons from './updateWeapons';
import { WeaponName } from '@labrute/prisma';
import { untrap } from './untrap';

const flashFlood = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/thrown-weapons.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  const startedWithAWeapon = fighter.animation.weapon !== null;

  // Set animation to `throw`
  fighter.animation.setAnimation('throw');

  const weapon = typeof step.w !== 'undefined' ? WeaponById[step.w] : WeaponName.lance;

  // Update current weapon
  if (!startedWithAWeapon) {
    fighter.animation.weapon = weapon;
  }

  // Create thrown weapon sprite
  const thrownWeapon = new Sprite(spritesheet.textures[`${weapon}.png`]);

  // Anchor to left center
  thrownWeapon.anchor.set(0, 0.5);

  // Get starting position
  const start = {
    x: fighter.team === 'L'
      ? fighter.animation.container.x + FIGHTER_WIDTH.brute
      : fighter.animation.container.x,
    y: fighter.animation.container.y - FIGHTER_HEIGHT.brute * 0.5,
  };

  // Get end position
  const end = {
    x: target.team === 'L'
      ? target.animation.container.x + FIGHTER_WIDTH[getFighterType(target)]
      : target.animation.container.x,
    y: target.animation.container.y - FIGHTER_HEIGHT[getFighterType(target)] * 0.5,
  };

  // Set position
  thrownWeapon.position.set(start.x, start.y);

  // Set rotation (from fighter and target positions)
  thrownWeapon.angle = (Math.atan2(
    end.y - start.y,
    end.x - start.x,
  ) * 180) / Math.PI;

  // Add to stage
  app.stage.addChild(thrownWeapon);

  // Remove weapon from arsenal
  fighter.animation.weapon = null;
  if (!startedWithAWeapon) {
    updateWeapons(app, fighter, step.w, 'remove');
  }
  // Play throw SFX
  void sound.play('sfx', { sprite: 'flashFlood' });

  // Move thrown weapon
  Tweener.add({
    target: thrownWeapon,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x: end.x,
    y: end.y,
  }).then(() => {
    // Untrap target
    untrap(app, target);

    // Get hit animation (random for male brute)
    const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';

    // Set animation to the correct hit animation
    target.animation.setAnimation(animation);

    // Remove thrown weapon
    app.stage.removeChild(thrownWeapon);
    thrownWeapon.destroy();

    displayDamage(app, target, step.d, speed);

    // Update HP bar
    updateHp(fighters, target, -step.d, speed, isClanWar);

    // Stagger, then set animation to death if stunned
    // Can't set to idle because this async process could cancel next animations
    stagger(target, speed).then(() => {
      // Check if not already death to avoid flickering
      if (target.stunned && target.animation.animation !== 'death') {
        target.animation.setAnimation('death');
      }
    }).catch(console.error);
  }).catch(console.error);

  // Wait 0.15s
  await new Promise((resolve) => { setTimeout(resolve, 150 / speed.current); });
};

export default flashFlood;
