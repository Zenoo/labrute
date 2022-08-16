import { MOVE_DURATION } from '@eternaltwin/labrute-core/constants';
import { ArriveStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { getRandomPosition } from './fightPositions.js';
import { AnimationFighter } from './findFighter.js';
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
      x: position.x,
      y: position.y,
    };
  }));

  // Set iddle animation
  iddle(setFighters, step.fighter, MOVE_DURATION * 2);
};

export default arrive;