import { BlockStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const block = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: BlockStep,
) => {
  // Set block animation on target
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.fighter, fighter)) {
      return {
        ...fighter,
        animation: 'block',
      };
    }

    return fighter;
  }));
};

export default block;