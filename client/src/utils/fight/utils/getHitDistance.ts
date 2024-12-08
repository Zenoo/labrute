import { weapons } from '@labrute/core';
import { AnimationFighter } from './findFighter';

const getHitDistance = (
  fighter: AnimationFighter,
  target: AnimationFighter,
  isCountered: boolean = false,
  isSameSpace: boolean = false,
): number => {
  let distance = 0;

  // Same space
  if (isSameSpace) {
    distance = 20;
  }

  // Weapon reach
  if (!isSameSpace) {
    distance += fighter.animation.baseWidth * 0.5 + target.animation.baseWidth * 0.5;
    // Bigger distance for bosses
    if (target.type === 'boss') distance *= 0.7;

    let reach = 0;
    // Countered, take opponent weapon reach into account
    if (isCountered) {
      reach = weapons.find((w) => w.name === target.animation.weapon)?.reach || 0;
    } else {
      // Take fighter weapon reach into account
      reach = weapons.find((w) => w.name === fighter.animation.weapon)?.reach || 0;
    }

    distance += reach * 16;
  }
  return distance;
};

export default getHitDistance;