import { PetName } from '@backend/types';

export interface Pet {
  name: PetName;
  odds: number;
  enduranceMalus: number;
}

const pets: Pet[] = [
  { name: 'bear', odds: 1124 / 35792, enduranceMalus: 2 },
  { name: 'panther', odds: 1118 / 35792, enduranceMalus: 6 },
  { name: 'dog', odds: 33550 / 35792, enduranceMalus: 8 },
];

export default pets;