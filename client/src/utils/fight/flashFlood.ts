/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, HitStep, randomBetween } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite, Text } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
import getFighterType from './getFighterType';
import insideXBounds from './insideXBounds';
import stagger from './stagger';
import updateHp from './updateHp';
import updateWeapons from './updateWeapons';

const flashFlood = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const { loader: { resources: { '/images/game/thrown-weapons.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Set animation to `throw`
  fighter.animation.setAnimation('throw');

  const weapon = step.weapon || 'lance';

  // Update current weapon
  fighter.animation.weapon = weapon;

  // Create thrown weapon sprite
  const thrownWeapon = new Sprite(spritesheet.textures[`${weapon}.png`]);

  // Anchor to left center
  thrownWeapon.anchor.set(0, 0.5);

  // Get starting position
  const start = {
    x: fighter.animation.team === 'left'
      ? fighter.animation.container.x + FIGHTER_WIDTH.brute
      : fighter.animation.container.x,
    y: fighter.animation.container.y - FIGHTER_HEIGHT.brute * 0.5,
  };

  // Get end position
  const end = {
    x: target.animation.team === 'left'
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
  updateWeapons(app, fighter, weapon, 'remove');

  // Play throw SFX
  void sound.play('skills/flashFlood', {
    speed: speed.current,
  });

  // Move thrown weapon
  Tweener.add({
    target: thrownWeapon,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x: end.x,
    y: end.y,
  }).then(() => {
    // Get hit animation (random for male brute)
    const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.data?.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';

    // Set animation to the correct hit animation
    target.animation.setAnimation(animation);

    // Remove thrown weapon
    app.stage.removeChild(thrownWeapon);
    thrownWeapon.destroy();

    // Display floating and fading damage text
    const damageText = new Text(`-${step.damage}`, {
      fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff
    });
    damageText.anchor.set(0.5);
    damageText.x = insideXBounds(target.animation.container.x);
    damageText.y = target.animation.container.y - target.animation.container.height;
    damageText.zIndex = 1000;
    damageText.filters = [new OutlineFilter()];
    app.stage.addChild(damageText);

    Tweener.add({
      target: damageText,
      duration: 2 / speed.current,
    }, {
      y: damageText.y - 100,
      alpha: 0,
    }).then(() => {
      // Remove text
      damageText.destroy();
    }).catch(console.error);

    // Update HP bar
    if (target.hpBar) {
      updateHp(target, -step.damage, speed);
    }

    // Stagger
    stagger(target.animation.container, target.animation.team, speed).catch(console.error);
  }).catch(console.error);

  // Wait 0.15s
  await new Promise((resolve) => { setTimeout(resolve, 150 / speed.current); });
};

export default flashFlood;