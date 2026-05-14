import { Fighter, SkillId } from '@labrute/core';
import * as PIXI from 'pixi.js';
import { FighterHolder } from '../FighterHolder';

export interface AnimationFighter extends Omit<Fighter, 'shield' | 'skills'> {
  type: 'brute' | 'pet' | 'boss';
  hpBar?: PIXI.Graphics;
  hpBarPhantom?: PIXI.Graphics;
  teamWeaponsIllustrations: PIXI.Sprite[];
  teamSkillsIllustrations: PIXI.Sprite[];
  HUDFocused: boolean;
  animation: FighterHolder;
  bustImage: HTMLImageElement | null;
  bust: PIXI.Sprite | undefined;
  text: PIXI.Text | undefined;
  dead?: boolean;
  trapped?: boolean;
  stunned?: boolean;
  fierceBrute?: boolean;
  resist?: boolean;
  skills: Partial<Record<SkillId, {
    tier: number;
    uses?: number;
  }>>;
}

export const findFighter = (
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
