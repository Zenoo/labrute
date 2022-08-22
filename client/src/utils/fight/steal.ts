import { StealStep } from '@eternaltwin/labrute-core/types';

import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation.js';
import { getRandomPosition } from './fightPositions.js';
import findFighter, { AnimationFighter } from './findFighter.js';
import updateWeapons from './updateWeapons.js';

const steal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: StealStep,
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
    duration: 0.25,
    ease: Easing.linear,
  }, {
    x: target.currentAnimation.x,
    y: target.currentAnimation.y - 60,
  });

  // Set brute animation to `steal`
  changeAnimation(app, brute, 'steal');
  (brute.currentAnimation as AnimatedSprite).animationSpeed = 0.5;
  brute.currentAnimation.rotation = Math.PI / 2;

  // Set target animation to `stolen`
  changeAnimation(app, target, 'stolen');
  (target.currentAnimation as AnimatedSprite).animationSpeed = 0.5;

  // Wait for animation to finish
  await new Promise((resolve) => {
    (target.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Update target weapon list
  updateWeapons(app, target, step.name, 'remove');

  // Update brute weapon list
  updateWeapons(app, target, step.name, 'add');

  // Set target animation to `iddle`
  changeAnimation(app, target, 'iddle');

  const { x, y } = getRandomPosition(fighters, brute.team);

  // Move brute to position
  await Tweener.add({
    target: brute.currentAnimation,
    duration: 0.25,
    ease: Easing.linear,
  }, {
    x,
    y,
  });

  // Set brute animation to `iddle`
  changeAnimation(app, brute, 'iddle');
};

export default steal;