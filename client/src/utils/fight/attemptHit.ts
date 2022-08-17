import { AttemptHitStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

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
};

export default attemptHit;