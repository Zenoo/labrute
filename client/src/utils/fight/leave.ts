import { MOVE_DURATION } from '@eternaltwin/labrute-core/constants';
import { LeaveStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
import iddle from './iddle.js';

const leave = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: LeaveStep,
) => {
  // Move fighter
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (!fightersEqual(step.fighter, fighter)) {
      return fighter;
    }

    return {
      ...fighter,
      animation: 'run',
      x: fighter.team === 'left' ? -100 : 500,
    };
  }));

  // Set iddle animation
  iddle(setFighters, step.fighter, MOVE_DURATION);
};

export default leave;