import { Brute, FightModifier } from '@labrute/prisma';
import weapons from './weapons';
import Rand from 'rand-seed';
import moment from 'moment';
import randomBetween from '../utils/randomBetween';

export const getTempWeapon = (
  brute: Pick<Brute, 'id' | 'weapons'>,
  modifiers: FightModifier[],
) => {
  if (!modifiers.includes(FightModifier.randomWeapon)) {
    return null;
  }

  // Seeded random number
  const random = new Rand(`${brute.id}-randomWeapon-${moment.utc().format('YYYY-MM-DD')}`);
  const weaponIndex = randomBetween(0, 200, random);

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
