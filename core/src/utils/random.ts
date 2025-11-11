// LRU cache for seed results
const seedCache = new Map<string, number>();
const MAX_CACHE_SIZE = 1000;

export const seedToRandom = (seed: string, cache = true): number => {
  if (cache) {
    // Check cache first
    const cached = seedCache.get(seed);
    if (cached !== undefined) {
      return cached;
    }
  }

  // Generate new random value
  let hash = 0;

  // Loop through each character in the string
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i); // Get ASCII/Unicode value (e.g., 'a' = 97)

    // Hash algorithm (djb2-inspired)
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash) + char;
    //      └─────┬─────┘
    //       hash * 32 - hash = hash * 31
    // This multiplies the current hash by 31 and adds the character code

    // eslint-disable-next-line no-bitwise
    hash &= hash; // Convert to 32-bit integer (removes any overflow bits)
  }

  // Normalize to 0-1 range
  const random = Math.abs(hash) / 0x7fffffff;
  //               └────┬────┘   └────┬─────┘
  //              Make positive   Max 32-bit signed int (2,147,483,647)

  if (cache) {
    // Store in cache
    seedCache.set(seed, random);

    // Simple LRU: remove oldest entry if cache is full
    if (seedCache.size > MAX_CACHE_SIZE) {
      const firstKey = seedCache.keys().next().value;
      if (firstKey) {
        seedCache.delete(firstKey);
      }
    }
  }

  return random;
};

/**
 * INTEGERS ONLY
 */
export const randomBetween = (min: number, max: number, seed?: string, cache = true) => {
  if (min > max) return 0;
  if (min === max) return min;

  const random = seed ? seedToRandom(seed, cache) : Math.random();

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
