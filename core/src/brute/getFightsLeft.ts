import dayjs from 'dayjs';
import { getMaxFightsPerDay } from './getMaxFightsPerDay.js';
import { CalculatedBrute } from '../types.js';

export const getFightsLeft = (
  brute: Pick<CalculatedBrute, 'id' | 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
) => (dayjs.utc(brute.lastFight).isSame(dayjs.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute));
