/* eslint-disable no-void */
import { HitStep } from '@labrute/core';
import { Application, Text } from 'pixi.js';
import changeAnimation from './changeAnimation';

import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './findFighter';
import stagger from './stagger';
import { sound } from '@pixi/sound';
import { OutlineFilter } from '@pixi/filter-outline';
import updateHp from './updateHp';

const hammer = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Set fighter animation to `grab`
  changeAnimation(app, fighter, 'grab', speed);

  // Set target animation to `grabbed`
  changeAnimation(app, target, 'grabbed', speed);

  // Skill SFX
  void sound.play('skills/hammer', {
    speed: speed.current,
  });

  // Stagger both
  stagger(fighter.container, target.team, speed).catch(console.error);
  stagger(target.container, target.team, speed).catch(console.error);

  // Levitate both
  const animations = [fighter, target].map((f) => Tweener.add({
    target: f.container,
    duration: 0.25 / speed.current,
    ease: Easing.linear
  }, {
    y: f.container.y - 200,
  }));

  // Wait for both animations to finish
  await Promise.all(animations);

  // Wait for 0.2 seconds
  await new Promise((resolve) => {
    setTimeout(resolve, 200 / speed.current);
  });

  // Drop both
  const dropAnimations = [fighter, target].map((f) => Tweener.add({
    target: f.container,
    duration: 0.125 / speed.current,
    ease: Easing.linear
  }, {
    y: f.container.y + 200,
  }));

  // Wait for both animations to finish
  await Promise.all(dropAnimations);

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

  // Set target animation to `idle`
  changeAnimation(app, target, 'idle', speed);

  // Stagger target
  stagger(target.container, target.team, speed).catch(console.error);
};

export default hammer;