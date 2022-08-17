import { HitStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
import getMoveDuration from './getMoveDuration.js';
import iddle from './iddle.js';

const hit = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: HitStep,
) => {
  // Set hit animation for fighters
  setFighters((prevFighters) => prevFighters.map((fighter) => {
    if (fightersEqual(step.target, fighter)) {
      return {
        ...fighter,
        animation: 'hit',
        // Remove hp
        hp: step.damage >= fighter.hp ? 0 : fighter.hp - step.damage,
      };
    }

    return fighter;
  }));

  // Return hit fighter to iddle animation
  iddle(setFighters, step.target, getMoveDuration('hit', step.target));
};

export default hit;