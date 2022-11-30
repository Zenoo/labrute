import moment from 'moment';
import { FIGHTS_PER_DAY } from '../constants.js';
import { Brute } from '../types.js';

const getFightsLeft = (brute: Brute) => (moment(brute.data.lastFight, 'DD/MM/YYYY').isSame(moment(), 'day')
  ? brute.data.fightsLeft
  : FIGHTS_PER_DAY);

export default getFightsLeft;
