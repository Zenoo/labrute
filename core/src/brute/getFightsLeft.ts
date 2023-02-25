import { Brute } from '@labrute/prisma';
import moment from 'moment';
import getMaxFightsPerDay from './getMaxFightsPerDay';

const getFightsLeft = (brute: Brute) => (moment.utc(brute.lastFight).isSame(moment.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFightsPerDay(brute));

export default getFightsLeft;
