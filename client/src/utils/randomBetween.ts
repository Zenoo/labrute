const randomBetween = (min: number, max: number) => {
  if (min > max) return 0;
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default randomBetween;