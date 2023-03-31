/* eslint-disable no-void */
import { SkillActivateStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation, { handleEffects } from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import { sound } from '@pixi/sound';

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
  if (['cryOfTheDamned', 'fierceBrute', 'flashFlood', 'hammer'].includes(step.skill)) {
    void sound.play(`skills/${step.skill}`, {
      speed: speed.current,
    });
  }

  if (['fierceBrute', 'cryOfTheDamned'].includes(step.skill)) {
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

  // TODO: different visual for every skill activation
};

export default skillActivate;