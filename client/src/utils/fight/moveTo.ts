import { MoveStep } from '@eternaltwin/labrute-core/types';
import { Easing, Tweener } from 'pixi-tweener';
import { Application } from 'pixi.js';
import findFighter, { AnimationFighter } from './findFighter.js';
import { changeAnimation } from './setupFight.js';

const moveTo = async (
  app: Application,
  fighters: AnimationFighter[],
  step: MoveStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Set animation to `run`
  changeAnimation(app, fighter, 'run');

  // Move fighter to the position
  await Tweener.add({
    target: fighter.currentAnimation,
    duration: 0.5,
    ease: Easing.linear
  }, {
    x: target.team === 'right'
      ? target.currentAnimation.x
        - target.currentAnimation.width / 2
        - fighter.currentAnimation.width / 2
      : target.currentAnimation.x
        + target.currentAnimation.width / 2
        + fighter.currentAnimation.width / 2,
    y: target.currentAnimation.y,
  });

  // Set animation to `iddle`
  changeAnimation(app, fighter, 'iddle');
};

export default moveTo;