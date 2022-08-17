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

    const unadjustedX = target.x - adjustPosition(0, 'x', target);
    const unadjustedY = target.y - adjustPosition(0, 'y', target);

    return {
      ...fighter,
      animation: 'run',
      x: adjustPosition(
        (500 - unadjustedX) - target.width - fighter.width,
        'x',
        fighter
      ),
      y: adjustPosition(unadjustedY, 'y', fighter),
    };
  }));

  // Return to iddle after move
  iddle(setFighters, step.fighter, getMoveDuration('run', step.fighter));
};

export default moveTo;