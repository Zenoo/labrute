import { Brute } from '@labrute/prisma';
import moment from 'moment';
import getMaxFightsPerDay from './getMaxFightsPerDay';

const getFightsLeft = (
  brute: Pick<Brute, 'lastFight' | 'fightsLeft' | 'skills' | 'eventId'>,
  tempSkillIndex: number | null
) => (moment.utc(brute.lastFight).isSame(moment.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute, tempSkillIndex));

export default getFightsLeft;
