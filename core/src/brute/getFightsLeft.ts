import dayjs from 'dayjs';
import { getMaxFightsPerDay } from './getMaxFightsPerDay.js';
import { CalculatedBrute } from '../types.js';
import { Event, EventType } from '@labrute/prisma';

export const getFightsLeft = (
  brute: Pick<CalculatedBrute, 'id' | 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
  currentEvent: Pick<Event, 'type'> | null
) => {
  // Battle royale brutes don't have access to the arena
  if (brute.eventId && currentEvent?.type === EventType.battleRoyale) {
    return 0;
  }

  if (dayjs.utc(brute.lastFight).isSame(dayjs.utc(), 'day')) {
    return brute.fightsLeft;
  }

  return getMaxFightsPerDay(brute);
};
