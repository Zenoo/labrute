export type FightBackground = {
  name: string,
  odds: number,
  effect: string,
};

export const tournamentBackground = {
  name: '3.png',
  odds: 0,
  effect:'none',
};

export const bossBackground = {
  name: '4.png',
  odds: 0,
  effect:'none',
};

export const fightBackgrounds: FightBackground[] = [
  { name: '1.jpg', odds: 100, effect:'none'},
  { name: '2.jpg', odds: 2, effect:'none'},
  tournamentBackground,
  bossBackground,
  { name: '5.png', odds: 2, effect:'none'},
  { name: '6.png', odds: 2, effect:'none'},
  { name: '7.png', odds: 2, effect:'none'},
  { name: '8.png', odds: 2, effect:'none'},
  { name: '9.png', odds: 2, effect:'none'},
  { name: '10.png', odds: 1, effect:'swamp'},
  { name: '11.png', odds: 2 , effect:'none'},
  { name: '12.png', odds: 2, effect:'none'},
  { name: '13.png', odds: 2 , effect:'none'},
];
