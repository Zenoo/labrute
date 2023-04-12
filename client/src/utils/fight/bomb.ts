/* eslint-disable no-void */
import { Animation, BombStep, randomBetween } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application, Text } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import stagger from './stagger';
import updateHp from './updateHp';
import { sound } from '@pixi/sound';

const getBombDamage = (damage: BombStep['damage'], target: AnimationFighter) => {
  if (typeof damage === 'number') {
    return damage;
  }

  const targetDamage = damage.find((d) => d.name === target.name
    && d.type === target.type
    && d.master === target.master);

  if (!targetDamage) {
    throw new Error('Target damage not found');
  }

  return targetDamage.damage;
};

const bomb = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BombStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `launch`
  changeAnimation(app, fighter, 'launch', speed);

  // Play launch SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Wait 500ms
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 500);
  });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);

  // Play bomb SFX
  void sound.play('skills/bomb', {
    speed: speed.current,
  });

  // Get targets
  const targets = step.targets.map((t) => {
    const target = findFighter(fighters, t);

    if (!target) {
      throw new Error('Target not found');
    }

    return target;
  });

  for (let i = 0; i < targets.length; i++) {
    const { [i]: target } = targets;

    // Get damage
    const damage = getBombDamage(step.damage, target);

    // Get hit animation (random for male brute)
    const animation = target.type === 'brute' && target.data?.gender === 'male'
      ? `hit-${randomBetween(0, 3)}`
      : 'hit';

    // Set animation to the correct hit animation
    changeAnimation(app, target, animation as Animation, speed);

    // Display floating and fading damage text
    const damageText = new Text(`-${damage}`, {
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
      updateHp(target, -damage, speed);
    }

    // Stagger
    // eslint-disable-next-line no-await-in-loop
    stagger(target.currentAnimation as AnimatedSprite, target.team, speed)
      .then(() => {
        if (target.currentAnimation.name.startsWith('hit')) {
          // Set animation to `idle`
          changeAnimation(app, target, 'idle', speed);
        }
      })
      .catch(console.error);
  }
};

export default bomb;