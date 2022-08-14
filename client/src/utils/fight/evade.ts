import { EvadeStep } from '@eternaltwin/labrute-core/types';
import { MOVE_DURATION } from '@eternaltwin/labrute-core/constants';
import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
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
  iddle(setFighters, step.fighter, MOVE_DURATION);
};

export default evade;