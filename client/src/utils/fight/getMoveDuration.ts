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
    fist: 0,
    slash: 0,
    estoc: 0,
    equip: 0,
    block: 0,
    lose: 0,
    throw: 0,
    heal: 0,
    strengthen: 0,
    whip: 0,
    win: 0,
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
    fist: 0,
    slash: 0,
    estoc: 0,
    equip: 0,
    block: 0,
    lose: 0,
    throw: 0,
    heal: 0,
    strengthen: 0,
    whip: 0,
    win: 0,
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
    fist: 0,
    slash: 0,
    estoc: 0,
    equip: 0,
    block: 0,
    lose: 0,
    throw: 0,
    heal: 0,
    strengthen: 0,
    whip: 0,
    win: 0,
  },
  brute: {
    arrive: 1000,
    death: 0,
    attack: 0,
    evade: 1000,
    hit: 500,
    trapped: 1070,
    iddle: 0,
    run: 500,
    fist: 400,
    slash: 300,
    estoc: 250,
    equip: 370,
    block: 570,
    lose: 1350,
    throw: 350,
    heal: 1200,
    strengthen: 620,
    whip: 350,
    win: 1370,
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