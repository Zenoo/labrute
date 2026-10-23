import { gsap } from 'gsap';
import { isFightDisposing } from './lifecycle';
import { getFightClock } from './FightClock';

export const Easing = {
  easeTo: (pos: number) => Math.pow(pos, 0.25),
  easeFrom: (pos: number) => Math.pow(pos, 4),
  easeOutQuad: (pos: number) => -(Math.pow(pos - 1, 2) - 1),
  easeInQuad: (pos: number) => Math.pow(pos, 2),
  easeOutCubic: (pos: number) => Math.pow(pos - 1, 3) + 1,
  easeInCubic: (pos: number) => Math.pow(pos, 3)
};

// Fight tweens share the PIXI clock so pause and seek also apply to them.
export const tween = (target: gsap.TweenTarget, vars: gsap.TweenVars) => new Promise((resolve) => {
  if (isFightDisposing()) {
    resolve(undefined);
    return;
  }

  getFightClock().tween(target, { ...vars, onComplete: resolve });
});

export const fightDelay = (seconds: number) => tween({}, { duration: seconds });
