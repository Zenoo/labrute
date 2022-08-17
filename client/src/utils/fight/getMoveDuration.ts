import { Animation, StepFighter } from '@eternaltwin/labrute-core/types';

const DURATIONS = {
  bear: {
    arrive: 1000,
    attack: 470,
    death: 1220,
    evade: 1000,
    hit: 500,
    trapped: 1100,
    iddle: 0,
    run: 500,
  },
  panther: {
    arrive: 1000,
    attack: 170,
    death: 670,
    evade: 1000,
    hit: 500,
    trapped: 1070,
    iddle: 0,
    run: 500,
  },
  dog: {
    arrive: 1000,
    attack: 170,
    death: 670,
    evade: 1000,
    hit: 500,
    trapped: 1070,
    iddle: 0,
    run: 500,
  },
  brute: {
    arrive: 1000,
    attack: 170,
    death: 670,
    evade: 1000,
    hit: 500,
    trapped: 1070,
    iddle: 0,
    run: 500,
  },
};

const getMoveDuration = (animation: Animation, fighter: StepFighter) => {
  const type = fighter.type === 'pet'
    ? fighter.name.startsWith('dog')
      ? 'dog' : fighter.name as 'bear' | 'panther'
    : 'brute';

  return DURATIONS[type][animation];
};

export default getMoveDuration;