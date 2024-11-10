import { Easing, Tweener } from 'pixi-tweener';
import { Container, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';

const staggerObject = async (
  object: Container | Sprite,
  team: 'L' | 'R',
  speed: React.MutableRefObject<number>,
) => {
  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'L' ? -8 : 8) });

  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'L' ? 4 : -4) });

  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'L' ? -4 : 4) });

  await Tweener.add({
    target: object,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'L' ? 4 : -4) });

  await Tweener.add({
    target: object,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'L' ? -4 : 4) });

  await Tweener.add({
    target: object,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: object.x + (team === 'L' ? 8 : -8) });

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
  staggers.push(staggerObject(fighter.animation.container, fighter.team, speed));

  // Stagger bust
  if (fighter.bust && fighter.HUDFocused) {
    staggers.push(staggerObject(fighter.bust, fighter.team, speed));
  }

  await Promise.all(staggers);
};

export default stagger;
