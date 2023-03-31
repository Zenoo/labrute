/* eslint-disable no-void */
import { TrapStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import { sound } from '@pixi/sound';

const trap = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrapStep,
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

  // Set fighter animation to `launch`
  changeAnimation(app, brute, 'launch', speed);

  // Play trap SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Wait 500ms
  await new Promise((resolve) => {
    setTimeout(() => {
      // Set fighter animation to `idle`
      changeAnimation(app, brute, 'idle', speed);

      // Set target animation to `trap`
      changeAnimation(app, target, 'trapped-start', speed);

      // Wait for animation to complete
      (target.currentAnimation as AnimatedSprite).onComplete = () => {
        // Set target animation to `trapped-end`
        changeAnimation(app, target, 'trapped-loop', speed);

        resolve(null);
      };
    }, 500);
  });
};

export default trap;