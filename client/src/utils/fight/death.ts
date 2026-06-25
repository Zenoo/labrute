
import { DeathStep } from '@labrute/core';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { getFighterType } from './utils/getFighterType';
import { tween } from './utils/tween';

export const death = (
  fighters: AnimationFighter[],
  step: DeathStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  fighter.dead = true;

  const animationEnded = fighter.animation.waitForEvent('death:drop');

  // Set animation to `death`
  fighter.animation.setAnimation('death');

  // Fade out shadow
  const deathShadowAlpha = getFighterType(fighter) === 'brute' ? 0.8 : 0;
  const fadeOutDuration = getFighterType(fighter) === 'brute' ? 1 : 0.4;
  tween(fighter.animation.shadow, {
    alpha: deathShadowAlpha,
    duration: fadeOutDuration / speed.current,
    ease: 'none',
  });

  // If brute, also decrease shadow size
  if (getFighterType(fighter) === 'brute') {
    tween(fighter.animation.shadow.scale, {
      x: 0.65,
      y: 0.7,
      duration: fadeOutDuration / speed.current,
      ease: 'none',
    });
  }

  // Wait for animation to end
  animationEnded.then(() => {
    // Decrease opacity in clan wars
    if (isClanWar) {
      // Decrease opacity
      tween(fighter.animation.container, {
        alpha: 0,
        duration: 0.5 / speed.current,
        ease: 'none',
      });
    }
  }).catch(console.error);
};
