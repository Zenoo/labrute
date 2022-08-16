import { MOVE_DURATION } from '@eternaltwin/labrute-core/constants';
import { MoveBackStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { getRandomPosition } from './fightPositions.js';
import { AnimationFighter } from './findFighter.js';
import iddle from './iddle.js';

const moveBack = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: MoveBackStep,
) => {
  // Move fighter
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (!fightersEqual(step.fighter, fighter)) {
      return fighter;
    }

    const backPosition = getRandomPosition(prevFighters);

    return {
      ...fighter,
      animation: 'run',
      inverted: fighter.team === 'right',
      x: backPosition.x,
      y: backPosition.y,
    };
  }));

  // Return to iddle after move
  iddle(setFighters, step.fighter, MOVE_DURATION);
};

export default moveBack;