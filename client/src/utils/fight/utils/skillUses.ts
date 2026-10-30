import type { SkillId } from '@labrute/core';
import type { AnimationFighter } from './findFighter';

export const consumeSkillUse = (fighter: AnimationFighter, skill: SkillId) => {
  const current = fighter.skills[skill];
  if (current?.uses && --current.uses === 0) {
    delete fighter.skills[skill];
    return true;
  }
  return false;
};

export const addSkillUse = (fighter: AnimationFighter, skill: SkillId, tier: number) => {
  const current = fighter.skills[skill];
  if (current) {
    current.uses = (current.uses || 0) + 1;
  } else {
    fighter.skills[skill] = { tier, uses: 1 };
  }
};
