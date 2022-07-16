const getXPNeeded = (level: number) => Math.floor(
  0.0032 * level ** 3
  + 5.2384 * level ** 2
  - 227.92 * level
  + 4603.5
  - (
    0.0032 * (level - 1) ** 3
    + 5.2384 * (level - 1) ** 2
    - 227.92 * (level - 1)
    + 4603.5
  )
);

export default getXPNeeded;