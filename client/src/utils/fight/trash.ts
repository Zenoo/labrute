/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, TrashStep } from '@labrute/core';
import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import changeAnimation from './changeAnimation';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './findFighter';
import { updateActiveWeapon } from './updateWeapons';
import { BevelFilter } from '@pixi/filter-bevel';
import { Easing, Tweener } from 'pixi-tweener';

const trash = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrashStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const { loader: { resources: { '/images/game/thrown-weapons.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `trash`
  changeAnimation(app, brute, 'trash', speed);
  (brute.currentAnimation as AnimatedSprite).animationSpeed = 0.5;

  // Keep old onFrameChange
  const oldOnFrameChange = (brute.currentAnimation as AnimatedSprite).onFrameChange;

  // Listen to 4th frame
  (brute.currentAnimation as AnimatedSprite).onFrameChange = (frame) => {
    // Call old onFrameChange
    if (oldOnFrameChange) {
      oldOnFrameChange(frame);
    }

    if (frame === 3) {
      // Create trashed weapon sprite
      const trashedWeapon = new Sprite(spritesheet.textures[`${step.name}.png`]);
      trashedWeapon.filters = [new BevelFilter()];
      trashedWeapon.zIndex = 1;

      // Anchor to left center
      trashedWeapon.anchor.set(0, 0.5);

      // Set position
      trashedWeapon.position.set(
        brute.team === 'left'
          ? brute.container.x + FIGHTER_WIDTH.brute / 4
          : brute.container.x + FIGHTER_WIDTH.brute * 0.75,
        brute.container.y - FIGHTER_HEIGHT.brute * 0.5,
      );

      // Set angle
      trashedWeapon.angle = brute.team === 'left' ? -110 : 70;

      // Add to stage
      app.stage.addChild(trashedWeapon);

      // Animate the fall
      Tweener.add({
        target: trashedWeapon,
        duration: 0.3 / speed.current,
        ease: Easing.linear,
      }, {
        x: brute.team === 'left'
          ? trashedWeapon.x - 20
          : trashedWeapon.x + 20,
        y: trashedWeapon.y + 50,
        angle: brute.team === 'left' ? -180 : 0,
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
  };

  // Play trash SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Remove weapon from brute
  updateActiveWeapon(app, brute, null);

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `idle`
      changeAnimation(app, brute, 'idle', speed);

      resolve(null);
    };
  });
};

export default trash;