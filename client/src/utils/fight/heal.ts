import { HealStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const heal = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: HealStep,
) => {
  // Heal brute
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.brute, fighter)) {
      return {
        ...fighter,
        hp: fighter.hp + step.amount,
      };
    }

    return fighter;
  }));
};

export default heal;