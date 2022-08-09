import { PetName } from '../types.js';

export interface Pet {
  name: PetName;
  odds: number;
  enduranceMalus: number;
  initiative: number;
  force: number;
  agility: number;
  speed: number;
  hp: number;
  counter: number;
  combo: number;
  block: number;
  evasion: number;
  precision: number;
  disarm: number;
  damage: number;
}

const pets: Pet[] = [
  {
    name: 'bear',
    odds: 1,
    enduranceMalus: 8,
    initiative: 3.6,
    force: 40,
    agility: 2,
    speed: 1,
    hp: 110,
    counter: 0,
    combo: -0.2,
    block: -0.25,
    evasion: 0.1,
    precision: 0.2,
    disarm: 0.05,
    damage: 5,
  },
  {
    name: 'panther',
    odds: 1,
    enduranceMalus: 6,
    initiative: 0.6,
    force: 23,
    agility: 16,
    speed: 24,
    hp: 26,
    counter: 0,
    combo: 0.7,
    block: 0,
    evasion: 0.2,
    precision: 0,
    disarm: 0,
    damage: 3,
  },
  {
    name: 'dog3',
    odds: 2,
    enduranceMalus: 2,
    initiative: 0.1,
    force: 6,
    agility: 5,
    speed: 3,
    hp: 14,
    counter: 0,
    combo: 0.2,
    block: 0,
    evasion: 0,
    precision: 0,
    disarm: 0,
    damage: 3,
  },
  {
    name: 'dog2',
    odds: 8,
    enduranceMalus: 2,
    initiative: 0.1,
    force: 6,
    agility: 5,
    speed: 3,
    hp: 14,
    counter: 0,
    combo: 0.2,
    block: 0,
    evasion: 0,
    precision: 0,
    disarm: 0,
    damage: 3,
  },
  {
    name: 'dog1',
    odds: 20,
    enduranceMalus: 2,
    initiative: 0.1,
    force: 6,
    agility: 5,
    speed: 3,
    hp: 14,
    counter: 0,
    combo: 0.2,
    block: 0,
    evasion: 0,
    precision: 0,
    disarm: 0,
    damage: 3,
  },
];

export const PETS_TOTAL_ODDS = pets.reduce((acc, pet) => acc + pet.odds, 0);

export default pets;
