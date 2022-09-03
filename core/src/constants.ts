import { PETS_TOTAL_ODDS } from './brute/pets.js';
import { SKILLS_TOTAL_ODDS } from './brute/skills.js';
import { WEAPONS_TOTAL_ODDS } from './brute/weapons.js';
import { Animation } from './types.js';

export const FIGHTS_PER_DAY = 6;

export const ARENA_OPPONENTS_COUNT = 6;
export const ARENA_OPPONENTS_MAX_GAP = 2;

export const BRUTE_STARTING_POINTS = 11;
export const PERKS_TOTAL_ODDS = WEAPONS_TOTAL_ODDS + PETS_TOTAL_ODDS + SKILLS_TOTAL_ODDS;

export const SHIELD_BLOCK_ODDS = 0.45;
export const BARE_HANDS_TEMPO = 1.2;

export const ANIMATIONS: Animation[] = [
  'arrive-end',
  'arrive-start',
  'attack',
  'block',
  'death',
  'drink',
  'eat',
  'equip',
  'evade',
  'grab',
  'grabbed',
  'hit',
  'hit-0',
  'hit-1',
  'hit-2',
  'hit-3',
  'iddle',
  'launch',
  'monk-loop',
  'monk-start',
  'prepare-throw',
  'run',
  'slash',
  'stolen',
  'steal',
  'strengthen',
  'throw',
  'train',
  'trapped-loop',
  'trapped-start',
  'trash',
  'win',
  'fist',
  'estoc',
  'whip',
];