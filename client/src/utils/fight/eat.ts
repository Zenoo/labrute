/* eslint-disable no-void */
import { EatStep } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Text } from 'pixi.js';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './findFighter';
import insideXBounds from './insideXBounds';
import updateHp from './updateHp';

const eat = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EatStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const pet = findFighter(fighters, step.target);
  if (!pet) {
    throw new Error('Pet not found');
  }

  const animationEnded = brute.animation.waitForEvent('eat:end');

  // Set brute animation to `eat`
  brute.animation.setAnimation('eat');

  // Resize pet to 0 in 0.5s
  Tweener.add({
    target: pet.animation.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear
  }, {
    height: 0,
    width: 0,
  }).catch(console.error);

  // Play eat SFX
  void sound.play('skills/tamer', {
    speed: speed.current,
  });

  // Display floating and fading green heal text
  const healText = new Text(`+${step.heal}`, {
    fontFamily: 'GameFont', fontSize: 20, fill: 0x00ff00,
  });
  healText.anchor.set(0.5);
  healText.x = insideXBounds(brute.animation.container.x);
  healText.y = brute.animation.container.y - brute.animation.container.height;
  healText.zIndex = 1000;
  healText.filters = [new OutlineFilter()];
  app.stage.addChild(healText);

  Tweener.add({
    target: healText,
    duration: 2 / speed.current,
  }, {
    y: healText.y - 100,
    alpha: 0,
  }).then(() => {
    // Remove text
    healText.destroy();
  }).catch(console.error);

  // Wait for animation to complete
  await animationEnded;

  // Heal brute
  updateHp(brute, step.heal, speed);
};

export default eat;