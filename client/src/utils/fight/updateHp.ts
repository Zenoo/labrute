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
  const { hpBar, hpBarPhantom } = fighter;
  let { maxHp } = fighter;

  if (!hpBar || !hpBarPhantom) {
    return;
  }

  if (fix) {
    // Hp is set to fixed value
    fighter.hp = hp;
  } else {
    // Hp change
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
  }

  let currentHP = 0;

  if (isClanWar && !fighter.master) {
    // hp is the sum of all the fighters' hp
    currentHP = fighters
      .filter((f) => f.team === fighter.team && !f.master)
      .reduce((acc, f) => acc + f.hp, 0);

    // Max HP is the sum of all the fighters' max HP
    maxHp = fighters
      .filter((f) => f.team === fighter.team && !f.master)
      .reduce((acc, f) => acc + f.maxHp, 0);
  } else {
    currentHP = fighter.hp;
  }

  const percent = (currentHP / maxHp) * 236;

  let newWidth = (fighter.team === 'L') ? percent : -percent;

  if (fighter.team === 'L' && newWidth < 0) {
    newWidth = 0;
  } else if (fighter.team === 'R' && newWidth > 0) {
    newWidth = 0;
  }

  hpBar.width = newWidth;

  if (fix) {
    hpBarPhantom.width = newWidth;
  } else {
    Tweener.add({
      target: hpBarPhantom,
      duration: 0.25 / speed.current,
      delay: 0.25 / speed.current,
    }, {
      width: newWidth,
    }).catch((error) => {
      console.error(error);
    });
  }
};

export default updateHp;
