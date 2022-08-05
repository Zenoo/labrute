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
    odds: 1124 / 35792,
    enduranceMalus: 2,
    initiative: -3.6,
  },
  {
    name: 'panther',
    odds: 1118 / 35792,
    enduranceMalus: 6,
    initiative: -0.6,
  },
  {
    name: 'dog',
    odds: 33550 / 35792,
    enduranceMalus: 8,
    initiative: -0.1,
  },
];

export default pets;
