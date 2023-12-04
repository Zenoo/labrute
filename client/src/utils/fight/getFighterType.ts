import { Fighter, bosses } from '@labrute/core';
import { AnimationFighter } from './findFighter';

const getFighterType = (
  fighter: AnimationFighter | Fighter,
) => {
  let type: 'brute' | 'dog' | 'bear' | 'panther' = 'brute';
  if (fighter.type === 'pet') {
    type = fighter.name.startsWith('dog') ? 'dog' : fighter.name as 'bear' | 'panther';
  } else if (fighter.type === 'boss') {
    type = bosses.find((b) => b.name === fighter.name)?.base as 'bear' | 'panther' || 'bear';
  }

  return type;
};

export default getFighterType;