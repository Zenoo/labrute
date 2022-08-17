import { ArriveStep } from '@eternaltwin/labrute-core/types';
import adjustPosition from './adjustPosition.js';

import fightersEqual from './fightersEqual.js';
import { getRandomPosition } from './fightPositions.js';
import { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
import iddle from './iddle.js';

const arrive = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: ArriveStep,
) => {
  // Move fighter
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (!fightersEqual(step.fighter, fighter)) {
      return fighter;
    }

    const position = getRandomPosition(prevFighters, fighter.team);

    return {
      ...fighter,
      animation: 'arrive',
      x: adjustPosition(position.x, 'x', fighter),
      y: adjustPosition(position.y, 'y', fighter),
    };
  }));

  // Set iddle animation
  iddle(setFighters, step.fighter, getMoveDuration('arrive', step.fighter));
};

export default arrive;