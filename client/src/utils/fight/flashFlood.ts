/* eslint-disable no-void */
import { Animation, FIGHTER_HEIGHT, FIGHTER_WIDTH, HitStep, randomBetween } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite, Text } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import getFighterType from './getFighterType';
import stagger from './stagger';
import updateHp from './updateHp';
import updateWeapons, { updateActiveWeapon } from './updateWeapons';

const flashFlood = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
) => {
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
  changeAnimation(app, fighter, 'throw', speed);

  const weapon = step.weapon || 'lance';

  // Update current weapon
  updateActiveWeapon(app, fighter, weapon);

  // Create thrown weapon sprite
  const thrownWeapon = new Sprite(spritesheet.textures[`${weapon}.png`]);

  // Anchor to left center
  thrownWeapon.anchor.set(0, 0.5);

  // Get starting position
  const start = {
    x: fighter.team === 'left'
      ? fighter.container.x + FIGHTER_WIDTH.brute
      : fighter.container.x,
    y: fighter.container.y - FIGHTER_HEIGHT.brute * 0.5,
  };

  // Get end position
  const end = {
    x: target.team === 'left'
      ? target.container.x + FIGHTER_WIDTH[getFighterType(target)]
      : target.container.x,
    y: target.container.y - FIGHTER_HEIGHT[getFighterType(target)] * 0.5,
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
    const animation = target.type === 'brute' && target.data?.gender === 'male'
      ? `hit-${randomBetween(0, 2)}`
      : 'hit';

    // Set animation to the correct hit animation
    changeAnimation(app, target, animation as Animation, speed);

    // Remove thrown weapon
    app.stage.removeChild(thrownWeapon);
    thrownWeapon.destroy();

    // Display floating and fading damage text
    const damageText = new Text(`-${step.damage}`, {
      fontFamily: 'Poplar', fontSize: 20, fill: 0xffffff
    });
    damageText.anchor.set(0.5);
    damageText.x = target.container.x;
    damageText.y = target.container.y - target.currentAnimation.height;
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
    stagger(target.container, target.team, speed).catch(console.error);
  }).catch(console.error);

  // Wait 0.15s
  await new Promise((resolve) => { setTimeout(resolve, 150 / speed.current); });
};

export default flashFlood;