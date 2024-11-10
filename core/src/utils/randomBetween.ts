import Rand from "rand-seed";

/**
 * INTEGERS ONLY
 */
const randomBetween = (min: number, max: number, generator?: Rand) => {
  if (min > max) return 0;
  if (min === max) return min;

  const random = generator ? generator.next() : Math.random();

  return Math.floor(random * (max - min + 1) + min);
};

export default randomBetween;
