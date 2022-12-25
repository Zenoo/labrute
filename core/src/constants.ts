import { PETS_TOTAL_ODDS } from './brute/pets.js';
import { SKILLS_TOTAL_ODDS } from './brute/skills.js';
import { WEAPONS_TOTAL_ODDS } from './brute/weapons.js';
import { Animation, Gender } from './types.js';

export const FIGHTS_PER_DAY = 6;

export const ARENA_OPPONENTS_COUNT = 6;
export const ARENA_OPPONENTS_MAX_GAP = 2;

export const BRUTE_STARTING_POINTS = 11;
export const PERKS_TOTAL_ODDS = WEAPONS_TOTAL_ODDS + PETS_TOTAL_ODDS + SKILLS_TOTAL_ODDS;

export const SHIELD_BLOCK_ODDS = 0.45;
export const BARE_HANDS_TEMPO = 1.2;

export const ANIMATION_ANCHORS: Record<Gender, Record<Animation, [number, number]>> = {
  male: {
    'arrive-end': [0.4354, 0.7682],
    'arrive-start': [0.4354, 0.7682],
    attack: [0.348, 0.7338],
    block: [0.5183, 0.7248],
    death: [0.4749, 0.7416],
    drink: [0.4486, 0.7849],
    eat: [0.521, 0.8705],
    equip: [0.4593, 0.7407],
    evade: [0.5648, 0.9075],
    grab: [0.4134, 0.7902],
    grabbed: [0.5127, 0.7192],
    hit: [0.5, 0.5],
    'hit-0': [0.516, 0.8253],
    'hit-1': [0.4859, 0.7536],
    'hit-2': [0.4851, 0.669],
    idle: [0.4946, 0.7951],
    launch: [0.4206, 0.7859],
    'monk-loop': [0.5349, 0.7462],
    'monk-start': [0.5349, 0.7462],
    'prepare-throw': [0.6319, 0.7293],
    run: [0.5292, 0.8688],
    slash: [0.3249, 0.8274],
    stolen: [0.5138, 0.7995],
    steal: [0.4558, 0.7632],
    strengthen: [0.4292, 0.8274],
    throw: [0.3148, 0.6127],
    train: [0.4615, 0.821],
    'trapped-loop': [0.4191, 0.6905],
    'trapped-start': [0.4191, 0.6905],
    trash: [0.5189, 0.7276],
    win: [0.4851, 0.7744],
    fist: [0.348, 0.7338],
    estoc: [0.5178, 0.7592],
    whip: [0.2692, 0.8253],
  },
  female: {
    'arrive-end': [0.5, 0.5],
    'arrive-start': [0.5, 0.5],
    attack: [0.5, 0.5],
    block: [0.5, 0.5],
    death: [0.5, 0.5],
    drink: [0.5, 0.5],
    eat: [0.5, 0.5],
    equip: [0.5, 0.5],
    evade: [0.5, 0.5],
    grab: [0.5, 0.5],
    grabbed: [0.5, 0.5],
    hit: [0.5, 0.5],
    'hit-0': [0.5, 0.5],
    'hit-1': [0.5, 0.5],
    'hit-2': [0.5, 0.5],
    idle: [0.5042, 0.8539],
    launch: [0.5, 0.5],
    'monk-loop': [0.5, 0.5],
    'monk-start': [0.4473, 0.7648],
    'prepare-throw': [0.5, 0.5],
    run: [0.5, 0.5],
    slash: [0.5, 0.5],
    stolen: [0.5, 0.5],
    steal: [0.5, 0.5],
    strengthen: [0.5, 0.5],
    throw: [0.5, 0.5],
    train: [0.5, 0.5],
    'trapped-loop': [0.5, 0.5],
    'trapped-start': [0.5, 0.5],
    trash: [0.5, 0.5],
    win: [0.5, 0.5],
    fist: [0.5, 0.5],
    estoc: [0.5, 0.5],
    whip: [0.5, 0.5],
  },
};