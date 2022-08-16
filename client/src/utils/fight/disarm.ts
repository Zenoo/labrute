import { DisarmStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const disarm = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: DisarmStep,
) => {
  // Remove weapon from target
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.opponent, fighter)) {
      return {
        ...fighter,
        weapons: fighter.weapons.filter((weapon) => weapon.name !== step.weapon),
      };
    }

    return fighter;
  }));
};

export default disarm;