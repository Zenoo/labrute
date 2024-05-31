import { DeathStep } from '@labrute/core';

import findFighter, { AnimationFighter } from './utils/findFighter';

const death = (
  fighters: AnimationFighter[],
  step: DeathStep,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `death`
  fighter.animation.setAnimation('death');
};

export default death;
