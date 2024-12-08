/* eslint-disable no-void */
import { TrashStep, WeaponById, weapons } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';

import { DropShadowFilter } from '@pixi/filter-drop-shadow';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';
import itemDrop from './itemDrop';

const trash = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrashStep,
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

  const animationEnded = brute.animation.waitForEvent('trash:end');

  // Listen for `trash:trashed` event
  brute.animation.once('trash:trashed', () => {
    // Infer weapon weight from it's damage
    const weaponWeight = weapons.find((weapon) => weapon.name === WeaponById[step.w])?.damage ?? 0;

    // Lighter weapons are more likely to be trashed over head
    const throwBackward = Math.random() > Math.max(0.1, Math.min(0.9, weaponWeight / 40));

    // Over head trash
    if (throwBackward) {
      itemDrop({
        app,
        fighter: brute,
        speed,
        item: step.w,
        initialVelocity: { r: 17 + Math.random() * 8 },
      });
    // Ground trash
    } else {
      // Create trashed weapon sprite
      const trashedWeapon = new Sprite(spritesheet.textures[`${WeaponById[step.w]}.png`]);
      trashedWeapon.filters = [new DropShadowFilter({ alpha: 0, quality: 1 })];
      trashedWeapon.zIndex = 1;

      // Anchor to left center
      trashedWeapon.anchor.set(0, 0.5);

      // Set position
      trashedWeapon.position.set(
        brute.team === 'L'
          ? brute.animation.container.x + brute.animation.baseWidth * 0.25
          : brute.animation.container.x + brute.animation.baseWidth * 0.25,
        brute.animation.container.y - brute.animation.baseHeight * 0.5,
      );

      // Set angle
      trashedWeapon.angle = brute.team === 'L' ? -110 : 70;

      // Add to stage
      app.stage.addChild(trashedWeapon);

      // Animate the fall
      Tweener.add({
        target: trashedWeapon,
        duration: 0.3 / speed.current,
        ease: Easing.linear,
      }, {
        x: brute.team === 'L'
          ? trashedWeapon.x - 20
          : trashedWeapon.x + 20,
        y: trashedWeapon.y + 50,
        angle: brute.team === 'L' ? -180 : 0,
      }).then(() => {
        // Wait a bit
        setTimeout(() => {
          // Decrease opacity
          Tweener.add({
            target: trashedWeapon,
            duration: 0.5 / speed.current,
            ease: Easing.linear,
          }, {
            alpha: 0,
          }).then(() => {
            // Remove from stage
            app.stage.removeChild(trashedWeapon);
          }).catch(console.error);
        }, 500 / speed.current);
      }).catch(console.error);
    }
  });

  // Set animation to `trash`
  brute.animation.setAnimation('trash');
  // Play trash SFX
  void sound.play('sfx', { sprite: 'net' });

  // Remove weapon from brute
  brute.animation.weapon = null;

  // Wait for animation to complete
  await animationEnded;

  // Set animation to `idle`
  brute.animation.setAnimation('idle');
};

export default trash;
