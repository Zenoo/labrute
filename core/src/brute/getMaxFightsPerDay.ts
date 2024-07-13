import { Brute, SkillName } from '@labrute/prisma';
import { FIGHTS_PER_DAY } from '../constants';
import { getTempSkill } from './getTempSkill';

const getMaxFightsPerDay = (
  brute: Pick<Brute, 'skills'>,
  tempSkillIndex: number | null
) => ((brute.skills.includes('regeneration') || getTempSkill(brute, tempSkillIndex) === SkillName.regeneration)
  ? FIGHTS_PER_DAY + 2
  : FIGHTS_PER_DAY);

export default getMaxFightsPerDay;
