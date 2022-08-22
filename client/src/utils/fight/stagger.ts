import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite } from 'pixi.js';

const stagger = async (animation: AnimatedSprite, team: 'left' | 'right') => {
  await Tweener.add({
    target: animation,
    duration: 0.05,
    ease: Easing.linear
  }, { x: animation.x + (team === 'left' ? -8 : 8) });

  await Tweener.add({
    target: animation,
    duration: 0.05,
    ease: Easing.linear
  }, { x: animation.x + (team === 'left' ? 4 : -4) });

  await Tweener.add({
    target: animation,
    duration: 0.05,
    ease: Easing.linear
  }, { x: animation.x + (team === 'left' ? -4 : 4) });

  await Tweener.add({
    target: animation,
    duration: 0.05,
    ease: Easing.linear
  }, { x: animation.x + (team === 'left' ? 4 : -4) });

  await Tweener.add({
    target: animation,
    duration: 0.1,
    ease: Easing.linear
  }, { x: animation.x + (team === 'left' ? -4 : 4) });

  await Tweener.add({
    target: animation,
    duration: 0.1,
    ease: Easing.linear
  }, { x: animation.x + (team === 'left' ? 8 : -8) });

  await Tweener.add({
    target: animation,
    duration: 0.1,
    ease: Easing.linear
  }, { x: animation.x });
};

export default stagger;