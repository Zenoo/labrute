/* eslint-disable no-void */
import { BlockStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import { sound } from '@pixi/sound';

const block = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BlockStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `block`
  changeAnimation(app, fighter, 'block', speed);

  // Play block SFX
  void sound.play('hit/block', {
    speed: speed.current,
  });

  // Wait for animation to complete
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);
};

export default block;