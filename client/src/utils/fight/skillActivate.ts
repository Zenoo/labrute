import { SkillActivateStep } from '@eternaltwin/labrute-core/types';

import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';

const skillActivate = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  step: SkillActivateStep,
) => {
  if (step.skill === 'fierceBrute') {
    // Set trapped animation on target
    setFighters((prevFighters) => prevFighters.map((fighter) => {
      if (fightersEqual(step.brute, fighter)) {
        return {
          ...fighter,
          animation: 'strengthen',
        };
      }

      return fighter;
    }));
  }

  // TODO: handle other skills
};

export default skillActivate;