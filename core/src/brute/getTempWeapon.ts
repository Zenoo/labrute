import { Brute, FightModifier } from '@labrute/prisma';
import dayjs from 'dayjs';
import { randomBetween } from '../utils';
import { weapons } from './weapons';

export const getTempWeapon = (
  brute: Pick<Brute, 'id' | 'weapons'>,
  modifiers: FightModifier[],
) => {
  if (!modifiers.includes(FightModifier.randomWeapon)) {
    return null;
  }

  // Seeded random number
  const weaponIndex = randomBetween(0, 200, `${brute.id}-randomWeapon-${dayjs.utc().format('YYYY-MM-DD')}`);

  const unownedWeapons = weapons.filter((weapon) => !brute.weapons.includes(weapon.name));

  if (unownedWeapons.length === 0) {
    return null;
  }

  const tempWeapon = unownedWeapons[weaponIndex % unownedWeapons.length];

  if (!tempWeapon) {
    throw new Error('No temp weapon found');
  }

  return tempWeapon.name;
};
