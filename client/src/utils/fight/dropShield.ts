import { DropShieldStep, FIGHTER_HEIGHT, FIGHTER_WIDTH } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';

import findFighter, { AnimationFighter } from './utils/findFighter';
import { BevelFilter } from '@pixi/filter-bevel';
import { Easing, Tweener } from 'pixi-tweener';

const dropShield = (
  app: Application,
  fighters: AnimationFighter[],
  step: DropShieldStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const target = findFighter(fighters, step.b);
  if (!target) {
    throw new Error('Target not found');
  }

  target.animation.shield = false;

  // Create trashed shield sprite
  const trashedShield = new Sprite(spritesheet.textures['shield.png']);
  trashedShield.filters = [new BevelFilter()];
  trashedShield.zIndex = 1;

  // Anchor to left center
  trashedShield.anchor.set(0, 0.5);

  // Set position
  trashedShield.position.set(
    target.team === 'L'
      ? target.animation.container.x + FIGHTER_WIDTH.brute * 0.25
      : target.animation.container.x + FIGHTER_WIDTH.brute * 0.25,
    target.animation.container.y - FIGHTER_HEIGHT.brute * 0.4,
  );

  // Set angle
  trashedShield.angle = target.team === 'L' ? -110 : 70;

  // Add to stage
  app.stage.addChild(trashedShield);

  // Animate the fall
  Tweener.add({
    target: trashedShield,
    duration: 0.3 / speed.current,
    ease: Easing.linear,
  }, {
    x: target.team === 'L'
      ? trashedShield.x - 20
      : trashedShield.x + 20,
    y: trashedShield.y + 50,
    angle: target.team === 'L' ? -180 : 0,
  }).then(() => {
    // Wait a bit
    setTimeout(() => {
      // Decrease opacity
      Tweener.add({
        target: trashedShield,
        duration: 0.5 / speed.current,
        ease: Easing.linear,
      }, {
        alpha: 0,
      }).then(() => {
        // Remove from stage
        app.stage.removeChild(trashedShield);
      }).catch(console.error);
    }, 500 / speed.current);
  }).catch(console.error);
};

export default dropShield;
