import { Brute, FightModifier, SkillName } from '@labrute/prisma';
import dayjs from 'dayjs';
import { randomBetween } from '../utils';
import { skills } from './skills';

const unavailableTemporarySkills: SkillName[] = [SkillName.backup];

export const getTempSkill = (
  brute: Pick<Brute, 'id' | 'skills'>,
  modifiers: FightModifier[],
) => {
  if (!modifiers.includes(FightModifier.randomSkill)) {
    return null;
  }

  // Seeded random number
  const skillIndex = randomBetween(0, 200, `${brute.id}-randomSkill-${dayjs.utc().format('YYYY-MM-DD')}`);

  const unownedSkills = skills.filter((skill) => !brute.skills.includes(skill.name)
    && !unavailableTemporarySkills.includes(skill.name));

  if (unownedSkills.length === 0) {
    return null;
  }

  const tempSkill = unownedSkills[skillIndex % unownedSkills.length];

  if (!tempSkill) {
    throw new Error('No temp skill found');
  }

  return tempSkill.name;
};
