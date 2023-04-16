import { Easing, Tweener } from 'pixi-tweener';
import { Container } from 'pixi.js';

const stagger = async (
  container: Container,
  team: 'left' | 'right',
  speed: React.MutableRefObject<number>,
) => {
  await Tweener.add({
    target: container,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: container.x + (team === 'left' ? -8 : 8) });

  await Tweener.add({
    target: container,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: container.x + (team === 'left' ? 4 : -4) });

  await Tweener.add({
    target: container,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: container.x + (team === 'left' ? -4 : 4) });

  await Tweener.add({
    target: container,
    duration: 0.05 / speed.current,
    ease: Easing.linear
  }, { x: container.x + (team === 'left' ? 4 : -4) });

  await Tweener.add({
    target: container,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: container.x + (team === 'left' ? -4 : 4) });

  await Tweener.add({
    target: container,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: container.x + (team === 'left' ? 8 : -8) });

  await Tweener.add({
    target: container,
    duration: 0.1 / speed.current,
    ease: Easing.linear
  }, { x: container.x });
};

export default stagger;