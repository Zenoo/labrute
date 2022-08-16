import { SurviveStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const survive = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: SurviveStep,
) => {
  // Set brute HP to 1
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.brute, fighter)) {
      return {
        ...fighter,
        hp: 1,
      };
    }

    return fighter;
  }));
};

export default survive;