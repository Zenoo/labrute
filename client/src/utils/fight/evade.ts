import { EvadeStep } from '@eternaltwin/labrute-core/types';
import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
import iddle from './iddle.js';

const evade = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: EvadeStep,
) => {
  // Set dodge animation
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (!fightersEqual(step.fighter, fighter)) {
      return fighter;
    }

    return {
      ...fighter,
      animation: 'evade',
    };
  }));

  // Return to iddle after move
  iddle(setFighters, step.fighter, getMoveDuration('evade', step.fighter));
};

export default evade;