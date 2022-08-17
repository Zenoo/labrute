import { AttemptHitStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
import iddle from './iddle.js';

const attemptHit = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: AttemptHitStep,
) => {
  // Set hitting animation for fighters
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.fighter, fighter)) {
      return {
        ...fighter,
        animation: 'attack',
      };
    }

    return fighter;
  }));

  // Return fighter to iddle animation
  iddle(setFighters, step.fighter, getMoveDuration('attack', step.fighter));
};

export default attemptHit;