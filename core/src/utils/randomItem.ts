import { randomBetween } from './randomBetween';

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
