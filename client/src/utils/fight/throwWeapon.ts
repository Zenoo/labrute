/* eslint-disable no-void */
import { ThrowStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';
import { updateActiveWeapon } from './updateWeapons';

const throwWeapon = async (
  app: Application,
  fighters: AnimationFighter[],
  step: ThrowStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `prepare-throw`
  changeAnimation(app, fighter, 'prepare-throw', speed);

  // Wait for animation to finish
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Remove weapon from brute if needed
  if (!step.keep) {
    updateActiveWeapon(app, fighter, null);
  }

  // Set animation to `throw`
  changeAnimation(app, fighter, 'throw', speed);

  // Play throw SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Wait 250ms
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 250);
  });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);
};

export default throwWeapon;