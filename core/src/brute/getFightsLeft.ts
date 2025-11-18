import { Brute } from '@labrute/prisma';
import dayjs from 'dayjs';
import { Modifiers } from '../types';
import { getMaxFightsPerDay } from './getMaxFightsPerDay';

export const getFightsLeft = (
  brute: Pick<Brute, 'id' | 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
  modifiers: Modifiers,
  useCache = true,
) => (dayjs.utc(brute.lastFight).isSame(dayjs.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute, modifiers, useCache));
