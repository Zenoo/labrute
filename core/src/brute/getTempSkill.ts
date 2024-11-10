import { Brute, FightModifier, SkillName } from '@labrute/prisma';
import { skills } from './skills';
import Rand from 'rand-seed';
import moment from 'moment';
import randomBetween from '../utils/randomBetween';

const unavailableTemporarySkills: SkillName[] = [SkillName.backup];

export const getTempSkill = (
  brute: Pick<Brute, 'id' | 'skills'>,
  modifiers: FightModifier[],
) => {
  if (!modifiers.includes(FightModifier.randomSkill)) {
    return null;
  }

  // Seeded random number
  const random = new Rand(`${brute.id}-randomSkill-${moment.utc().format('YYYY-MM-DD')}`);
  const skillIndex = randomBetween(0, 200, random);

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
