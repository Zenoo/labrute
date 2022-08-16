import { SaboteurStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const saboteur = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: SaboteurStep,
) => {
  // Remove weapon from brute
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.brute, fighter)) {
      return {
        ...fighter,
        weapons: fighter.weapons.filter((weapon) => weapon.name !== step.weapon),
      };
    }

    return fighter;
  }));
};

export default saboteur;