import { BodyParts } from './brute/availableBodyParts';
import { BodyColors } from './brute/colors';
import skills from './brute/skills';
import { Gender } from './brute/types';
import weapons from './brute/weapons';
import Fetch from './Fetch';

export interface User {
  id: number;
  name: string;
  token: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Pets {
  dog: 0 | 1 | 2 | 3;
  panther: 0 | 1;
  bear: 0 | 1;
}

export interface Brute {
  id: number;
  rank: number;
  data: {
    name: string;
    level: number;
    xp: number;
    stats: {
      hp: number;
      strength: number;
      agility: number;
      speed: number;
    }
    ranking: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    gender: Gender;
    body: BodyParts;
    colors: BodyColors;
    weapons: typeof weapons;
    skills: typeof skills[number]['name'][];
    pets: Pets;
    master: {
      id: number;
      name: string;
    }
    victories: number;
    pupils: number;
  };
}

const Server = {
  User: {
    authenticate: (login: string, token: string) => Fetch<User>('/api/user/authenticate', {
      login,
      token
    }, 'POST'),
    list: () => Fetch<User[]>('/api/user/list', {}, 'GET'),
  },
  Brute: {
    get: (name: string): Promise<Brute> => Fetch<Brute>(`/api/brute/${name}`),
  }
};

export default Server;
