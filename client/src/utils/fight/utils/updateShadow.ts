/* eslint-disable no-param-reassign */
import { Tweener } from 'pixi-tweener';
import { AnimationFighter } from './findFighter';

const getFadeFactor = (
  fighter: AnimationFighter,
  altitude: number,
) => Math.max(0.2, Math.min(
  1,
  (100 * (fighter.animation.baseWidth / 50) - altitude)
       / (100 * (fighter.animation.baseWidth / 50))
));

const updateShadow = (
  fighter: AnimationFighter,
  forceAltitude?: number,
  forceFadeFactor?: number,
) => {
  const altitude = forceAltitude
    ?? fighter.animation.container.zIndex - fighter.animation.container.y;
  fighter.animation.shadow.y = altitude;

  const fadeFactor = forceFadeFactor ?? getFadeFactor(fighter, altitude);
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

const airbornMove = async ({
  fighter,
  speed,
  duration,
  ease,
  endPosition,
}: {
  fighter: AnimationFighter;
  speed: React.MutableRefObject<number>,
  duration: number,
  ease: (t: number) => number,
  endPosition: { y: number, x?: number, zIndex?: number },
}) => {
  const animations = [];

  // Add movement tweener
  animations.push(Tweener.add({
    target: fighter.animation.container,
    duration: duration / speed.current,
    ease,
  }, endPosition));

  // Add a tweener for the shadow
  animations.push(tweenShadow({
    fighter,
    speed,
    duration,
    ease,
    endAltitude: (endPosition.zIndex ?? fighter.animation.container.zIndex) - endPosition.y,
  }));

  // Wait for the animations
  await Promise.all(animations);
};

export { updateShadow, tweenShadow, airbornMove };
