import { MoveBackStep } from '@eternaltwin/labrute-core/types';
import adjustPosition from './adjustPosition.js';

import fightersEqual from './fightersEqual.js';
import { getRandomPosition } from './fightPositions.js';
import { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
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

    const backPosition = getRandomPosition(prevFighters, fighter.team);

    return {
      ...fighter,
      animation: 'run',
      inverted: fighter.team === 'right',
      x: adjustPosition(backPosition.x, 'x', fighter),
      y: adjustPosition(backPosition.y, 'y', fighter),
    };
  }));

  // Return to iddle after move
  iddle(setFighters, step.fighter, getMoveDuration('run', step.fighter));
};

export default moveBack;