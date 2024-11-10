import { DisarmStep, FIGHTER_HEIGHT, FIGHTER_WIDTH, WeaponById } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';

import findFighter, { AnimationFighter } from './utils/findFighter';
import { BevelFilter } from '@pixi/filter-bevel';
import { Easing, Tweener } from 'pixi-tweener';

const disarm = (
  app: Application,
  fighters: AnimationFighter[],
  step: DisarmStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/thrown-weapons.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Remove weapon from opponent
  target.animation.weapon = null;

  // Create weapon sprite
  const weapon = new Sprite(spritesheet.textures[`${WeaponById[step.w]}.png`]);
  weapon.filters = [new BevelFilter()];
  weapon.zIndex = 1;

  // Anchor to left center
  weapon.anchor.set(0, 0.5);

  // Set position
  weapon.position.set(
    target.team === 'L'
      ? target.animation.container.x + FIGHTER_WIDTH.brute * 0.25
      : target.animation.container.x + FIGHTER_WIDTH.brute * 0.25,
    target.animation.container.y - FIGHTER_HEIGHT.brute * 0.5,
  );

  // Set angle
  weapon.angle = target.team === 'L' ? -110 : 70;

  // Add to stage
  app.stage.addChild(weapon);

  // Animate the fall
  Tweener.add({
    target: weapon,
    duration: 0.3 / speed.current,
    ease: Easing.linear,
  }, {
    x: target.team === 'L'
      ? weapon.x - 20
      : weapon.x + 20,
    y: weapon.y + 50,
    angle: target.team === 'L' ? -180 : 0,
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
};

export default disarm;
