import {
  Animation, FrameProps,
} from '@eternaltwin/labrute-core/types';
import maleBruteIddle1 from './male-brute/iddle/1.js';
import maleBruteRun1 from './male-brute/run/1.js';
import maleBruteRun2 from './male-brute/run/2.js';
import maleBruteRun3 from './male-brute/run/3.js';
import maleBruteRun4 from './male-brute/run/4.js';
import maleBruteRun5 from './male-brute/run/5.js';
import maleBruteRun6 from './male-brute/run/6.js';
import maleBruteRun7 from './male-brute/run/7.js';

export const FRAMES: Record<
  'male' | 'female',
  Record<
    Animation,
    // eslint-disable-next-line no-unused-vars
    (((props: FrameProps) => string) | null)[]
  >
> = {
  male: {
    'arrive-end': [],
    'arrive-start': [],
    attack: [],
    block: [],
    death: [],
    drink: [],
    eat: [],
    equip: [],
    evade: [],
    grab: [],
    grabbed: [],
    hit: [],
    'hit-0': [],
    'hit-1': [],
    'hit-2': [],
    'hit-3': [],
    iddle: [maleBruteIddle1],
    launch: [],
    'monk-loop': [],
    'monk-start': [],
    'prepare-throw': [],
    run: [
      maleBruteRun1, maleBruteRun2, maleBruteRun3,
      maleBruteRun4, maleBruteRun5, maleBruteRun6,
      maleBruteRun7,
    ],
    slash: [],
    stolen: [],
    steal: [],
    strengthen: [],
    throw: [],
    train: [],
    'trapped-loop': [],
    'trapped-start': [],
    trash: [],
    win: [],
    fist: [],
    estoc: [],
    whip: [],
  },
  female: {
    'arrive-end': [],
    'arrive-start': [],
    attack: [],
    block: [],
    death: [],
    drink: [],
    eat: [],
    equip: [],
    evade: [],
    grab: [],
    grabbed: [],
    hit: [],
    'hit-0': [],
    'hit-1': [],
    'hit-2': [],
    'hit-3': [],
    iddle: [],
    launch: [],
    'monk-loop': [],
    'monk-start': [],
    'prepare-throw': [],
    run: [],
    slash: [],
    stolen: [],
    steal: [],
    strengthen: [],
    throw: [],
    train: [],
    'trapped-loop': [],
    'trapped-start': [],
    trash: [],
    win: [],
    fist: [],
    estoc: [],
    whip: [],
  },
};

const getFrame = (
  animation: Animation,
  model: 'male' | 'female',
  frame: number,
) => FRAMES[model][animation][frame];

export default getFrame;