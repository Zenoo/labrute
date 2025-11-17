import { PetName } from '@labrute/prisma';

export interface Pet {
  name: PetName;
  odds: number;
  enduranceMalus: number;
  initiative: [number, number, number];
  strength: [number, number, number];
  agility: [number, number, number];
  speed: [number, number, number];
  hp: [number, number, number];
  counter: [number, number, number];
  combo: [number, number, number];
  block: [number, number, number];
  evasion: [number, number, number];
  accuracy: [number, number, number];
  disarm: [number, number, number];
  damage: [number, number, number];
}

export const pets: Record<PetName, Pet> = {
  [PetName.bear]: {
    name: PetName.bear,
    odds: 1,
    enduranceMalus: 8,
    initiative: [3.6, 3.6, 3.6],
    strength: [40, 45, 50],
    agility: [2, 4, 6],
    speed: [1, 3, 5],
    hp: [110, 120, 130],
    counter: [0, 0, 0],
    combo: [-0.2, -0.2, -0.2],
    block: [-0.25, -0.25, -0.25],
    evasion: [0.1, 0.15, 0.2],
    accuracy: [0.2, 0.3, 0.4],
    disarm: [0.05, 0.1, 0.15],
    damage: [5, 10, 15],
  },
  [PetName.panther]: {
    name: PetName.panther,
    odds: 1,
    enduranceMalus: 6,
    initiative: [0.6, 0.6, 0.6],
    strength: [23, 28, 33],
    agility: [16, 20, 24],
    speed: [24, 28, 32],
    hp: [26, 30, 34],
    counter: [0, 0, 0],
    combo: [0.7, 0.75, 0.8],
    block: [0, 0, 0],
    evasion: [0.2, 0.25, 0.3],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    damage: [3, 6, 9],
  },
  [PetName.dog3]: {
    name: PetName.dog3,
    odds: 2,
    enduranceMalus: 2,
    initiative: [0.1, 0.1, 0.1],
    strength: [6, 8, 10],
    agility: [5, 7, 9],
    speed: [3, 5, 7],
    hp: [14, 16, 18],
    counter: [0, 0, 0],
    combo: [0.2, 0.3, 0.4],
    block: [0, 0, 0],
    evasion: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    damage: [3, 6, 9],
  },
  [PetName.dog2]: {
    name: PetName.dog2,
    odds: 8,
    enduranceMalus: 2,
    initiative: [0.1, 0.1, 0.1],
    strength: [6, 8, 10],
    agility: [5, 7, 9],
    speed: [3, 5, 7],
    hp: [14, 16, 18],
    counter: [0, 0, 0],
    combo: [0.2, 0.3, 0.4],
    block: [0, 0, 0],
    evasion: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    damage: [3, 6, 9],
  },
  [PetName.dog1]: {
    name: PetName.dog1,
    odds: 20,
    enduranceMalus: 2,
    initiative: [0.1, 0.1, 0.1],
    strength: [6, 8, 10],
    agility: [5, 7, 9],
    speed: [3, 5, 7],
    hp: [14, 16, 18],
    counter: [0, 0, 0],
    combo: [0.2, 0.3, 0.4],
    block: [0, 0, 0],
    evasion: [0, 0, 0],
    accuracy: [0, 0, 0],
    disarm: [0, 0, 0],
    damage: [3, 6, 9],
  },
};

export const petList = Object.values(pets);

export const PETS_TOTAL_ODDS = petList.reduce((acc, pet) => acc + pet.odds, 0);
