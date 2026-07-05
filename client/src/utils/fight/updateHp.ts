
import { AnimationFighter } from './utils/findFighter';
import { tween } from './utils/tween';

export const updateHp = (
  fighters: AnimationFighter[],
  fighter: AnimationFighter,
  hp: number,
  speed: React.RefObject<number>,
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
  // For some reason, allowing the width to be 0 causes to right team HP bar to overflow right instead of left ...
  const newWidth = Math.max(1, Math.min(236, percent));

  hpBar.width = newWidth;

  if (fix) {
    hpBarPhantom.width = newWidth;
  } else {
    tween(hpBarPhantom, {
      duration: 0.25 / speed.current,
      delay: 0.25 / speed.current,
      ease: 'none',
      width: newWidth,
    }).catch((error) => {
      console.error(error);
    });
  }
};
