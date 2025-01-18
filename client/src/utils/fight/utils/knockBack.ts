import { AnimationFighter } from './findFighter';
import { Easing, Tweener } from 'pixi-tweener';

// Sign a knockback relative to a fighter and clamp it so it stays in the stage
const getRealKnockBack = (
  fighter: AnimationFighter,
  unsignedKnockBack: number,
): number => {
  const edgeScreenMargin = fighter.animation.baseWidth / 2 + 2;
  let realKnockBack = unsignedKnockBack;
  if (fighter.team === 'L') {
    realKnockBack = Math.min(fighter.animation.container.x - edgeScreenMargin, realKnockBack);
    realKnockBack = Math.max(0, realKnockBack);
    realKnockBack = -realKnockBack;
  } else {
    realKnockBack = Math.min(500 - fighter.animation.container.x - edgeScreenMargin, realKnockBack);
    realKnockBack = Math.max(0, realKnockBack);
  }
  return realKnockBack;
};

const knockBack = async (
  fighter: AnimationFighter,
  speed: React.MutableRefObject<number>,
  unsignedKnockBack: number,
  duration: number = 0.5,
) => {
  const knockBackDistance = getRealKnockBack(fighter, unsignedKnockBack);
  // Move fighter
  await Tweener.add({
    target: fighter.animation.container,
    duration: duration / speed.current,
    ease: Easing.linear
  }, {
    x: fighter.animation.container.x + knockBackDistance,
  });
};

export {
  getRealKnockBack,
  knockBack,
};
