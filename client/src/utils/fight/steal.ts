import { StealStep } from '@eternaltwin/labrute-core/types';
import weapons from '@eternaltwin/labrute-core/brute/weapons';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const steal = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: StealStep,
) => {
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    // Remove weapon from target
    if (fightersEqual(step.target, fighter)) {
      return {
        ...fighter,
        weapons: fighter.weapons.filter((weapon) => weapon.name !== step.name),
      };
    }
    // Add weapon to brute
    if (fightersEqual(step.brute, fighter)) {
      return {
        ...fighter,
        weapons: [...fighter.weapons, {
          name: step.name,
          animation: weapons.find((weapon) => weapon.name === step.name)?.animation || 'slash',
        }],
      };
    }

    return fighter;
  }));
};

export default steal;