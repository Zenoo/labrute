const adjustColor = (
  color: `#${string}`,
  amount: number,
): `#${string}` => `#${color
  .replace(/^#/, '')
  .replace(
    /../g,
    (currentColor) => (`0${Math.min(
      255,
      Math.max(
        0,
        parseInt(currentColor, 16) + amount,
      ),
    ).toString(16)}`).substr(-2),
  )}`;

export default adjustColor;