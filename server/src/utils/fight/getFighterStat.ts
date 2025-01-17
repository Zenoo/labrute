import {
  BASE_FIGHTER_STATS, DetailedFighter, FighterStat, FightStat, SkillModifiers, WeaponType,
} from '@labrute/core';
import { SkillName } from '@labrute/prisma';

export const getFighterStat = (
  fighter: DetailedFighter,
  stat: FighterStat,
  onlyStat?: 'fighter' | 'weapon',
) => {
  // Special case for dexterity as it only exists on weapons
  if (stat === 'dexterity') {
    if (onlyStat === 'fighter') return 0;

    if (fighter.activeWeapon) {
      const weaponStat = fighter.activeWeapon[stat];

      // BODYBUILDER
      if (fighter.bodybuilder && fighter.activeWeapon.types.includes(WeaponType.HEAVY)) {
        return weaponStat
          + (SkillModifiers[SkillName.bodybuilder][FightStat.DEXTERITY]?.percent ?? 0);
      }

      return weaponStat;
    }

    return fighter.type === 'brute' ? BASE_FIGHTER_STATS[stat] : 0;
  }

  // Special case for tempo as it's either weapon or base
  if (stat === 'tempo') {
    if (fighter.activeWeapon) {
      return fighter.activeWeapon[stat];
    }

    return BASE_FIGHTER_STATS[stat];
  }

  let total = onlyStat === 'weapon' ? 0 : fighter[stat];

  if (onlyStat !== 'fighter') {
    if (fighter.activeWeapon) {
      total += fighter.activeWeapon[stat];
    } else {
      total += fighter.type === 'brute'
        ? BASE_FIGHTER_STATS[stat]
        : fighter.type === 'boss'
          ? fighter[stat]
          : 0;
    }
  }

  return total;
};
