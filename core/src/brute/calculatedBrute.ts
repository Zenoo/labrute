import { Brute, PetName, SkillName, WeaponName } from '@labrute/prisma';

export type CalculatedBrute = Omit<Brute, 'weapons' | 'skills' | 'pets'> & {
  weapons: Partial<Record<WeaponName, number>>;
  skills: Partial<Record<SkillName, number>>;
  pets: Partial<Record<PetName, number>>;
};

export const getCalculatedBrute = (
  brute: Brute
) => {
  const calculatedBrute: CalculatedBrute = {
    ...brute,
    weapons: {},
    skills: {},
    pets: {},
  };

  return calculatedBrute;
};
