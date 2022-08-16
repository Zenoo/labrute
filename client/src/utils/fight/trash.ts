import { TrashStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const trash = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: TrashStep,
) => {
  // Remove weapon from brute
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.brute, fighter)) {
      return {
        ...fighter,
        weapons: fighter.weapons.filter((weapon) => weapon.name !== step.name),
      };
    }

    return fighter;
  }));
};

export default trash;