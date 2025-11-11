import { Brute, FightModifier } from '@labrute/prisma';
import dayjs from 'dayjs';
import { getMaxFightsPerDay } from './getMaxFightsPerDay';

export const getFightsLeft = (
  brute: Pick<Brute, 'id' | 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
  modifiers: FightModifier[],
  useCache = true,
) => (dayjs.utc(brute.lastFight).isSame(dayjs.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute, modifiers, useCache));
