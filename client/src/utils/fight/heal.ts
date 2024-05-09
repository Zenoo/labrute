/* eslint-disable no-void */
import { HealStep } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import { Application, Sprite, Text } from 'pixi.js';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './findFighter';
import insideXBounds from './insideXBounds';
import updateHp from './updateHp';

const heal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HealStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const animationEnded = brute.animation.waitForEvent('drink:end');

  // Set animation to `drink`
  brute.animation.setAnimation('drink');

  // Play heal SFX
  void sound.play('skills/tragicPotion', {
    speed: speed.current,
  });

  // Display floating and fading green heal text
  const healText = new Text(`+${step.h}`, {
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

  // Display floating and fading cure icon if brute was poison healed
  if (step.c) {
    const cureIcon = new Sprite(spritesheet.textures['cure.png']);
    cureIcon.anchor.set(0.5);
    cureIcon.width = 30;
    cureIcon.height = 30;
    cureIcon.x = insideXBounds(brute.animation.container.x) - 35;
    cureIcon.y = brute.animation.container.y - brute.animation.container.height;
    cureIcon.zIndex = 1000;
    app.stage.addChild(cureIcon);

    Tweener.add({
      target: cureIcon,
      duration: 2 / speed.current,
    }, {
      y: cureIcon.y - 100,
      alpha: 0,
    }).then(() => {
      // Remove icon
      cureIcon.destroy();
    }).catch(console.error);
  }

  // Wait for animation to complete
  await animationEnded;

  // Heal brute
  updateHp(brute, step.h, speed);

  // Set animation to `idle`
  brute.animation.setAnimation('idle');
};

export default heal;
