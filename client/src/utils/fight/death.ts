import { DeathStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const death = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: DeathStep,
) => {
  // Set death animation
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (!fightersEqual(step.fighter, fighter)) {
      return fighter;
    }

    return {
      ...fighter,
      animation: fighter.type === 'brute' ? 'lose' : 'death',
    };
  }));
};

export default death;