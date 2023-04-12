import { AnimatedWeapon, Fighter, StepFighter } from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import * as PIXI from 'pixi.js';

export interface AnimationFighter extends Fighter {
  type: 'brute' | 'pet';
  team: 'left' | 'right';
  currentAnimation: PIXI.AnimatedSprite | PIXI.Sprite;
  activeWeapon: (AnimatedWeapon & { illustration: PIXI.Sprite }) | null;
  shieldIllustration: PIXI.Sprite | null;
  hpBar?: PIXI.Graphics;
  hpBarPhantom?: PIXI.Graphics;
  weaponsIllustrations: PIXI.Sprite[];
  activeEffects: SkillName[];
}

const findFighter = (
  fighters: AnimationFighter[],
  stepFighter?: StepFighter,
) => (stepFighter ? fighters.find((f) => f.name === stepFighter.name
  && f.type === stepFighter.type
  && f.master === stepFighter.master) : undefined);

export default findFighter;