import { Brute, FightModifier } from '@labrute/prisma';
import dayjs from 'dayjs';
import getMaxFightsPerDay from './getMaxFightsPerDay';

const getFightsLeft = (
  brute: Pick<Brute, 'id' | 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
  modifiers: FightModifier[],
) => (dayjs.utc(brute.lastFight).isSame(dayjs.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute, modifiers));

export default getFightsLeft;
