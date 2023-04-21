/* eslint-disable no-void */
import { FIGHTER_WIDTH, SkillActivateStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation, { handleEffects } from './changeAnimation';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './findFighter';

const skillActivate = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillActivateStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Play skill SFX
  if (['cryOfTheDamned', 'fierceBrute'].includes(step.skill)) {
    void sound.play(`skills/${step.skill}`, {
      speed: speed.current,
    });
  }

  if (['fierceBrute', 'cryOfTheDamned', 'hammer'].includes(step.skill)) {
    // Set animation to `strenghten`
    changeAnimation(app, brute, 'strengthen', speed);

    // Add to active effects
    brute.activeEffects.push(step.skill);

    // Add filter
    handleEffects(brute);

    // Wait for animation to complete
    await new Promise((resolve) => {
      (brute.currentAnimation as AnimatedSprite).onComplete = () => {
        // Set animation to `idle`
        changeAnimation(app, brute, 'idle', speed);

        resolve(null);
      };
    });
  }

  // Flash flood
  if (step.skill === 'flashFlood') {
    // Set brute animation to `evade`
    changeAnimation(app, brute, 'evade', speed);

    // Move brute to upper middle
    await Tweener.add({
      target: brute.container,
      duration: 0.4 / speed.current,
      ease: Easing.easeOutCubic
    }, {
      y: 100,
      x: brute.team === 'left'
        ? app.screen.width / 2 - FIGHTER_WIDTH.brute / 2
        : app.screen.width / 2 + FIGHTER_WIDTH.brute / 2,
    });
  }

  // TODO: different visual for every skill activation
};

export default skillActivate;