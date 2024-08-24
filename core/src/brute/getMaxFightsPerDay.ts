import { Brute, SkillName } from '@labrute/prisma';
import { EventFightsPerDay, FIGHTS_PER_DAY } from '../constants';
import { getTempSkill } from './getTempSkill';

const getMaxFightsPerDay = (
  brute: Pick<Brute, 'skills' | 'eventId'>,
  tempSkillIndex: number | null
) => {
  const base = brute.eventId ? EventFightsPerDay : FIGHTS_PER_DAY;

  return ((brute.skills.includes('regeneration') || getTempSkill(brute, tempSkillIndex) === SkillName.regeneration)
    ? base + 2
    : base);
};

export default getMaxFightsPerDay;
