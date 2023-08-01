import { WeaponName } from '@labrute/prisma';

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
  tempo: number;
  reversal: number;
  evasion: number;
  swiftness: number;
  block: number;
  accuracy: number;
  disarm: number;
  combo: number;
  damage: number;
  toss: number;
  reach: number;
  animation: WeaponAnimation;
}

export const limitedWeapons: WeaponName[] = [
  'knife', 'broadsword', 'lance', 'baton', 'trident', 'hatchet',
  'scimitar', 'axe', 'sword', 'fan', 'shuriken', 'bumps',
  'morningStar', 'mammothBone', 'flail', 'whip',
];

export const MAX_LIMITED_WEAPONS = limitedWeapons.length - 3;

const weapons: Weapon[] = [
  {
    name: 'axe',
    odds: 3,
    types: ['heavy', 'blunt'],
    tempo: 2.3,
    reversal: -0.2,
    evasion: -0.4,
    swiftness: -0.3,
    block: -0.5,
    accuracy: 0.5,
    disarm: 0.1,
    combo: -0.4,
    damage: 55,
    toss: 5,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'baton',
    odds: 70,
    types: ['long'],
    tempo: 1,
    reversal: 0.3,
    evasion: 0.05,
    swiftness: 0,
    block: 0.25,
    accuracy: 0,
    disarm: 0.25,
    combo: 0.1,
    damage: 6,
    toss: 3,
    reach: 3,
    animation: 'estoc',
  },
  {
    name: 'broadsword',
    odds: 100,
    types: ['sharp'],
    tempo: 1.2,
    reversal: 0.1,
    evasion: 0,
    swiftness: 0,
    block: 0.15,
    accuracy: 0,
    disarm: 0.15,
    combo: 0,
    damage: 10,
    toss: 5,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'bumps',
    odds: 50,
    types: ['heavy', 'blunt'],
    tempo: 2,
    reversal: -0.3,
    evasion: -0.3,
    swiftness: -0.35,
    block: -0.3,
    accuracy: 0.3,
    disarm: 0.1,
    combo: -0.6,
    damage: 30,
    toss: 5,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'fan',
    odds: 2,
    types: ['fast'],
    tempo: 0.28,
    reversal: 0.5,
    evasion: 0.6,
    swiftness: 0.5,
    block: -0.5,
    accuracy: 0,
    disarm: -0.5,
    combo: 0.45,
    damage: 4,
    toss: 5,
    reach: 0,
    animation: 'slash',
  },
  {
    name: 'flail',
    odds: 4,
    types: ['heavy', 'blunt'],
    tempo: 2.2,
    reversal: 0.3,
    evasion: -0.3,
    swiftness: -0.1,
    block: -0.5,
    accuracy: 1.5,
    disarm: -0.2,
    combo: 0.1,
    damage: 36,
    toss: 5,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'fryingPan',
    odds: 0.4,
    types: ['heavy', 'blunt'],
    tempo: 1.2,
    reversal: 0,
    evasion: 0,
    swiftness: 0,
    block: 0.4,
    accuracy: 0,
    disarm: 0,
    combo: -0.4,
    damage: 17,
    toss: 2,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'halbard',
    odds: 2,
    types: ['long', 'sharp'],
    tempo: 1.8,
    reversal: 0,
    evasion: 0,
    swiftness: -0.4,
    block: 0,
    accuracy: 0,
    disarm: 0.1,
    combo: 0.1,
    damage: 24,
    toss: 2,
    reach: 4,
    animation: 'slash',
  },
  {
    name: 'hatchet',
    odds: 40,
    types: ['heavy'],
    tempo: 1.5,
    reversal: 0,
    evasion: 0,
    swiftness: 0,
    block: -0.1,
    accuracy: 0,
    disarm: 0,
    combo: 0,
    damage: 17,
    toss: 3,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'keyboard',
    odds: 0.4,
    types: ['fast', 'blunt'],
    tempo: 1,
    reversal: 0,
    evasion: 0.1,
    swiftness: 0.2,
    block: 0,
    accuracy: 0,
    disarm: 0,
    combo: 0.5,
    damage: 7,
    toss: 2,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'knife',
    odds: 80,
    types: ['fast', 'sharp'],
    tempo: 0.6,
    reversal: 0,
    evasion: 0.1,
    swiftness: 0.5,
    block: 0,
    accuracy: 0,
    disarm: 0,
    combo: 0.3,
    damage: 7,
    toss: 5,
    reach: 0,
    animation: 'estoc',
  },
  {
    name: 'lance',
    odds: 40,
    types: ['long'],
    tempo: 1.2,
    reversal: -0.1,
    evasion: 0,
    swiftness: 0,
    block: 0,
    accuracy: 0,
    disarm: 0.1,
    combo: 0,
    damage: 12,
    toss: 2,
    reach: 3,
    animation: 'estoc',
  },
  {
    name: 'leek',
    odds: 0.4,
    types: ['fast', 'blunt'],
    tempo: 1.1,
    reversal: 1,
    evasion: 0,
    swiftness: 1,
    block: -0.5,
    accuracy: 2,
    disarm: 0,
    combo: 2,
    damage: 5,
    toss: 2,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'mammothBone',
    odds: 20,
    types: ['heavy', 'blunt'],
    tempo: 1.6,
    reversal: 0,
    evasion: 0,
    swiftness: 0,
    block: 0,
    accuracy: 0.5,
    disarm: 0.1,
    combo: -0.1,
    damage: 14,
    toss: 5,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'morningStar',
    odds: 6,
    types: ['heavy', 'blunt'],
    tempo: 1.5,
    reversal: 0,
    evasion: -0.1,
    block: 0,
    accuracy: 0.3,
    swiftness: -0.05,
    disarm: 0.1,
    combo: 0,
    damage: 20,
    toss: 5,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'mug',
    odds: 0.4,
    types: ['fast'],
    tempo: 0.9,
    reversal: 0,
    evasion: 0.15,
    swiftness: 0.3,
    block: -0.1,
    accuracy: 0,
    disarm: 0,
    combo: 0.4,
    damage: 8,
    toss: 2,
    reach: 0,
    animation: 'estoc',
  },
  {
    name: 'noodleBowl',
    odds: 0.4,
    types: ['thrown'],
    tempo: 0.45,
    reversal: 0,
    evasion: 0.1,
    swiftness: 0,
    block: -0.1,
    accuracy: 0,
    disarm: 0,
    combo: 0.3,
    damage: 10,
    toss: 2,
    reach: 0,
    animation: 'fist',
  },
  {
    name: 'piopio',
    odds: 0.4,
    types: ['thrown'],
    tempo: 0.32,
    reversal: 0,
    evasion: 0,
    swiftness: 0,
    block: -0.1,
    accuracy: 0,
    disarm: 0,
    combo: 0,
    damage: 5,
    toss: 2,
    reach: 0,
    animation: 'fist',
  },
  {
    name: 'racquet',
    odds: 0.4,
    types: ['fast', 'blunt'],
    tempo: 0.8,
    reversal: 1,
    evasion: 0.1,
    swiftness: 0,
    block: 0.2,
    accuracy: 0,
    disarm: 0,
    combo: 0,
    damage: 6,
    toss: 2,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'sai',
    odds: 6,
    types: ['fast'],
    tempo: 0.6,
    reversal: 0,
    evasion: 0.1,
    swiftness: 0.25,
    block: 0.3,
    accuracy: 0,
    disarm: 1,
    combo: 0.3,
    damage: 8,
    toss: 5,
    reach: 0,
    animation: 'estoc',
  },
  {
    name: 'scimitar',
    odds: 6,
    types: ['sharp'],
    tempo: 0.8,
    reversal: 0,
    evasion: 0,
    swiftness: 0.2,
    block: 0.1,
    accuracy: 0,
    disarm: 0,
    combo: 0.15,
    damage: 10,
    toss: 3,
    reach: 1,
    animation: 'slash',
  },
  {
    name: 'shuriken',
    odds: 8,
    types: ['thrown'],
    tempo: 0.12,
    reversal: 0,
    evasion: 0.15,
    swiftness: 0,
    block: -0.1,
    accuracy: 0,
    disarm: -0.5,
    combo: 0.3,
    damage: 3,
    toss: 5,
    reach: 0,
    animation: 'fist',
  },
  {
    name: 'sword',
    odds: 4,
    types: ['sharp'],
    tempo: 1.8,
    reversal: 0,
    evasion: -0.2,
    swiftness: -0.1,
    block: 0,
    accuracy: -0.2,
    disarm: 0.1,
    combo: 0,
    damage: 28,
    toss: 5,
    reach: 2,
    animation: 'slash',
  },
  {
    name: 'trident',
    odds: 10,
    types: ['long'],
    tempo: 1.4,
    reversal: 0.05,
    evasion: 0,
    swiftness: 0,
    block: 0,
    accuracy: 0,
    disarm: 0.2,
    combo: 0,
    damage: 14,
    toss: 3,
    reach: 3,
    animation: 'estoc',
  },
  {
    name: 'trombone',
    odds: 0.4,
    types: ['heavy', 'blunt'],
    tempo: 2.5,
    reversal: 0,
    evasion: 0,
    swiftness: -0.1,
    block: 0.2,
    accuracy: 0.2,
    disarm: 0.5,
    combo: 0.3,
    damage: 20,
    toss: 2,
    reach: 2,
    animation: 'slash',
  },
  {
    name: 'whip',
    odds: 3,
    types: ['long'],
    tempo: 1.5,
    reversal: -0.1,
    evasion: 0.3,
    swiftness: 0.3,
    block: -0.2,
    accuracy: -0.2,
    disarm: 0.3,
    combo: 0.35,
    damage: 10,
    toss: 5,
    reach: 5,
    animation: 'whip',
  },
];

export const WEAPONS_TOTAL_ODDS = weapons.reduce((acc, weapon) => acc + weapon.odds, 0);

export const WEAPONS_SFX: Record<WeaponName, string[]> = {
  ...weapons.reduce((acc, weapon) => {
    acc[weapon.name] = [];

    // Special SFX for some weapons
    if (weapon.name === 'fryingPan') {
      acc[weapon.name] = ['fryingPan'];
      return acc;
    }
    if (weapon.name === 'lance') {
      acc[weapon.name] = ['lance1', 'lance2'];
      return acc;
    }
    if (weapon.name === 'piopio') {
      acc[weapon.name] = ['piopio'];
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

    // SFX depending on weapon type
    if (weapon.types.includes('sharp')) {
      acc[weapon.name].push('sharp1', 'sharp2', 'sharp3', 'sharp4', 'sharp5', 'sharp6', 'sharp7', 'sharp8');
    } else {
      acc[weapon.name].push('blunt1', 'blunt2', 'blunt3', 'blunt4', 'blunt5', 'blunt6', 'blunt7', 'blunt8');
    }
    return acc;
  }, {} as Record<WeaponName, string[]>),
};

export default weapons;
