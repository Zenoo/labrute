import { EndStep } from '@labrute/core';

import findFighter, { AnimationFighter } from './utils/findFighter';

const end = (
  fighters: AnimationFighter[],
  step: EndStep,
) => {
  const winner = findFighter(fighters, step.w);
  if (!winner) {
    throw new Error('Fighter not found');
  }

  // Get team
  const team = fighters.filter((fighter) => fighter.team === winner.team);

  // Set animation to `win`
  team.forEach((fighter) => {
    fighter.animation.setAnimation('win');
  });
};

export default end;
