const weightedRandom = <T extends { odds: number }, >(items: T[], totalOdds: number) => {
  let i = 0;
  const weights: number[] = [];
  for (i = 0; i < items.length; i++) {
    weights[i] = (items[i].odds / totalOdds) + (weights[i - 1] || 0);
  }

  const random = Math.random() * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++) {
    if (weights[i] > random) {
      break;
    }
  }

  return items[i];
};

export default weightedRandom;