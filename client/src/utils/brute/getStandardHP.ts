const getStandardHP = (level: number) => {
  return Math.floor(level * 1.5 + 50);
};

export default getStandardHP;