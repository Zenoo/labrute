import { Brute } from '@labrute/prisma';
import { FIGHTS_PER_DAY } from '../constants';

const getMaxFightsPerDay = (brute: Brute) => (brute.skills.includes('regeneration') ? FIGHTS_PER_DAY + 2 : FIGHTS_PER_DAY);

export default getMaxFightsPerDay;