import { AnimationFighter } from './findFighter.js';
import { POSITION_OFFSET } from '@eternaltwin/labrute-core/constants';
import { Fighter, PetName } from '@eternaltwin/labrute-core/types';

const adjustPosition = (
  position: number,
  axis: 'x' | 'y',
  fighter: AnimationFighter | Fighter,
) => {
  const type = fighter.type === 'pet'
    ? fighter.name as PetName
    : 'brute';

  return position - POSITION_OFFSET[type][axis];
};

export default adjustPosition;