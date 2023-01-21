import { AnimationFighter } from './findFighter';
import { StepFighter } from '@labrute/core';

const fightersEqual = (
  a: AnimationFighter | StepFighter | undefined,
  b: AnimationFighter | StepFighter | undefined,
) => !a || !b || (a.name === b.name
  && a.type === b.type
  && a.master === b.master);

export default fightersEqual;