import { Easing, Tweener } from 'pixi-tweener';
import { Container, Sprite } from 'pixi.js';
import { AnimationFighter } from './findFighter';

const staggerObject = async (
  object: Container | Sprite,
  team: 'left' | 'right',
  speed: React.MutableRefObject<number>,
) => {
  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'left' ? -8 : 8) });

  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'left' ? 4 : -4) });

  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'left' ? -4 : 4) });

  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'left' ? 4 : -4) });

  await Tweener.add({
    target: object,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'left' ? -4 : 4) });

  await Tweener.add({
    target: object,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'left' ? 8 : -8) });

  await Tweener.add({
    target: object,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: object.x });
};

const stagger = async (
  fighter: AnimationFighter,
  speed: React.MutableRefObject<number>,
) => {
  const staggers = [];

  // Stagger animation
  staggers.push(staggerObject(fighter.animation.container, fighter.animation.team, speed));

  // Stagger bust
  if (fighter.bust) {
    staggers.push(staggerObject(fighter.bust, fighter.animation.team, speed));
  }

  await Promise.all(staggers);
};

export default stagger;