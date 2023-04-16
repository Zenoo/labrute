/* eslint-disable no-void */
import { HealStep } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application, Text } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import updateHp from './updateHp';
import { sound } from '@pixi/sound';

const heal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HealStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `drink`
  changeAnimation(app, brute, 'drink', speed);

  // Play heal SFX
  void sound.play('skills/tragicPotion', {
    speed: speed.current,
  });

  // Display floating and fading green heal text
  const healText = new Text(`+${step.amount}`, {
    fontFamily: 'Poplar', fontSize: 20, fill: 0x00ff00,
  });
  healText.anchor.set(0.5);
  healText.x = brute.container.x;
  healText.y = brute.container.y - brute.currentAnimation.height;
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
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Heal brute
  updateHp(brute, step.amount, speed);

  // Set animation to `idle`
  changeAnimation(app, brute, 'idle', speed);
};

export default heal;