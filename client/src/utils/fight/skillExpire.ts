import { SkillExpireStep } from '@labrute/core';
import { GlowFilter } from '@pixi/filter-glow';
import { AnimatedSprite, Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
import changeAnimation from './changeAnimation';
import { Easing, Tweener } from 'pixi-tweener';
import { getRandomPosition } from './fightPositions';
import { updateActiveWeapon } from './updateWeapons';

const skillExpire = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillExpireStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  if (step.skill === 'fierceBrute') {
    // Remove from active effects
    brute.activeEffects = brute.activeEffects.filter(
      (effect) => effect !== step.skill,
    );

    // Remove Glow filter
    brute.currentAnimation.filters = brute.currentAnimation.filters?.filter(
      (filter) => !(filter instanceof GlowFilter),
    ) || [];
  }

  // Flash flood
  if (step.skill === 'flashFlood') {
    // Remove active weapon
    updateActiveWeapon(app, brute, null);

    // Set brute animation to `arrive-start`
    changeAnimation(app, brute, 'arrive-start', speed);

    // Get positions
    const { x, y } = getRandomPosition(fighters, brute.team);

    // Move brute back
    await Tweener.add({
      target: brute.container,
      duration: 0.4 / speed.current,
      ease: Easing.easeInCubic
    }, { x, y });

    // Set brute animation to `arrive-end`
    changeAnimation(app, brute, 'arrive-end', speed);

    // Wait for animation to end before going further
    await new Promise((resolve) => {
      (brute.currentAnimation as AnimatedSprite).onComplete = () => {
        // Set animation to `idle`
        changeAnimation(app, brute, 'idle', speed);

        resolve(null);
      };
    });
  }

  // TODO: different visual for every skill expiration
};

export default skillExpire;