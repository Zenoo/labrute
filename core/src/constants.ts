import { PETS_TOTAL_ODDS } from './brute/pets.js';
import { SKILLS_TOTAL_ODDS } from './brute/skills.js';
import { WEAPONS_TOTAL_ODDS } from './brute/weapons.js';

export const FIGHTS_PER_DAY = 6;

export const ARENA_OPPONENTS_COUNT = 6;
export const ARENA_OPPONENTS_MAX_GAP = 2;

export const BRUTE_STARTING_POINTS = 11;
export const PERKS_TOTAL_ODDS = WEAPONS_TOTAL_ODDS + PETS_TOTAL_ODDS + SKILLS_TOTAL_ODDS;

export const SHIELD_BLOCK_ODDS = 0.45;
export const BARE_HANDS_TEMPO = 1.2;

export const FIGHTER_WIDTH = {
  brute: 40,
  bear: 70,
  panther: 80,
  dog1: 60,
  dog2: 60,
  dog3: 60,
};

export const POSITION_OFFSET = {
  bear: {
    x: 60,
    y: 5,
  },
  panther: {
    x: 75,
    y: 10,
  },
  dog1: {
    x: 48,
    y: 10,
  },
  dog2: {
    x: 48,
    y: 10,
  },
  dog3: {
    x: 48,
    y: 10,
  },
  brute: {
    x: 15,
    y: 10,
  },
};