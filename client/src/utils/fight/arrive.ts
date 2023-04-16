/* eslint-disable no-void */
import { ArriveStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import { getRandomPosition } from './fightPositions';
import findFighter, { AnimationFighter } from './findFighter';
import { sound } from '@pixi/sound';

const arrive = async (
  app: Application,
  fighters: AnimationFighter[],
  step: ArriveStep,
  speed: React.MutableRefObject<number>,
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

  // Wait 0.25s before playing arrive SFX
  setTimeout(() => {
    void sound.play('arrive', { speed: speed.current });
  }, 250 / speed.current);

  // Move fighter to the position
  await Tweener.add({
    target: fighter.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear
  }, { x, y });

  // Set animation to `arrive-end`
  changeAnimation(app, fighter, 'arrive-end', speed);

  // Slow every animation but the bear
  if (!(fighter.name === 'bear' && fighter.master)) {
    (fighter.currentAnimation as AnimatedSprite).animationSpeed = 0.5;
  }

  // Wait for animation to end before going further
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `idle`
      changeAnimation(app, fighter, 'idle', speed);

      resolve(null);
    };
  });
};

export default arrive;