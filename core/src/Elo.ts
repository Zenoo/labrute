const EloK = 32;

const getExpected = (a: number, b: number) => 1 / (1 + (10 ** ((b - a) / 400)));

export const getNewElo = (player: number, opponent: number, won: boolean) => {
  const expected = getExpected(player, opponent);
  const result = won ? 1 : 0;
  return Math.round(player + EloK * (result - expected));
};
