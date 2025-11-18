import { Brute, SkillName } from '@labrute/prisma';
import { EventFightsPerDay, FIGHTS_PER_DAY } from '../constants';
import { Modifiers } from '../types';
import { getTempSkill } from './getTempSkill';

export const getMaxFightsPerDay = (
  brute: Pick<Brute, 'id' | 'skills' | 'eventId'>,
  modifiers: Modifiers,
  useCache = true,
) => {
  const base = brute.eventId ? EventFightsPerDay : FIGHTS_PER_DAY;

  return ((brute.skills.includes('regeneration') || getTempSkill(brute, modifiers, useCache) === SkillName.regeneration)
    ? base + 2
    : base);
};
