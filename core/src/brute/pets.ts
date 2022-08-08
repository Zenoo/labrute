import { PetName } from '../types.js';

export interface Pet {
  name: PetName;
  odds: number;
  enduranceMalus: number;
  initiative: number;
}

const pets: Pet[] = [
  {
    name: 'bear',
    odds: 1124,
    enduranceMalus: 2,
    initiative: -3.6,
  },
  {
    name: 'panther',
    odds: 1118,
    enduranceMalus: 6,
    initiative: -0.6,
  },
  {
    name: 'dog',
    odds: 33550,
    enduranceMalus: 8,
    initiative: -0.1,
  },
];

export const PETS_TOTAL_ODDS = pets.reduce((acc, pet) => acc + pet.odds, 0);

export default pets;
