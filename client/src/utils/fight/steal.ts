/* eslint-disable no-void */
import { StealStep } from '@labrute/core';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import { getRandomPosition } from './fightPositions';
import findFighter, { AnimationFighter } from './findFighter';
import { updateActiveWeapon } from './updateWeapons';

const steal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: StealStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Move brute to target position
  await Tweener.add({
    target: brute.currentAnimation,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x: target.currentAnimation.x,
    y: target.currentAnimation.y - 60,
  });

  // Set brute animation to `steal`
  changeAnimation(app, brute, 'steal', speed);
  (brute.currentAnimation as AnimatedSprite).animationSpeed = 0.5;
  brute.currentAnimation.rotation = Math.PI / 2;

  // Play steal SFX
  void sound.play('skills/thief', { speed: speed.current });

  // Set target animation to `stolen`
  changeAnimation(app, target, 'stolen', speed);
  (target.currentAnimation as AnimatedSprite).animationSpeed = 0.5;

  // Wait for animation to finish
  await new Promise((resolve) => {
    (target.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Update target current weapon
  updateActiveWeapon(app, target, null);

  // Update brute weapons
  updateActiveWeapon(app, brute, step.name);

  // Set target animation to `idle`
  changeAnimation(app, target, 'idle', speed);

  const { x, y } = getRandomPosition(fighters, brute.team);

  // Move brute to position
  await Tweener.add({
    target: brute.currentAnimation,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x,
    y,
  });

  // Set brute animation to `idle`
  changeAnimation(app, brute, 'idle', speed);
};

export default steal;