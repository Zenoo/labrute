import { Brute, FightModifier, SkillName } from '@labrute/prisma';
import { EventFightsPerDay, FIGHTS_PER_DAY } from '../constants';
import { getTempSkill } from './getTempSkill';

export const getMaxFightsPerDay = (
  brute: Pick<Brute, 'id' | 'skills' | 'eventId'>,
  modifiers: FightModifier[],
) => {
  const base = brute.eventId ? EventFightsPerDay : FIGHTS_PER_DAY;

  return ((brute.skills.includes('regeneration') || getTempSkill(brute, modifiers) === SkillName.regeneration)
    ? base + 2
    : base);
};
