import { EndStep } from '@labrute/core';

import findFighter, { AnimationFighter } from './findFighter';

const end = (
  fighters: AnimationFighter[],
  step: EndStep,
) => {
  const winner = findFighter(fighters, step.w);
  if (!winner) {
    throw new Error('Fighter not found');
  }

  // Set animation to `win`
  winner.animation.setAnimation('win');
};

export default end;
