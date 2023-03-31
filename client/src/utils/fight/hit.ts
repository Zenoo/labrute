/* eslint-disable no-void */
import { Animation, HitStep, WEAPONS_SFX, randomBetween } from '@labrute/core';
import { GlowFilter } from '@pixi/filter-glow';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application, Text } from 'pixi.js';
import changeAnimation from './changeAnimation';
import { sound } from '@pixi/sound';

import findFighter, { AnimationFighter } from './findFighter';
import stagger from './stagger';
import updateHp from './updateHp';
import { WeaponName } from '@labrute/prisma';

const hit = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
) => {
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Get hit animation (random for male brute)
  const animation = target.type === 'brute' && target.data?.gender === 'male'
    ? `hit-${randomBetween(0, 2)}`
    : 'hit';

  // Set animation to the correct hit animation
  changeAnimation(app, target, animation as Animation, speed);

  // Play hitting SFX
  if (step.weapon) {
    // Skill SFX
    if (['thief', 'fierceBrute', 'tragicPotion', 'net', 'bomb', 'hammer', 'cryOfTheDamned', 'hypnosis', 'flashFlood', 'tamer'].includes(step.weapon)) {
      void sound.play(`skills/${step.weapon}`, {
        speed: speed.current,
      });
    } else {
      // Weapon SFX
      void sound.play(`hitting/${WEAPONS_SFX[step.weapon as WeaponName][randomBetween(0, WEAPONS_SFX[step.weapon as WeaponName].length - 1)]}`, {
        speed: speed.current,
      });
    }
  } else if (step.fighter.type === 'pet') {
    // Sword SFX for pets
    void sound.play('hitting/sword', {
      speed: speed.current,
    });
  } else {
    // Fist SFX
    void sound.play(`hitting/fist${randomBetween(1, 3)}`, {
      speed: speed.current,
    });
  }

  // Play hit SFX
  if (step.target.type === 'pet') {
    // Remove numbers from pet name
    void sound.play(`hit/${step.target.name.replace(/\d/g, '')}`, {
      speed: speed.current,
    });
  }

  // Add poison filter if damage is poison
  if (step.action === 'poison') {
    target.currentAnimation.filters = [new GlowFilter({
      distance: 25,
      innerStrength: 1,
      outerStrength: 0,
      color: 0x006400,
    })];
  }

  // Display floating and fading damage text
  const damageText = new Text(`-${step.damage}`, {
    fontFamily: 'Poplar', fontSize: 20, fill: 0xffffff
  });
  damageText.anchor.set(0.5);
  damageText.x = target.currentAnimation.x;
  damageText.y = target.currentAnimation.y - target.currentAnimation.height;
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
  await stagger(target.currentAnimation as AnimatedSprite, target.team, speed);

  // Set animation to `idle`
  changeAnimation(app, target, 'idle', speed);
};

export default hit;