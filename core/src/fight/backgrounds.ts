export enum MapEffect {
	HalfSpeed,
  OneHp,
  None
}

export type FightBackground = {
  name: string,
  odds: number,
  effect: MapEffect,
};

export const tournamentBackground = {
  name: '3.png',
  odds: 0,
  effect: MapEffect.None,
};

export const bossBackground = {
  name: '4.png',
  odds: 0,
  effect: MapEffect.None,
};

export const fightBackgrounds: FightBackground[] = [
  { name: '1.jpg', odds: 100, effect: MapEffect.None},
  { name: '2.jpg', odds: 2, effect: MapEffect.None},
  tournamentBackground,
  bossBackground,
  { name: '5.png', odds: 2, effect: MapEffect.None},
  { name: '6.png', odds: 2, effect: MapEffect.None},
  { name: '7.png', odds: 2, effect: MapEffect.None},
  { name: '8.png', odds: 2, effect: MapEffect.None},
  { name: '9.png', odds: 2, effect: MapEffect.None},
  { name: '10.png', odds: 1, effect: MapEffect.HalfSpeed},
  { name: '11.png', odds: 2 , effect: MapEffect.None},
  { name: '12.png', odds: 1, effect: MapEffect.OneHp},
  { name: '13.png', odds: 2 , effect: MapEffect.None},
];
