/* eslint-disable no-param-reassign */
import { Tweener } from 'pixi-tweener';
import { AnimationFighter } from './findFighter.js';

const updateHp = (brute: AnimationFighter, hp: number) => {
  if (!brute.hpBar || !brute.hpBarPhantom) {
    throw new Error(`Brute HP not found: ${brute.name}`);
  }

  const percent = (hp / brute.maxHp) * 236;

  let newWidth = 0;

  if (brute.team === 'left') {
    newWidth = brute.hpBar.width + percent;
  } else {
    newWidth = brute.hpBar.width - percent;
  }

  if (brute.team === 'left' && newWidth < 0) {
    newWidth = 0;
  } else if (brute.team === 'right' && newWidth > 0) {
    newWidth = 0;
  }

  brute.hpBar.width = newWidth;

  Tweener.add({
    target: brute.hpBarPhantom,
    duration: 0.25,
    delay: 0.25,
  }, {
    width: newWidth,
  }).catch((error) => {
    console.error(error);
  });
};

export default updateHp;