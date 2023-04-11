import { UserWithBrutes } from '../types';
import { NEW_BRUTE_BASE_COST } from '../constants';

// Base cost + 1/3 of the base cost for each brute after the 3rd one
const getSacriPointsNeeded = (user: UserWithBrutes) => (user.brutes.length < 3
  ? 0
  : Math.ceil(
    NEW_BRUTE_BASE_COST
    + Math.max(user.brutes.length - 3, 0) * NEW_BRUTE_BASE_COST * (1 / 3)
  ));

export default getSacriPointsNeeded;