// If endurance is negative, use 0 instead to not go under 51 HP
const getHP = (level: number, endurance: number) => Math.floor(
  50
  + (
    Math.max(endurance, 0)
    + level * 0.25
  ) * 6,
);

export default getHP;