/* eslint-disable no-void */
import { EquipStep } from '@labrute/core';

import { sound } from '@pixi/sound';
import { Application } from 'pixi.js';
import findFighter, { AnimationFighter } from './findFighter';
import updateWeapons from './updateWeapons';

const equip = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EquipStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const animationEnded = brute.animation.waitForEvent('equip:end');

  // Set animation to `equip`
  brute.animation.setAnimation('equip');

  // Update available weapons
  updateWeapons(app, brute, step.name, 'remove');

  // Update active weapon
  brute.animation.weapon = step.name;

  // Play equip SFX
  void sound.play('equip', {
    speed: speed.current,
  });

  // Wait for animation to complete
  await animationEnded;

  // Set animation to `idle`
  brute.animation.setAnimation('idle');
};

export default equip;