import { Brute, StepFighter } from '@eternaltwin/labrute-core/types';
import { Animation } from '../../views/AnimationTestView.js';

export interface AnimationFighter {
  name: string;
  master?: string;
  type: 'brute' | 'pet';
  team: 'left' | 'right';
  inverted: boolean;
  x: number;
  y: number;
  animation: Animation;
  distanceBetweenFighters: number;
  brute?: Brute;
}

const findFighter = (
  fighters: AnimationFighter[],
  stepFighter?: StepFighter,
) => (stepFighter ? fighters.find((f) => f.name === stepFighter.name
  && f.type === stepFighter.type
  && f.master === stepFighter.master) : undefined);

export default findFighter;