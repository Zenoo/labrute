/* eslint-disable no-void */
import { Animation, randomBetween, SaboteurStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import { sound } from '@pixi/sound';
import findFighter, { AnimationFighter } from './findFighter';
import stagger from './stagger';
import { updateActiveWeapon } from './updateWeapons';

const saboteur = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SaboteurStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `hit`
  changeAnimation(
    app,
    brute,
    brute.data?.gender === 'male'
      ? `hit-${randomBetween(0, 2)}` as Animation
      : 'hit',
    speed,
  );

  // Play saboteur SFX
  void sound.play('skills/saboteur', {
    speed: speed.current,
  });

  // Stagger animation
  await stagger(brute.currentAnimation as AnimatedSprite, brute.team, speed);

  // Update active weapon
  updateActiveWeapon(app, brute, null);
};

export default saboteur;