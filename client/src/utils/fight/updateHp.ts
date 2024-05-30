/* eslint-disable no-param-reassign */
import { Tweener } from 'pixi-tweener';
import { AnimationFighter } from './utils/findFighter';

const updateHp = (
  brute: AnimationFighter,
  hp: number,
  speed: React.MutableRefObject<number>,
  fix?: boolean
) => {
  if (!brute.hpBar || !brute.hpBarPhantom) {
    throw new Error(`Brute HP not found: ${brute.name}`);
  }

  const percent = (hp / brute.maxHp) * 236;

  let newWidth = 0;

  if (brute.animation.team === 'left') {
    if (fix) {
      newWidth = percent;
    } else {
      newWidth = brute.hpBar.width + percent;
    }
  } else if (fix) {
    newWidth = -percent;
  } else {
    newWidth = brute.hpBar.width - percent;
  }

  if (brute.animation.team === 'left' && newWidth < 0) {
    newWidth = 0;
  } else if (brute.animation.team === 'right' && newWidth > 0) {
    newWidth = 0;
  }

  brute.hpBar.width = newWidth;

  Tweener.add({
    target: brute.hpBarPhantom,
    duration: 0.25 / speed.current,
    delay: 0.25 / speed.current,
  }, {
    width: newWidth,
  }).catch((error) => {
    console.error(error);
  });
};

export default updateHp;
