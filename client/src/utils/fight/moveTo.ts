import { MoveStep } from '@eternaltwin/labrute-core/types';
import { MOVE_DURATION } from '@eternaltwin/labrute-core/constants';

import fightersEqual from './fightersEqual.js';
import findFighter, { AnimationFighter } from './findFighter.js';
import iddle from './iddle.js';

const moveTo = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: MoveStep,
) => {
  // Move fighter
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (!fightersEqual(step.fighter, fighter)) {
      return fighter;
    }

    const target = findFighter(prevFighters, step.target);

    if (!target) {
      console.error('Target not found');
      return fighter;
    }

    return {
      ...fighter,
      animation: 'run',
      x: target.team === 'left' ? target.x + fighter.distanceBetweenFighters : target.x - fighter.distanceBetweenFighters,
      y: target.y,
    };
  }));

  // Return to iddle after move
  iddle(setFighters, step.fighter, MOVE_DURATION);
};

export default moveTo;