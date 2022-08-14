import fightersEqual from './fightersEqual.js';
import { AnimationFighter } from './findFighter.js';
import { StepFighter } from '@eternaltwin/labrute-core/types';

const iddle = (
  setFighters: React.Dispatch<React.SetStateAction<AnimationFighter[]>>,
  fighter: StepFighter,
  timeout: number,
) => {
  setTimeout(() => {
    setFighters((prevFighters) => prevFighters.map((f) => {
      if (!fightersEqual(fighter, f)) {
        return f;
      }

      return {
        ...f,
        animation: 'iddle',
        inverted: f.team === 'left',
      };
    }));
  }, timeout);
};

export default iddle;