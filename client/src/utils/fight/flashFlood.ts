/* eslint-disable no-void */
import { HitStep, WeaponById, randomBetween } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite, Container, Graphics, AnimatedSprite } from 'pixi.js';

import displayDamage from './utils/displayDamage';
import findFighter, { AnimationFighter } from './utils/findFighter';
import stagger from './stagger';
import updateHp from './updateHp';
import updateWeapons from './updateWeapons';
import { WeaponName } from '@labrute/prisma';
import { untrap } from './untrap';
import itemDrop from './itemDrop';
import { playResistAnimation } from './resist';

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
  const miscSpritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!weaponSpritesheet || !miscSpritesheet) {
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

  // Create mask weapon and vfx
  const mask = new Graphics();
  mask.beginFill(0x000000);
  mask.drawRect(0, 0, app.stage.width, target.animation.container.y + 2);
  mask.endFill();

  // Create a masked container
  const flashFloodContainer = new Container();
  flashFloodContainer.mask = mask;
  flashFloodContainer.zIndex = target.animation.container.y - 1;
  flashFloodContainer.sortableChildren = true;

  // Set animation to `throw`
  fighter.animation.setAnimation('throw');

  let thrownItem: Sprite;

  // Shield throw
  if (step.s) {
    fighter.animation.shield = false;
    thrownItem = new Sprite(miscSpritesheet.textures['shield.png']);

  // Weapon throw
  } else {
    const weapon = typeof step.w !== 'undefined' ? WeaponById[step.w] : WeaponName.lance;
    // Update current weapon
    if (!startedWithAWeapon) {
      fighter.animation.weapon = weapon;
    }
    thrownItem = new Sprite(weaponSpritesheet.textures[`${weapon}.png`]);
  }

  // Anchor to center
  thrownItem.anchor.set(1, 0.5);
  // Get starting position
  const start = {
    x: fighter.team === 'L'
      ? fighter.animation.container.x + fighter.animation.baseWidth
      : fighter.animation.container.x,
    y: fighter.animation.container.y - fighter.animation.baseHeight * 0.5,
  };

  // Get end position (on ground if weapon, on head if shield)
  const end = step.s
    ? {
      x: target.team === 'L'
        ? target.animation.container.x - target.animation.baseWidth * 0.25
        : target.animation.container.x + target.animation.baseWidth * 0.25,
      y: target.animation.container.y - target.animation.baseHeight * 0.8,
    }
    : {
      x: target.team === 'L'
        ? target.animation.container.x - fighter.animation.baseWidth * 0.6
        : target.animation.container.x + fighter.animation.baseWidth * 0.6,
      y: target.animation.container.y + 5,
    };

  // Set position
  thrownItem.position.set(start.x, start.y);
  thrownItem.zIndex = 2;

  // Set rotation (from fighter and target positions)
  thrownItem.angle = (Math.atan2(
    end.y - start.y,
    end.x - start.x,
  ) * 180) / Math.PI;

  // Add to container
  flashFloodContainer.addChild(thrownItem);
  // Add to stage
  app.stage.addChild(flashFloodContainer);

  // Remove Shield
  if (step.s) {
    fighter.animation.shield = false;
  // Remove Weapon
  } else {
    fighter.animation.weapon = null;
    if (!startedWithAWeapon) {
      updateWeapons(app, fighter, step.w, 'remove');
    }
  }

  // Play throw SFX
  void sound.play('sfx', { sprite: 'flashFlood' });
  if (!step.s) {
    // Create flashFlood sprite
    const flashFloodSprite = new AnimatedSprite(miscSpritesheet.animations.flashFlood || []);
    flashFloodSprite.animationSpeed = speed.current * 0.35;
    flashFloodSprite.loop = false;
    flashFloodSprite.anchor.set(1, 0.5);

    flashFloodSprite.x = end.x - (start.x - end.x) * 0.1;
    flashFloodSprite.y = end.y - (start.y - end.y) * 0.1;
    flashFloodSprite.angle = thrownItem.angle;
    flashFloodSprite.zIndex = 1;

    // Add flashFlood sprite to stage
    flashFloodContainer.addChild(flashFloodSprite);

    // Destroy flashFlood sprite when animation ends
    flashFloodSprite.onComplete = () => {
      flashFloodSprite.destroy();
    };

    // Play flashFlood
    flashFloodSprite.play();
  }

  // Move thrown item
  Tweener.add({
    target: thrownItem,
    duration: 0.1 / speed.current,
    ease: Easing.linear,
  }, {
    x: end.x,
    y: end.y,
  }).then(() => {
    // Wake up target
    target.stunned = false;

    // Untrap target
    untrap(app, target);

    // Get hit animation (random for male brute)
    const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';

    // Set animation to the correct hit animation
    target.animation.setAnimation(animation);

    if (!step.s) {
      // Display damage if weapon
      displayDamage(app, target, step.d, speed);

      // Play the resist animation now
      playResistAnimation(app, target, speed);

      // Update HP bar
      updateHp(fighters, target, -step.d, speed, isClanWar);
    } else {
      // Stun target brute if shield
      if (target.type === 'brute') target.stunned = true;
      thrownItem.destroy();

      // Drop shield (rebounds on target head)
      itemDrop({
        app,
        fighter: target,
        speed,
        item: 'shield',
        initialPosition: end,
        initialVelocity: { x: 9, y: -7 },
      });
    }
    // Stagger, then set animation to death if stunned
    // Can't set to idle because this async process could cancel next animations
    stagger(target, speed, step.s ? 0 : 18, 0.1).then(async () => {
      // Check if not already death to avoid flickering
      if (target.stunned && target.animation.animation !== 'death') {
        target.animation.setAnimation('death');
      }
      // Wait for 1s
      await new Promise((resolve) => { setTimeout(resolve, 1000 / speed.current); });
      // Fade out item
      await Tweener.add({
        target: flashFloodContainer,
        duration: 1.5 / speed.current,
        ease: Easing.linear,
      }, {
        alpha: 0
      }).then(() => { flashFloodContainer.destroy(); });
    }).catch(console.error);
  }).catch(console.error);

  // Wait 0.3s
  await new Promise((resolve) => { setTimeout(resolve, 300 / speed.current); });
};

export default flashFlood;
