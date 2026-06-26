import { gsap } from 'gsap';
import { isFightDisposing } from './lifecycle';

export const Easing = {
  easeTo: (pos: number) => Math.pow(pos, 0.25),
  easeFrom: (pos: number) => Math.pow(pos, 4),
  easeOutQuad: (pos: number) => -(Math.pow(pos - 1, 2) - 1),
  easeInQuad: (pos: number) => Math.pow(pos, 2),
  easeOutCubic: (pos: number) => Math.pow(pos - 1, 3) + 1,
  easeInCubic: (pos: number) => Math.pow(pos, 3)
};

// Small helper to make `gsap.to` return a real Promise
export const tween = (target: gsap.TweenTarget, vars: gsap.TweenVars) => new Promise((resolve) => {
  if (isFightDisposing()) {
    resolve(undefined);
    return;
  }

  gsap.to(target, { ...vars, onComplete: resolve });
});
