import { Fighter } from '@labrute/core';
import * as PIXI from 'pixi.js';
import FighterHolder from '../FighterHolder';

export interface AnimationFighter extends Omit<Fighter, 'shield'> {
  type: 'brute' | 'pet' | 'boss';
  hpBar?: PIXI.Graphics;
  hpBarPhantom?: PIXI.Graphics;
  teamWeaponsIllustrations: PIXI.Sprite[];
  HUDFocused: boolean;
  animation: FighterHolder;
  bustImage: HTMLImageElement | null;
  bust: PIXI.Sprite | undefined;
  text: PIXI.Text | undefined;
  dead?: boolean;
  trapped?: boolean;
  stunned?: boolean;
}

const findFighter = (
  fighters: AnimationFighter[],
  stepFighter?: number,
) => (typeof stepFighter === 'undefined' ? undefined : fighters.find((f) => f.index === stepFighter));

export const findHUDFocusedFighter = (
  fightFighters: Fighter[],
  fighters: AnimationFighter[],
  team: string,
) => {
  const animationFighter = fighters.find((f) => f.HUDFocused && f.team === team);
  return fightFighters.find((f) => f.id === animationFighter?.id);
};

export default findFighter;
