import { Brute } from '@labrute/prisma';
import moment from 'moment';
import { FIGHTS_PER_DAY } from '../constants';

const getMaxFights = (brute: Brute) => (brute.skills.includes('regeneration') ? FIGHTS_PER_DAY + 2 : FIGHTS_PER_DAY);

const getFightsLeft = (brute: Brute) => (moment.utc(brute.lastFight).isSame(moment.utc(), 'day')
  ? brute.fightsLeft
  : getMaxFights(brute));

export default getFightsLeft;
