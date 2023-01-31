import { Fighter } from '@labrute/core';
import { AnimationFighter } from './findFighter';

const getFighterType = (
  fighter: AnimationFighter | Fighter,
) => (fighter.type === 'pet'
  ? fighter.name.startsWith('dog')
    ? 'dog'
    : fighter.name === 'bear'
      ? 'bear'
      : 'panther'
  : 'brute');

export default getFighterType;