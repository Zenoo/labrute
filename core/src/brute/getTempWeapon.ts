import { Brute } from '@labrute/prisma';
import weapons from './weapons';

export const getTempWeapon = (
  brute: Pick<Brute, 'weapons'>,
  weaponIndex: number | null
) => {
  if (weaponIndex === null) {
    return null;
  }

  const unownedWeapons = weapons.filter((weapon) => !brute.weapons.includes(weapon.name));

  const tempWeapon = unownedWeapons[weaponIndex % unownedWeapons.length];

  if (!tempWeapon) {
    throw new Error('No temp weapon found');
  }

  return tempWeapon.name;
};
