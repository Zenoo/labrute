import { TrapStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const trap = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: TrapStep,
) => {
  // Set trapped animation on target
  // TODO: Set trapping animation on brute
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.target, fighter)) {
      return {
        ...fighter,
        animation: 'trapped',
      };
    }

    return fighter;
  }));
};

export default trap;