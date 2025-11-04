import Rand from 'rand-seed';

/**
 * INTEGERS ONLY
 */
export const randomBetween = (min: number, max: number, generator?: Rand) => {
  if (min > max) return 0;
  if (min === max) return min;

  const random = generator ? generator.next() : Math.random();

  return Math.floor(random * (max - min + 1) + min);
};

export const randomItem = <T>(items: T[]): T => {
  if (!items.length) {
    throw new Error('No items');
  }

  if (items.length === 1) {
    const item = items[0];

    if (!item) {
      throw new Error('No item');
    }
    return item;
  }

  const index = randomBetween(0, items.length - 1);
  const item = items[index];

  if (!item) {
    throw new Error('No item');
  }
  return item;
};

export const randomGenerator = (seed: string) => new Rand(seed);
export type Random = Rand;
