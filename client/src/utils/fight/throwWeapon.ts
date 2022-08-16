import { ThrowStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const throwWeapon = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: ThrowStep,
) => {
  // Remove weapon from brute
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.fighter, fighter)) {
      return {
        ...fighter,
        weapons: fighter.weapons.filter((weapon) => weapon.name !== step.weapon),
      };
    }

    return fighter;
  }));
};

export default throwWeapon;