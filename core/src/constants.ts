import { Gender } from '@labrute/prisma';
import { PETS_TOTAL_ODDS } from './brute/pets';
import { SKILLS_TOTAL_ODDS } from './brute/skills';
import { WEAPONS_TOTAL_ODDS } from './brute/weapons';
import { Animation } from './types';

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
    attack: [0, 0],
    block: [0.5183, 0.7248],
    death: [0.4749, 0.7416],
    drink: [0.4486, 0.7849],
    eat: [0.521, 0.8705],
    equip: [0.4593, 0.7407],
    evade: [0.5648, 0.9075],
    grab: [0.4134, 0.7902],
    grabbed: [0.5127, 0.7192],
    hit: [0, 0],
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
    'arrive-end': [0.4833, 0.7799],
    'arrive-start': [0.4833, 0.7799],
    attack: [0, 0],
    block: [0.5069, 0.848],
    death: [0.4785, 0.7884],
    drink: [0.4921, 0.8572],
    eat: [0.5247, 0.8536],
    equip: [0.5062, 0.8565],
    evade: [0.468, 0.8756],
    grab: [0.4595, 0.848],
    grabbed: [0.5105, 0.8112],
    hit: [0.4857, 0.8805],
    'hit-0': [0, 0],
    'hit-1': [0, 0],
    'hit-2': [0, 0],
    idle: [0.5042, 0.8539],
    launch: [0.4587, 0.7707],
    'monk-loop': [0.4473, 0.7648],
    'monk-start': [0.4473, 0.7648],
    'prepare-throw': [0.4949, 0.8444],
    run: [0.4658, 0.8302],
    slash: [0.3638, 0.8239],
    stolen: [0.5069, 0.8423],
    steal: [0.4722, 0.8324],
    strengthen: [0.5296, 0.848],
    throw: [0.4346, 0.8368],
    train: [0.5041, 0.8536],
    'trapped-loop': [0.3751, 0.3751],
    'trapped-start': [0.3751, 0.3751],
    trash: [0.5265, 0.8742],
    win: [0.5062, 0.9025],
    fist: [0.4602, 0.7459],
    estoc: [0.4878, 0.8508],
    whip: [0.2064, 0.848],
  },
};

export const BruteRankings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;
export type BruteRanking = typeof BruteRankings[number];

export const GLOBAL_TOURNAMENT_START_HOUR = 11;