import { DisarmStep, FIGHTER_HEIGHT, FIGHTER_WIDTH } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
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
  const { loader: { resources: { '/images/game/thrown-weapons.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const opponent = findFighter(fighters, step.opponent);
  if (!opponent) {
    throw new Error('Opponent not found');
  }

  // Remove weapon from opponent
  opponent.animation.weapon = null;

  // Create weapon sprite
  const weapon = new Sprite(spritesheet.textures[`${step.weapon}.png`]);
  weapon.filters = [new BevelFilter()];
  weapon.zIndex = 1;

  // Anchor to left center
  weapon.anchor.set(0, 0.5);

  // Set position
  weapon.position.set(
    opponent.animation.team === 'left'
      ? opponent.animation.container.x + FIGHTER_WIDTH.brute / 4
      : opponent.animation.container.x + FIGHTER_WIDTH.brute * 0.75,
    opponent.animation.container.y - FIGHTER_HEIGHT.brute * 0.5,
  );

  // Set angle
  weapon.angle = opponent.animation.team === 'left' ? -110 : 70;

  // Add to stage
  app.stage.addChild(weapon);

  // Animate the fall
  Tweener.add({
    target: weapon,
    duration: 0.3 / speed.current,
    ease: Easing.linear,
  }, {
    x: opponent.animation.team === 'left'
      ? weapon.x - 20
      : weapon.x + 20,
    y: weapon.y + 50,
    angle: opponent.animation.team === 'left' ? -180 : 0,
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