import { BodyParts } from './brute/availableBodyParts';
import { BodyColors } from './brute/colors';
import { Gender } from './brute/types';
import Fetch from './Fetch';

export interface User {
  id: number;
  email: string;
  login: string;
  language: string;
  password?: string;
  connexionToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Weapon {
  id: number;
  name: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Brute {
  id: number;
  rank: number;
  data: {
    name: string;
    gender: Gender;
    body: BodyParts;
    colors: BodyColors;
    weapons: Weapon[];
    skills: string[];
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
    authenticate: (login: string, password: string): Promise<User> => Fetch<User>('/api/user/authenticate', {
      login,
      password
    }, 'POST'),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    list: (): Promise<User[]> => Fetch('/api/user/list', {}, 'GET'),
  },
  Brute: {
    get: (name: string): Promise<Brute> => Fetch<Brute>(`/api/brute/${name}`),
  }
};

export default Server;
