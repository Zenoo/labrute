import { SkillName } from '@labrute/prisma';
import { EventFightsPerDay, FIGHTS_PER_DAY } from '../constants';
import { CalculatedBrute } from '../types';

export const getMaxFightsPerDay = (
  brute: Pick<CalculatedBrute, 'id' | 'skills' | 'eventId'>,
) => {
  const base = brute.eventId ? EventFightsPerDay : FIGHTS_PER_DAY;

  return (brute.skills[SkillName.regeneration]
    ? base + 2
    : base);
};
