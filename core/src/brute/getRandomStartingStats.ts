import { BRUTE_STARTING_POINTS } from '../constants';
import { randomBetween } from '../utils/randomBetween';

export const getRandomStartingStats = () => {
  // Starting budget
  let availablePoints = BRUTE_STARTING_POINTS;

  // Enrudance (2 to 5)
  const endurance = randomBetween(2, 5);
  availablePoints -= endurance;

  // Strength (2 to 5)
  const strength = Math.min(randomBetween(2, 5), availablePoints - 2 * 2);
  availablePoints -= strength;

  // Agility (2 to 5)
  const agility = Math.min(randomBetween(2, 5), availablePoints - 2 * 1);
  availablePoints -= agility;

  // Speed (2 to 5)
  const speed = availablePoints;

  return {
    endurance,
    strength,
    agility,
    speed,
  };
};
