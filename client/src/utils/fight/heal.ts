import { HealStep } from '@eternaltwin/labrute-core/types';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application, Text } from 'pixi.js';
import changeAnimation from './changeAnimation.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import updateHp from './updateHp.js';

const heal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HealStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `drink`
  changeAnimation(app, brute, 'drink');

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Display floating and fading green heal text
  const healText = new Text(`-${step.amount}`, {
    fontFamily: 'Poplar', fontSize: 20, fill: 0x00ff00,
  });
  healText.anchor.set(0.5);
  healText.x = brute.currentAnimation.x;
  healText.y = brute.currentAnimation.y - brute.currentAnimation.height;
  healText.zIndex = 1000;
  healText.filters = [new OutlineFilter()];
  app.stage.addChild(healText);

  Tweener.add({
    target: healText,
    duration: 2,
  }, {
    y: healText.y - 100,
    alpha: 0,
  }).then(() => {
    // Remove text
    healText.destroy();
  }).catch(console.error);

  // Heal brute
  updateHp(brute, step.amount);

  // Set animation to `iddle`
  changeAnimation(app, brute, 'iddle');
};

export default heal;