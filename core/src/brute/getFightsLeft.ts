import { Brute, FightModifier } from '@labrute/prisma';
import moment from 'moment';
import { getMaxFightsPerDay } from './getMaxFightsPerDay';

export const getFightsLeft = (
  brute: Pick<Brute, 'id' | 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
  modifiers: FightModifier[],
) => (moment.utc(brute.lastFight).isSame(moment.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute, modifiers));
