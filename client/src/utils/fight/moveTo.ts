import { MoveStep } from '@eternaltwin/labrute-core/types';

import adjustPosition from './adjustPosition.js';
import fightersEqual from './fightersEqual.js';
import findFighter, { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
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
      x: adjustPosition(
        (500 - adjustPosition(target.x, 'x', target)) - fighter.width - target.width,
        'x',
        fighter,
      ),
      y: adjustPosition(target.y, 'y', target),
    };
  }));

  // Return to iddle after move
  iddle(setFighters, step.fighter, getMoveDuration('run', step.fighter));
};

export default moveTo;