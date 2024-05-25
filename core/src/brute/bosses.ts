import { BossName, PetName } from '@labrute/prisma';
import { pets, Pet } from './pets';

export interface Boss {
  name: BossName;
  base: PetName;
  scale: number;
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
  reach: number;
}

const bear = pets.find((p) => p.name === PetName.bear) as Pet;
const panther = pets.find((p) => p.name === PetName.panther) as Pet;

const bosses: Boss[] = [
  {
    name: BossName.GoldClaw,
    base: PetName.bear,
    scale: 2,
    initiative: -0.5,
    strength: bear.strength * 10,
    agility: bear.agility,
    speed: bear.speed,
    hp: 100000,
    counter: bear.counter,
    combo: bear.combo,
    block: bear.block,
    evasion: bear.evasion,
    accuracy: 0.75,
    disarm: bear.disarm,
    damage: bear.damage,
    reach: 3,
  },
  {
    name: BossName.EmberFang,
    base: PetName.panther,
    scale: 3,
    initiative: -0.5,
    strength: panther.strength * 2,
    agility: panther.agility,
    speed: panther.speed * 10,
    hp: 50000,
    counter: panther.counter,
    combo: panther.combo,
    block: panther.block,
    evasion: panther.evasion,
    accuracy: 0.75,
    disarm: panther.disarm,
    damage: panther.damage,
    reach: 3,
  },
];

export default bosses;
