import { BodyColors, BodyParts, Gender, StepFighter } from '@eternaltwin/labrute-core/types';
import { Animation } from '../../views/AnimationTestView.js';

export interface AnimationFighter {
  name: string;
  data?: {
    gender: Gender,
    body: BodyParts,
    colors: BodyColors,
  };
  master?: string;
  type: 'brute' | 'pet';
  team: 'left' | 'right';
  inverted: boolean;
  x: number;
  y: number;
  animation: Animation;
  distanceBetweenFighters: number;
}

const findFighter = (
  fighters: AnimationFighter[],
  stepFighter?: StepFighter,
) => (stepFighter ? fighters.find((f) => f.name === stepFighter.name
  && f.type === stepFighter.type
  && f.master === stepFighter.master) : undefined);

export default findFighter;