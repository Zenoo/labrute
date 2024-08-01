/* eslint-disable no-param-reassign */
import { Tweener } from 'pixi-tweener';
import { AnimationFighter } from './utils/findFighter';

const updateHp = (
  fighters: AnimationFighter[],
  fighter: AnimationFighter,
  hp: number,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
  fix?: boolean
) => {
  let { hpBar, hpBarPhantom, maxHp } = fighter;

  if (isClanWar && !fighter.master) {
    // Find the hp bar in the list of fighters
    const fighterWithHpBar = fighters.find((f) => f.team === fighter.team && f?.hpBar);

    hpBar = fighterWithHpBar?.hpBar;
    hpBarPhantom = fighterWithHpBar?.hpBarPhantom;

    // Max HP is the sum of all the fighters' max HP
    maxHp = fighters
      .filter((f) => f.team === fighter.team)
      .reduce((acc, f) => acc + f.maxHp, 0);
  }

  if (!hpBar || !hpBarPhantom) {
    return;
  }

  // Prevent overhits
  let realHpChange = hp;

  // Damage
  if (hp < 0) {
    if (fighter.hp <= 0) {
      realHpChange = 0;
    } else if (fighter.hp + hp < 0) {
      realHpChange = -fighter.hp;
    }
  }

  // Keep track of HP
  fighter.hp += realHpChange;

  const percent = (realHpChange / maxHp) * 236;

  let newWidth = 0;

  if (fighter.animation.team === 'left') {
    if (fix) {
      newWidth = percent;
    } else {
      newWidth = hpBar.width + percent;
    }
  } else if (fix) {
    newWidth = -percent;
  } else {
    newWidth = hpBar.width - percent;
  }

  if (fighter.animation.team === 'left' && newWidth < 0) {
    newWidth = 0;
  } else if (fighter.animation.team === 'right' && newWidth > 0) {
    newWidth = 0;
  }

  hpBar.width = newWidth;

  Tweener.add({
    target: hpBarPhantom,
    duration: 0.25 / speed.current,
    delay: 0.25 / speed.current,
  }, {
    width: newWidth,
  }).catch((error) => {
    console.error(error);
  });
};

export default updateHp;
