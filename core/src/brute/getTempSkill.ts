import { Brute } from '@labrute/prisma';
import skills from './skills';

export const getTempSkill = (
  brute: Pick<Brute, 'skills'>,
  skillIndex: number | null
) => {
  if (skillIndex === null) {
    return null;
  }

  const unownedSkills = skills.filter((skill) => !brute.skills.includes(skill.name));

  const tempSkill = unownedSkills[skillIndex % unownedSkills.length];

  if (!tempSkill) {
    throw new Error('No temp skill found');
  }

  return tempSkill.name;
};
