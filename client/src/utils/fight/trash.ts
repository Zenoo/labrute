/* eslint-disable no-void */
import { TrashStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import updateWeapons from './updateWeapons';
import { sound } from '@pixi/sound';

const trash = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrashStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `trash`
  changeAnimation(app, brute, 'trash', speed);
  (brute.currentAnimation as AnimatedSprite).animationSpeed = 0.5;

  // Play trash SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Remove weapon from brute
  updateWeapons(app, brute, step.name, 'remove');

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `idle`
      changeAnimation(app, brute, 'idle', speed);

      resolve(null);
    };
  });
};

export default trash;