import dayjs from 'dayjs';
import { getMaxFightsPerDay } from './getMaxFightsPerDay';
import { CalculatedBrute } from '../types';

export const getFightsLeft = (
  brute: Pick<CalculatedBrute, 'id' | 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
) => (dayjs.utc(brute.lastFight).isSame(dayjs.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute));
