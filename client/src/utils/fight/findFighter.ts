import { Brute, StepFighter } from '@eternaltwin/labrute-core/types';

export interface AnimationFighter {
  name: string;
  master?: string;
  type: 'brute' | 'pet';
  team: 'left' | 'right';
  inverted: boolean;
  x: number;
  y: number;
  animation: 'arrive' | 'iddle' | 'run' | 'attack' | 'hit';
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