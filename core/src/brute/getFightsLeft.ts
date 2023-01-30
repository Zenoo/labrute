import { Brute } from '@labrute/prisma';
import moment from 'moment';
import { FIGHTS_PER_DAY } from '../constants';

const getFightsLeft = (brute: Brute) => (moment(brute.lastFight).isSame(moment(), 'day')
  ? brute.fightsLeft
  : FIGHTS_PER_DAY);

export default getFightsLeft;
