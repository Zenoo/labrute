/* eslint-disable no-param-reassign */
import { Tweener } from 'pixi-tweener';
import { AnimationFighter } from './findFighter';

const getFadeFactor = (
  fighter: AnimationFighter,
  altitude: number,
) => (fighter.animation.baseHeight - altitude * 0.75) / fighter.animation.baseHeight;

const updateShadow = (
  fighter: AnimationFighter,
) => {
  const altitude = fighter.animation.container.zIndex - fighter.animation.container.y;
  fighter.animation.shadow.y = altitude;

  const fadeFactor = getFadeFactor(fighter, altitude);
  fighter.animation.shadow.alpha = fadeFactor;
  fighter.animation.shadow.scale.set(0.5 + fadeFactor * 0.5, 0.5 + fadeFactor * 0.5);
};

const tweenShadow = async ({
  fighter,
  speed,
  duration,
  ease,
  endAltitude,
}: {
  fighter: AnimationFighter;
  speed: React.MutableRefObject<number>,
  duration: number,
  ease: (t: number) => number,
  endAltitude: number,
}) => {
  const targetFadeFactor = getFadeFactor(fighter, endAltitude);

  updateShadow(fighter);

  const shadowAnimations = [];

  // Tweener for y and alpha
  shadowAnimations.push(Tweener.add({
    target: fighter.animation.shadow,
    duration: duration / speed.current,
    ease,
  }, {
    y: endAltitude,
    alpha: targetFadeFactor,
  }));

  // Tweener for scale
  shadowAnimations.push(Tweener.add({
    target: fighter.animation.shadow.scale,
    duration: duration / speed.current,
    ease,
  }, {
    x: 0.5 + targetFadeFactor * 0.5,
    y: 0.5 + targetFadeFactor * 0.5,
  }));

  // Wait for the animations
  await Promise.all(shadowAnimations);
};

export { updateShadow, tweenShadow };
