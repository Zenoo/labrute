import { WeaponName } from '@labrute/prisma';

export enum WeaponId {
  fan,
  keyboard,
  knife,
  leek,
  mug,
  sai,
  racquet,
  axe,
  bumps,
  flail,
  fryingPan,
  hatchet,
  mammothBone,
  morningStar,
  trombone,
  baton,
  halbard,
  lance,
  trident,
  whip,
  noodleBowl,
  piopio,
  shuriken,
  broadsword,
  scimitar,
  sword,
}

export const WeaponByName: Record<WeaponName, WeaponId> = {
  [WeaponName.fan]: WeaponId.fan,
  [WeaponName.keyboard]: WeaponId.keyboard,
  [WeaponName.knife]: WeaponId.knife,
  [WeaponName.leek]: WeaponId.leek,
  [WeaponName.mug]: WeaponId.mug,
  [WeaponName.sai]: WeaponId.sai,
  [WeaponName.racquet]: WeaponId.racquet,
  [WeaponName.axe]: WeaponId.axe,
  [WeaponName.bumps]: WeaponId.bumps,
  [WeaponName.flail]: WeaponId.flail,
  [WeaponName.fryingPan]: WeaponId.fryingPan,
  [WeaponName.hatchet]: WeaponId.hatchet,
  [WeaponName.mammothBone]: WeaponId.mammothBone,
  [WeaponName.morningStar]: WeaponId.morningStar,
  [WeaponName.trombone]: WeaponId.trombone,
  [WeaponName.baton]: WeaponId.baton,
  [WeaponName.halbard]: WeaponId.halbard,
  [WeaponName.lance]: WeaponId.lance,
  [WeaponName.trident]: WeaponId.trident,
  [WeaponName.whip]: WeaponId.whip,
  [WeaponName.noodleBowl]: WeaponId.noodleBowl,
  [WeaponName.piopio]: WeaponId.piopio,
  [WeaponName.shuriken]: WeaponId.shuriken,
  [WeaponName.broadsword]: WeaponId.broadsword,
  [WeaponName.scimitar]: WeaponId.scimitar,
  [WeaponName.sword]: WeaponId.sword,
};

export const WeaponById: Record<WeaponId, WeaponName> = {
  [WeaponId.fan]: WeaponName.fan,
  [WeaponId.keyboard]: WeaponName.keyboard,
  [WeaponId.knife]: WeaponName.knife,
  [WeaponId.leek]: WeaponName.leek,
  [WeaponId.mug]: WeaponName.mug,
  [WeaponId.sai]: WeaponName.sai,
  [WeaponId.racquet]: WeaponName.racquet,
  [WeaponId.axe]: WeaponName.axe,
  [WeaponId.bumps]: WeaponName.bumps,
  [WeaponId.flail]: WeaponName.flail,
  [WeaponId.fryingPan]: WeaponName.fryingPan,
  [WeaponId.hatchet]: WeaponName.hatchet,
  [WeaponId.mammothBone]: WeaponName.mammothBone,
  [WeaponId.morningStar]: WeaponName.morningStar,
  [WeaponId.trombone]: WeaponName.trombone,
  [WeaponId.baton]: WeaponName.baton,
  [WeaponId.halbard]: WeaponName.halbard,
  [WeaponId.lance]: WeaponName.lance,
  [WeaponId.trident]: WeaponName.trident,
  [WeaponId.whip]: WeaponName.whip,
  [WeaponId.noodleBowl]: WeaponName.noodleBowl,
  [WeaponId.piopio]: WeaponName.piopio,
  [WeaponId.shuriken]: WeaponName.shuriken,
  [WeaponId.broadsword]: WeaponName.broadsword,
  [WeaponId.scimitar]: WeaponName.scimitar,
  [WeaponId.sword]: WeaponName.sword,
};

export const WeaponTypes = ['fast', 'sharp', 'heavy', 'long', 'thrown', 'blunt'] as const;
export const WeaponType = {
  FAST: 'fast',
  SHARP: 'sharp',
  HEAVY: 'heavy',
  LONG: 'long',
  THROWN: 'thrown',
  BLUNT: 'blunt',
} as const;

export type WeaponType = typeof WeaponType[keyof typeof WeaponType];

export const WeaponTypeColor: Record<WeaponType, string> = {
  fast: '#8686ff',
  sharp: 'red',
  heavy: 'brown',
  long: 'green',
  thrown: 'purple',
  blunt: 'orange',
} as const;

export const WeaponAnimations = ['fist', 'slash', 'estoc', 'whip'] as const;
export type WeaponAnimation = typeof WeaponAnimations[number];

export interface Weapon {
  name: WeaponName;
  odds: number;
  types: WeaponType[];
  tempo: [number, number, number];
  reversal: [number, number, number];
  evasion: [number, number, number];
  dexterity: [number, number, number];
  block: [number, number, number];
  accuracy: [number, number, number];
  disarm: [number, number, number];
  combo: [number, number, number];
  deflect: [number, number, number];
  criticalChance: [number, number, number];
  criticalDamage: [number, number, number];
  damage: [number, number, number];
  toss: [number, number, number];
  reach: number;
  animation: WeaponAnimation;
}

export const limitedWeapons: WeaponName[] = [
  'knife', 'broadsword', 'lance', 'baton', 'trident', 'hatchet',
  'scimitar', 'axe', 'sword', 'fan', 'shuriken', 'bumps',
  'morningStar', 'mammothBone', 'flail', 'whip',
];

export const MAX_LIMITED_WEAPONS = limitedWeapons.length - 3;

export const weapons: Record<WeaponName, Weapon> = {
  [WeaponName.axe]: {
    name: 'axe',
    odds: 3,
    types: ['heavy', 'blunt'],
    tempo: [2.3, 2.3, 2.3],
    reversal: [-0.2, -0.2, -0.2],
    evasion: [-0.4, -0.4, -0.4],
    dexterity: [-0.8, -0.8, -0.8],
    block: [-0.5, -0.5, -0.5],
    accuracy: [0.5, 0.6, 0.7],
    disarm: [0.1, 0.15, 0.2],
    combo: [-0.4, -0.4, -0.4],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [55, 75, 95],
    toss: [5, 7, 9],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.baton]: {
    name: 'baton',
    odds: 70,
    types: ['long'],
    tempo: [1, 1, 1],
    reversal: [0.3, 0.35, 0.4],
    evasion: [0.05, 0.1, 0.15],
    dexterity: [0, 0, 0],
    block: [0.25, 0.3, 0.35],
    accuracy: [0, 0, 0],
    disarm: [0.25, 0.3, 0.35],
    combo: [0.1, 0.15, 0.2],
    deflect: [0, 0, 0],
    criticalChance: [0.2, 0.25, 0.3],
    criticalDamage: [0, 0, 0],
    damage: [6, 8, 10],
    toss: [3, 5, 7],
    reach: 3,
    animation: 'estoc',
  },
  [WeaponName.broadsword]: {
    name: 'broadsword',
    odds: 100,
    types: ['sharp'],
    tempo: [1.2, 1.2, 1.2],
    reversal: [0.1, 0.15, 0.2],
    evasion: [0, 0, 0],
    dexterity: [0, 0, 0],
    block: [0.15, 0.25, 0.35],
    accuracy: [0, 0, 0],
    disarm: [0.15, 0.2, 0.25],
    combo: [0, 0, 0],
    deflect: [0, 0, 0],
    criticalChance: [0.3, 0.35, 0.4],
    criticalDamage: [0, 0, 0],
    damage: [10, 13, 16],
    toss: [5, 7, 9],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.bumps]: {
    name: 'bumps',
    odds: 50,
    types: ['heavy', 'blunt'],
    tempo: [2, 2, 2],
    reversal: [-0.3, -0.3, -0.3],
    evasion: [-0.3, -0.3, -0.3],
    dexterity: [-0.65, -0.60, -0.55],
    block: [-0.3, -0.3, -0.3],
    accuracy: [0.3, 0.4, 0.5],
    disarm: [0.1, 0.15, 0.2],
    combo: [-0.6, -0.55, -0.5],
    deflect: [0, 0, 0],
    criticalChance: [0.2, 0.3, 0.4],
    criticalDamage: [0, 0, 0],
    damage: [30, 40, 50],
    toss: [5, 7, 9],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.fan]: {
    name: 'fan',
    odds: 2,
    types: ['fast'],
    tempo: [0.28, 0.28, 0.28],
    reversal: [0.5, 0.55, 0.6],
    evasion: [0.6, 0.65, 0.7],
    dexterity: [0.5, 0.55, 0.6],
    block: [-0.5, -0.5, -0.5],
    accuracy: [0, 0, 0],
    disarm: [-0.5, -0.5, -0.5],
    combo: [0.45, 0.5, 0.55],
    deflect: [0.25, 0.3, 0.35],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [4, 6, 8],
    toss: [5, 7, 9],
    reach: 0,
    animation: 'slash',
  },
  [WeaponName.flail]: {
    name: 'flail',
    odds: 4,
    types: ['heavy', 'blunt'],
    tempo: [2.2, 2.2, 2.2],
    reversal: [0, 0, 0],
    evasion: [-0.3, -0.3, -0.3],
    dexterity: [-1.6, -1.6, -1.6],
    block: [-0.5, -0.5, -0.5],
    accuracy: [1.5, 2, 2.5],
    disarm: [-0.2, -0.2, -0.2],
    combo: [0.3, 0.35, 0.4],
    deflect: [0, 0, 0],
    criticalChance: [-0.2, -0.2, -0.2],
    criticalDamage: [0, 0, 0],
    damage: [36, 42, 48],
    toss: [5, 7, 9],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.fryingPan]: {
    name: 'fryingPan',
    odds: 0.4,
    types: ['heavy', 'blunt'],
    tempo: [1.2, 1.2, 1.2],
    reversal: [0, 0, 0],
    evasion: [0, 0, 0],
    dexterity: [0, 0, 0],
    block: [0.4, 0.45, 0.5],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [-0.4, -0.4, -0.4],
    deflect: [0.4, 0.5, 0.6],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [17, 22, 27],
    toss: [2, 4, 6],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.halbard]: {
    name: 'halbard',
    odds: 2,
    types: ['long', 'heavy', 'sharp'],
    tempo: [1.8, 1.8, 1.8],
    reversal: [0, 0, 0],
    evasion: [0, 0, 0],
    dexterity: [-0.4, -0.4, -0.4],
    block: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0.1, 0.15, 0.2],
    combo: [0.1, 0.15, 0.2],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [24, 30, 36],
    toss: [2, 4, 6],
    reach: 4,
    animation: 'slash',
  },
  [WeaponName.hatchet]: {
    name: 'hatchet',
    odds: 40,
    types: ['heavy', 'sharp'],
    tempo: [1.5, 1.5, 1.5],
    reversal: [0, 0, 0],
    evasion: [0, 0, 0],
    dexterity: [0, 0, 0],
    block: [-0.1, -0.1, -0.1],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [0, 0, 0],
    deflect: [0, 0, 0],
    criticalChance: [0.15, 0.25, 0.35],
    criticalDamage: [0, 0, 0],
    damage: [17, 22, 27],
    toss: [3, 5, 7],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.keyboard]: {
    name: 'keyboard',
    odds: 0.4,
    types: ['fast', 'blunt'],
    tempo: [1, 1, 1],
    reversal: [0, 0, 0],
    evasion: [0.1, 0.15, 0.2],
    dexterity: [0.2, 0.3, 0.4],
    block: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [0.5, 0.55, 0.6],
    deflect: [0.3, 0.35, 0.4],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [7, 10, 13],
    toss: [2, 4, 6],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.knife]: {
    name: 'knife',
    odds: 80,
    types: ['fast', 'sharp'],
    tempo: [0.6, 0.6, 0.6],
    reversal: [0, 0, 0],
    evasion: [0.1, 0.15, 0.2],
    dexterity: [0.5, 0.55, 0.6],
    block: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [0.3, 0.4, 0.5],
    deflect: [0, 0, 0],
    criticalChance: [0.25, 0.25, 0.25],
    criticalDamage: [0, 0, 0],
    damage: [7, 10, 13],
    toss: [5, 7, 9],
    reach: 0,
    animation: 'estoc',
  },
  [WeaponName.lance]: {
    name: 'lance',
    odds: 40,
    types: ['long'],
    tempo: [1.2, 1.2, 1.2],
    reversal: [-0.1, -0.1, -0.1],
    evasion: [0, 0, 0],
    dexterity: [0, 0, 0],
    block: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0.1, 0.15, 0.2],
    combo: [0, 0, 0],
    deflect: [0, 0, 0],
    criticalChance: [0.15, 0.25, 0.35],
    criticalDamage: [0, 0, 0],
    damage: [12, 16, 20],
    toss: [2, 4, 6],
    reach: 3,
    animation: 'estoc',
  },
  [WeaponName.leek]: {
    name: 'leek',
    odds: 0.4,
    types: ['fast', 'blunt'],
    tempo: [1.1, 1.1, 1.1],
    reversal: [1, 1, 1],
    evasion: [0, 0, 0],
    dexterity: [-1, -1, -1],
    block: [-0.5, -0.5, -0.5],
    accuracy: [2, 3, 4],
    disarm: [0, 0, 0],
    combo: [2, 3, 4],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [5, 8, 11],
    toss: [2, 4, 6],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.mammothBone]: {
    name: 'mammothBone',
    odds: 20,
    types: ['heavy', 'blunt'],
    tempo: [1.6, 1.6, 1.6],
    reversal: [0, 0, 0],
    evasion: [0, 0, 0],
    dexterity: [-0.5, -0.5, -0.5],
    block: [0, 0, 0],
    accuracy: [0.5, 0.55, 0.6],
    disarm: [0.1, 0.15, 0.2],
    combo: [-0.1, -0.1, -0.1],
    deflect: [0, 0, 0],
    criticalChance: [0.15, 0.25, 0.35],
    criticalDamage: [0, 0, 0],
    damage: [14, 18, 22],
    toss: [5, 7, 9],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.morningStar]: {
    name: 'morningStar',
    odds: 6,
    types: ['heavy', 'blunt'],
    tempo: [1.5, 1.5, 1.5],
    reversal: [0, 0, 0],
    evasion: [-0.1, -0.1, -0.1],
    block: [0, 0, 0],
    accuracy: [0.3, 0.4, 0.5],
    dexterity: [-0.35, -0.35, -0.35],
    disarm: [0.1, 0.15, 0.2],
    combo: [0, 0, 0],
    deflect: [0, 0, 0],
    criticalChance: [0.05, 0.1, 0.15],
    criticalDamage: [0, 0, 0],
    damage: [20, 30, 40],
    toss: [5, 7, 9],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.mug]: {
    name: 'mug',
    odds: 0.4,
    types: ['fast'],
    tempo: [0.9, 0.9, 0.9],
    reversal: [0, 0, 0],
    evasion: [0.15, 0.2, 0.25],
    dexterity: [0.3, 0.4, 0.5],
    block: [-0.1, -0.1, -0.1],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [0.4, 0.5, 0.6],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [8, 12, 16],
    toss: [2, 4, 6],
    reach: 0,
    animation: 'estoc',
  },
  [WeaponName.noodleBowl]: {
    name: 'noodleBowl',
    odds: 0.4,
    types: ['thrown'],
    tempo: [0.45, 0.45, 0.45],
    reversal: [0, 0, 0],
    evasion: [0.1, 0.15, 0.2],
    dexterity: [0, 0, 0],
    block: [-0.1, -0.1, -0.1],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [0.3, 0.4, 0.5],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [10, 15, 20],
    toss: [2, 4, 6],
    reach: 0,
    animation: 'fist',
  },
  [WeaponName.piopio]: {
    name: 'piopio',
    odds: 0.4,
    types: ['thrown'],
    tempo: [0.32, 0.32, 0.32],
    reversal: [0, 0, 0],
    evasion: [0.5, 0.55, 0.6],
    dexterity: [0, 0, 0],
    block: [-0.1, -0.1, -0.1],
    accuracy: [0, 0, 0],
    disarm: [0.5, 0.55, 0.6],
    combo: [0, 0, 0],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [5, 8, 11],
    toss: [2, 4, 6],
    reach: 0,
    animation: 'fist',
  },
  [WeaponName.racquet]: {
    name: 'racquet',
    odds: 0.4,
    types: ['fast', 'blunt'],
    tempo: [0.8, 0.8, 0.8],
    reversal: [1, 1.5, 2],
    evasion: [0.1, 0.15, 0.2],
    dexterity: [0, 0, 0],
    block: [0.2, 0.25, 0.3],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [0, 0, 0],
    deflect: [0.5, 0.55, 0.6],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [6, 9, 12],
    toss: [2, 4, 6],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.sai]: {
    name: 'sai',
    odds: 6,
    types: ['fast'],
    tempo: [0.6, 0.6, 0.6],
    reversal: [0, 0, 0],
    evasion: [0.1, 0.15, 0.2],
    dexterity: [0.25, 0.35, 0.45],
    block: [0.3, 0.35, 0.4],
    accuracy: [0, 0, 0],
    disarm: [0.75, 0.8, 0.85],
    combo: [0.3, 0.35, 0.4],
    deflect: [0.25, 0.35, 0.45],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [8, 12, 16],
    toss: [5, 7, 9],
    reach: 0,
    animation: 'estoc',
  },
  [WeaponName.scimitar]: {
    name: 'scimitar',
    odds: 6,
    types: ['sharp'],
    tempo: [0.8, 0.8, 0.8],
    reversal: [0, 0, 0],
    evasion: [0, 0, 0],
    dexterity: [0.2, 0.3, 0.4],
    block: [0.1, 0.15, 0.2],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    combo: [0.15, 0.25, 0.35],
    deflect: [0, 0, 0],
    criticalChance: [0.05, 0.1, 0.15],
    criticalDamage: [0, 0, 0],
    damage: [10, 15, 20],
    toss: [3, 5, 7],
    reach: 1,
    animation: 'slash',
  },
  [WeaponName.shuriken]: {
    name: 'shuriken',
    odds: 8,
    types: ['thrown'],
    tempo: [0.12, 0.12, 0.12],
    reversal: [0, 0, 0],
    evasion: [0.15, 0.2, 0.25],
    dexterity: [0, 0, 0],
    block: [-0.1, -0.1, -0.1],
    accuracy: [0, 0, 0],
    disarm: [-0.5, -0.5, -0.5],
    combo: [0.3, 0.4, 0.5],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [3, 5, 7],
    toss: [5, 7, 9],
    reach: 0,
    animation: 'fist',
  },
  [WeaponName.sword]: {
    name: 'sword',
    odds: 4,
    types: ['sharp'],
    tempo: [1.8, 1.8, 1.8],
    reversal: [0, 0, 0],
    evasion: [-0.2, -0.2, -0.2],
    dexterity: [0.1, 0.15, 0.2],
    block: [0, 0, 0],
    accuracy: [-0.2, -0.2, -0.2],
    disarm: [0.1, 0.15, 0.2],
    combo: [0, 0, 0],
    deflect: [0, 0, 0],
    criticalChance: [0.05, 0.1, 0.15],
    criticalDamage: [0, 0, 0],
    damage: [28, 36, 44],
    toss: [5, 7, 9],
    reach: 2,
    animation: 'slash',
  },
  [WeaponName.trident]: {
    name: 'trident',
    odds: 10,
    types: ['long'],
    tempo: [1.4, 1.4, 1.4],
    reversal: [0.05, 0.1, 0.15],
    evasion: [0, 0, 0],
    dexterity: [0, 0, 0],
    block: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0.2, 0.3, 0.4],
    combo: [0, 0, 0],
    deflect: [0, 0, 0],
    criticalChance: [0.05, 0.1, 0.15],
    criticalDamage: [0, 0, 0],
    damage: [14, 18, 22],
    toss: [3, 5, 7],
    reach: 3,
    animation: 'estoc',
  },
  [WeaponName.trombone]: {
    name: 'trombone',
    odds: 0.4,
    types: ['heavy', 'blunt'],
    tempo: [2.5, 2.5, 2.5],
    reversal: [0, 0, 0],
    evasion: [0, 0, 0],
    dexterity: [-0.3, -0.3, -0.3],
    block: [0.2, 0.25, 0.3],
    accuracy: [0.2, 0.25, 0.3],
    disarm: [0.5, 0.55, 0.6],
    combo: [0.3, 0.35, 0.4],
    deflect: [0, 0, 0],
    criticalChance: [-0.1, -0.1, -0.1],
    criticalDamage: [0, 0, 0],
    damage: [20, 25, 30],
    toss: [2, 4, 6],
    reach: 2,
    animation: 'slash',
  },
  [WeaponName.whip]: {
    name: 'whip',
    odds: 3,
    types: ['long'],
    tempo: [1.5, 1.5, 1.5],
    reversal: [-0.1, -0.1, -0.1],
    evasion: [0.3, 0.35, 0.4],
    dexterity: [0.5, 0.55, 0.6],
    block: [-0.2, -0.2, -0.2],
    accuracy: [-0.2, -0.2, -0.2],
    disarm: [0.3, 0.35, 0.4],
    combo: [0.35, 0.4, 0.45],
    deflect: [0, 0, 0],
    criticalChance: [0, 0, 0],
    criticalDamage: [0, 0, 0],
    damage: [10, 15, 20],
    toss: [5, 7, 9],
    reach: 5,
    animation: 'whip',
  },
};

export const weaponList = Object.values(weapons);

export const WEAPONS_TOTAL_ODDS = weaponList.reduce((acc, weapon) => acc + weapon.odds, 0);

export const WEAPONS_SFX: Record<WeaponName, string[]> = {
  ...weaponList.reduce((acc, weapon) => {
    acc[weapon.name] = [];

    // Special SFX for some weapons
    if (weapon.name === 'fryingPan') {
      acc[weapon.name] = ['fryingPan1', 'fryingPan2'];
      return acc;
    }
    if (weapon.name === 'baton') {
      acc[weapon.name] = ['baton1', 'baton2', 'baton3'];
      return acc;
    }
    if (weapon.name === 'lance') {
      acc[weapon.name] = ['lance1', 'lance2'];
      return acc;
    }
    if (weapon.name === 'axe') {
      acc[weapon.name] = ['axe1', 'axe2'];
      return acc;
    }
    if (weapon.name === 'keyboard') {
      acc[weapon.name] = ['keyboard1', 'keyboard2'];
      return acc;
    }
    if (weapon.name === 'broadsword') {
      acc[weapon.name] = ['broadsword1', 'broadsword2'];
      return acc;
    }
    if (weapon.name === 'hatchet') {
      acc[weapon.name] = ['hatchet1', 'hatchet2'];
      return acc;
    }
    if (weapon.name === 'knife') {
      acc[weapon.name] = ['knife1', 'knife2'];
      return acc;
    }
    if (weapon.name === 'noodleBowl') {
      acc[weapon.name] = ['noodleBowl1', 'noodleBowl2'];
      return acc;
    }
    if (weapon.name === 'fan') {
      acc[weapon.name] = ['fan1', 'fan2'];
      return acc;
    }
    if (weapon.name === 'piopio') {
      acc[weapon.name] = ['piopio'];
      return acc;
    }
    if (weapon.name === 'shuriken') {
      acc[weapon.name] = ['shuriken'];
      return acc;
    }
    if (weapon.name === 'racquet') {
      acc[weapon.name] = ['racquet'];
      return acc;
    }
    if (weapon.name === 'scimitar') {
      acc[weapon.name] = ['scimitar1', 'scimitar2'];
      return acc;
    }
    if (weapon.name === 'mammothBone') {
      acc[weapon.name] = ['mammothBone'];
      return acc;
    }
    if (weapon.name === 'sword') {
      acc[weapon.name] = ['sword'];
      return acc;
    }
    if (weapon.name === 'trombone') {
      acc[weapon.name] = ['trombone1', 'trombone2'];
      return acc;
    }
    if (weapon.name === 'whip') {
      acc[weapon.name] = ['whip'];
      return acc;
    }
    if (weapon.name === 'leek') {
      acc[weapon.name] = ['leek'];
      return acc;
    }

    // SFX depending on weapon type
    if (weapon.types.includes('sharp')) {
      acc[weapon.name].push('sharp1', 'sharp2', 'sharp3', 'sharp4', 'sharp5', 'sharp6', 'sharp7', 'sharp8');
    } else {
      acc[weapon.name].push('blunt1', 'blunt2', 'blunt3', 'blunt4', 'blunt5', 'blunt6', 'blunt7', 'blunt8');
    }
    return acc;
  }, {} as Record<WeaponName, string[]>),
};
