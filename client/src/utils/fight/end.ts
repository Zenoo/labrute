import { EndStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const end = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: EndStep,
) => {
  // Set winner animation
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.winner, fighter)) {
      return {
        ...fighter,
        animation: 'win',
      };
    }

    return fighter;
  }));
};

export default end;