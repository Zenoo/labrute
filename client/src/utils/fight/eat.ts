import { EatStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const eat = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: EatStep,
) => {
  // Heal brute
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.brute, fighter)) {
      return {
        ...fighter,
        hp: fighter.hp + step.heal,
      };
    }

    return fighter;
  }));
};

export default eat;