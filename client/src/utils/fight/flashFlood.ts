/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, HitStep, WeaponById, randomBetween } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite } from 'pixi.js';
import { BevelFilter } from '@pixi/filter-bevel';

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
  const weaponSpritesheet = app.loader.resources['/images/game/thrown-weapons.json']?.spritesheet;
  const shieldSpritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!weaponSpritesheet || !shieldSpritesheet) {
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

  let thrownItem: Sprite;

  // Shield throw
  if (step.s) {
    fighter.animation.shield = false;
    thrownItem = new Sprite(shieldSpritesheet.textures['shield.png']);
    thrownItem.filters = [new BevelFilter()];
    thrownItem.zIndex = 1;
  // Weapon throw
  } else {
    const weapon = typeof step.w !== 'undefined' ? WeaponById[step.w] : WeaponName.lance;
    // Update current weapon
    if (!startedWithAWeapon) {
      fighter.animation.weapon = weapon;
    }
    thrownItem = new Sprite(weaponSpritesheet.textures[`${weapon}.png`]);
  }

  // Anchor to left center
  thrownItem.anchor.set(0, 0.5);

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
  thrownItem.position.set(start.x, start.y);

  // Set rotation (from fighter and target positions)
  thrownItem.angle = (Math.atan2(
    end.y - start.y,
    end.x - start.x,
  ) * 180) / Math.PI;

  // Add to stage
  app.stage.addChild(thrownItem);

  // Remove Shield
  if (step.s) {
    target.animation.shield = false;
  // Remove Weapon
  } else {
    fighter.animation.weapon = null;
    if (!startedWithAWeapon) {
      updateWeapons(app, fighter, step.w, 'remove');
    }
  }

  // Play throw SFX
  void sound.play('sfx', { sprite: 'flashFlood' });

  // Move thrown item
  Tweener.add({
    target: thrownItem,
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

    // Remove thrown item
    app.stage.removeChild(thrownItem);
    thrownItem.destroy();

    if (!step.s) {
      // Display damage if weapon
      displayDamage(app, target, step.d, speed);

      // Update HP bar
      updateHp(fighters, target, -step.d, speed, isClanWar);
    } else if (target.type === 'brute') {
      // Stun target brute if shield
      target.stunned = true;
    }

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
