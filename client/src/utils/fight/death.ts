/* eslint-disable no-void */
import { DeathStep } from '@labrute/core';

import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';
import getFighterType from './utils/getFighterType';

const death = (
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
  void Tweener.add({
    target: fighter.animation.shadow,
    duration: fadeOutDuration / speed.current,
    ease: Easing.linear,
  }, { alpha: deathShadowAlpha });

  // If brute, also decrease shadow size
  if (getFighterType(fighter) === 'brute') {
    void Tweener.add({
      target: fighter.animation.shadow.scale,
      duration: fadeOutDuration / speed.current,
      ease: Easing.linear,
    }, { x: 0.65, y: 0.7 });
  }

  // Wait for animation to end
  animationEnded.then(() => {
    // Decrease opacity in clan wars
    if (isClanWar) {
      // Decrease opacity
      Tweener.add({
        target: fighter.animation.container,
        duration: 0.5 / speed.current,
        ease: Easing.linear,
      }, {
        alpha: 0,
      }).catch(console.error);
    }
  }).catch(console.error);
};

export default death;
