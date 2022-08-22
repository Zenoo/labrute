import { ArriveStep } from '@eternaltwin/labrute-core/types';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';

import { getRandomPosition } from './fightPositions.js';
import findFighter, { AnimationFighter } from './findFighter.js';
import { changeAnimation } from './setupFight.js';

const arrive = async (
  app: Application,
  fighters: AnimationFighter[],
  step: ArriveStep,
) => {
  const fighter = findFighter(fighters, step.fighter);

  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Get random position
  const { x, y } = getRandomPosition(fighters, fighter.team);

  // Current animation

  // Set current animation to visible
  fighter.currentAnimation.visible = true;

  // Move fighter to the position
  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.5,
    ease: Easing.linear
  }, { x, y });

  // Set animation to `arrive-end`
  changeAnimation(app, fighter, 'arrive-end');

  // Slow every animation but the bear
  if (!(fighter.name === 'bear' && fighter.master)) {
    (fighter.currentAnimation as AnimatedSprite).animationSpeed = 0.5;
  }

  // Wait for animation to end before going further
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `iddle`
      changeAnimation(app, fighter, 'iddle');

      resolve(null);
    };
  });
};

export default arrive;