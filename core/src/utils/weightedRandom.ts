const weightedRandom = <T extends { odds: number }, >(
  items: T[]
) => {
  const firstItem = items[0];
  if (!firstItem) {
    throw new Error('No items');
  }

  // Calculate total odds
  const totalOdds = items.reduce((acc, item) => acc + item.odds, 0);

  let i = 0;
  const weights: number[] = [];
  for (i = 0; i < items.length; i++) {
    weights[i] = ((items[i]?.odds || 0) / totalOdds) + (weights[i - 1] || 0);
  }

  const random = Math.random() * (weights[weights.length - 1] || 0);

  for (i = 0; i < weights.length; i++) {
    if ((weights[i] || 0) > random) {
      break;
    }
  }

  return items[i] || firstItem;
};

export default weightedRandom;
