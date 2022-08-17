import { AttemptHitStep } from '@eternaltwin/labrute-core/types';
import weapons from '@eternaltwin/labrute-core/brute/weapons';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
import iddle from './iddle.js';

const attemptHit = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: AttemptHitStep,
) => {
  // Custom animation for brutes
  const animation = step.fighter.type === 'brute'
    ? weapons.find((w) => w.name === step.weapon)?.animation || 'fist'
    : 'attack';

  // Set hitting animation for fighter
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.fighter, fighter)) {
      return {
        ...fighter,
        animation,
      };
    }

    return fighter;
  }));

  // Return fighter to iddle animation
  iddle(setFighters, step.fighter, getMoveDuration(animation, step.fighter));
};

export default attemptHit;