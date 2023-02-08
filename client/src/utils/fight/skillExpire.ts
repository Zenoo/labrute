import { SkillExpireStep } from '@labrute/core';
import { GlowFilter } from '@pixi/filter-glow';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';

const skillExpire = (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillExpireStep,
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

  // TODO: different visual for every skill expiration
};

export default skillExpire;