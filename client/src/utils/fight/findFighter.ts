import { AnimatedWeapon, Fighter, StepFighter } from '@eternaltwin/labrute-core/types';
import * as PIXI from 'pixi.js';

export interface AnimationFighter extends Fighter {
  type: 'brute' | 'pet';
  team: 'left' | 'right';
  currentAnimation: PIXI.AnimatedSprite | PIXI.Sprite;
  activeWeapon: AnimatedWeapon | null;
}

const findFighter = (
  fighters: AnimationFighter[],
  stepFighter?: StepFighter,
) => (stepFighter ? fighters.find((f) => f.name === stepFighter.name
  && f.type === stepFighter.type
  && f.master === stepFighter.master) : undefined);

export default findFighter;