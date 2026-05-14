import { Brute, FightModifier } from '@labrute/prisma';
import dayjs from 'dayjs';
import { randomBetween } from '../utils/index.js';
import { weaponList } from './weapons.js';
import { Modifiers } from '../types.js';

export const getTempWeapon = (
  brute: Pick<Brute, 'id' | 'weapons'>,
  modifiers: Modifiers,
) => {
  if (!modifiers[FightModifier.randomWeapon]) {
    return null;
  }

  // Seeded random number
  const weaponIndex = randomBetween(0, 200, `${brute.id}-randomWeapon-${dayjs.utc().format('YYYY-MM-DD')}`);

  const unownedWeapons = weaponList.filter((weapon) => !brute.weapons.includes(weapon.name));

  if (unownedWeapons.length === 0) {
    return null;
  }

  const tempWeapon = unownedWeapons[weaponIndex % unownedWeapons.length];

  if (!tempWeapon) {
    throw new Error('No temp weapon found');
  }

  return tempWeapon.name;
};
