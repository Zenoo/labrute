/* eslint-disable no-void */
import { EquipStep, WeaponById } from '@labrute/core';

import { sound } from '@pixi/sound';
import { Application } from 'pixi.js';
import findFighter, { AnimationFighter } from './utils/findFighter';
import updateWeapons from './updateWeapons';

const equip = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EquipStep,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const animationEnded = brute.animation.waitForEvent('equip:end');

  // Set animation to `equip`
  brute.animation.setAnimation('equip');

  // Update available weapons
  updateWeapons(app, brute, step.w, 'remove');

  // Update active weapon
  brute.animation.weapon = WeaponById[step.w];
  // Play equip SFX
  void sound.play('sfx', { sprite: 'equip' });

  // Wait for animation to complete
  await animationEnded;

  // Set animation to `idle`
  brute.animation.setAnimation('idle');
};

export default equip;
