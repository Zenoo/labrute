import { Brute, PetName } from '@labrute/prisma';

export interface Pet {
  name: PetName;
  odds: number;
  enduranceMalus: number;
  initiative: number;
  strength: number;
  agility: number;
  speed: number;
  hp: number;
  counter: number;
  combo: number;
  block: number;
  evasion: number;
  accuracy: number;
  disarm: number;
  damage: number;
}

export const pets: Pet[] = [
  {
    name: PetName.bear,
    odds: 1,
    enduranceMalus: 8,
    initiative: 3.6,
    strength: 40,
    agility: 2,
    speed: 1,
    hp: 110,
    counter: 0,
    combo: -0.2,
    block: -0.25,
    evasion: 0.1,
    accuracy: 0.2,
    disarm: 0.05,
    damage: 5,
  },
  {
    name: PetName.panther,
    odds: 1,
    enduranceMalus: 6,
    initiative: 0.6,
    strength: 23,
    agility: 16,
    speed: 24,
    hp: 26,
    counter: 0,
    combo: 0.7,
    block: 0,
    evasion: 0.2,
    accuracy: 0,
    disarm: 0,
    damage: 3,
  },
  {
    name: PetName.dog3,
    odds: 2,
    enduranceMalus: 2,
    initiative: 0.1,
    strength: 6,
    agility: 5,
    speed: 3,
    hp: 14,
    counter: 0,
    combo: 0.2,
    block: 0,
    evasion: 0,
    accuracy: 0,
    disarm: 0,
    damage: 3,
  },
  {
    name: PetName.dog2,
    odds: 8,
    enduranceMalus: 2,
    initiative: 0.1,
    strength: 6,
    agility: 5,
    speed: 3,
    hp: 14,
    counter: 0,
    combo: 0.2,
    block: 0,
    evasion: 0,
    accuracy: 0,
    disarm: 0,
    damage: 3,
  },
  {
    name: PetName.dog1,
    odds: 20,
    enduranceMalus: 2,
    initiative: 0.1,
    strength: 6,
    agility: 5,
    speed: 3,
    hp: 14,
    counter: 0,
    combo: 0.2,
    block: 0,
    evasion: 0,
    accuracy: 0,
    disarm: 0,
    damage: 3,
  },
];

export const PETS_TOTAL_ODDS = pets.reduce((acc, pet) => acc + pet.odds, 0);

const scalingByPet = {
  [PetName.bear]: {
    strength: 0.4,
    agility: 0.1,
    speed: 0.1,
    hp: 0.4,
  },
  [PetName.panther]: {
    strength: 0.25,
    agility: 0.3,
    speed: 0.3,
    hp: 0.15,
  },
  [PetName.dog3]: {
    strength: 0.1,
    agility: 0.2,
    speed: 0.4,
    hp: 0.1,
  },
  [PetName.dog2]: {
    strength: 0.1,
    agility: 0.2,
    speed: 0.4,
    hp: 0.1,
  },
  [PetName.dog1]: {
    strength: 0.1,
    agility: 0.2,
    speed: 0.4,
    hp: 0.1,
  },
} as const;

const petStatToBruteStat = {
  strength: 'strengthValue',
  agility: 'agilityValue',
  speed: 'speedValue',
  hp: 'hp',
} as const;

export const getPetStat = (
  brute: Pick<Brute, 'hp' | 'strengthValue' | 'agilityValue' | 'speedValue'>,
  pet: Pet,
  stat: keyof typeof scalingByPet[PetName],
) => {
  const base = pet[stat];
  const scaling = scalingByPet[pet.name][stat];
  const bruteStat = brute[petStatToBruteStat[stat]];
  return base + Math.ceil(scaling * bruteStat);
};