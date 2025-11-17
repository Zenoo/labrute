/* eslint-disable no-void */
import { ThrowStep, WeaponById, weapons } from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite } from 'pixi.js';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { knockBack } from './utils/knockBack';

const throwWeapon = async (
  app: Application,
  fighters: AnimationFighter[],
  step: ThrowStep,
  speed: React.MutableRefObject<number>,
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
    throw new Error('Opponent not found');
  }

  // Weapon return
  if (step.r) {
    // Get correct animation
    const animation = fighter.type === 'brute'
      ? fighter.animation.weapon ? weapons[fighter.animation.weapon].animation : 'fist'
      : 'attack';

    // Set animation to the correct animation
    fighter.animation.setAnimation(animation);
  } else {
    // Normal throw
    const prepareEnded = fighter.animation.waitForEvent('prepare-throw:end');

    // Set animation to `prepare-throw`
    fighter.animation.setAnimation('prepare-throw');

    // Wait for animation to finish
    await prepareEnded;

    // Remove weapon from brute if needed
    if (!step.k) {
      fighter.animation.weapon = null;
    }

    // Set animation to `throw`
    fighter.animation.setAnimation('throw');
  }

  // Infer weapon's weight on it's damage
  const weaponWeight = weapons[WeaponById[step.w]].damage[0];
  // Small self knockback
  void knockBack(fighter, speed, weaponWeight * 0.25, 0.25);

  // Create thrown weapon sprite
  const thrownWeapon = new Sprite(spritesheet.textures[`${WeaponById[step.w]}.png`]);

  // Anchor to left center
  thrownWeapon.anchor.set(0, 0.5);

  // Get starting position
  const start = {
    x: fighter.team === 'L'
      ? fighter.animation.container.x + fighter.animation.baseWidth
      : fighter.animation.container.x,
    y: fighter.animation.container.y - fighter.animation.baseHeight * 0.5,
  };

  // Get end position
  const end = {
    x: target.team === 'L'
      ? target.animation.container.x + target.animation.baseWidth
      : target.animation.container.x,
    y: target.animation.container.y - target.animation.baseHeight * 0.5,
  };

  // Set position
  thrownWeapon.position.set(start.x, start.y);

  // Set rotation (from fighter and opponent positions)
  thrownWeapon.angle = (Math.atan2(
    end.y - start.y,
    end.x - start.x,
  ) * 180) / Math.PI;

  // Add to stage
  app.stage.addChild(thrownWeapon);
  // Play throw SFX
  void sound.play('sfx', { sprite: 'net' });

  // Move thrown weapon
  await Tweener.add({
    target: thrownWeapon,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x: end.x,
    y: end.y,
  });

  // Remove thrown weapon
  app.stage.removeChild(thrownWeapon);
  thrownWeapon.destroy();

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};

export default throwWeapon;
