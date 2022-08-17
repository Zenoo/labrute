const getSacriPoints = (level: number) => {
  if (level < 10) return 0;
  if (level < 20) return 100;
  if (level < 30) return 200;
  if (level < 40) return 250;
  if (level < 50) return 350;
  return Math.floor((level - 50) / 10) * 100 + 500;
};

export default getSacriPoints;