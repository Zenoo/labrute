import { LeaveStep } from '@eternaltwin/labrute-core/types';
import adjustPosition from './adjustPosition.js';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
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
      x: adjustPosition(-100, 'x', fighter),
    };
  }));

  // Set iddle animation
  iddle(setFighters, step.fighter, getMoveDuration('run', step.fighter));
};

export default leave;