import { BodyColors, BodyParts, Brute, DestinyChoice, Fight, Gender, Log, User } from '@eternaltwin/labrute-core/types';
import Fetch from './Fetch.js';

const Server = {
  User: {
    authenticate: (login: string, token: string) => Fetch<User>('/api/user/authenticate', {
      login,
      token
    }, 'POST'),
    list: () => Fetch<User[]>('/api/user/list', {}, 'GET'),
  },
  Brute: {
    list: () => Fetch<Brute[]>('/api/brute/list/'),
    get: (name: string) => Fetch<Brute>(`/api/brute/${name}`),
    isNameAvailable: (name: string) => Fetch<boolean>(`/api/brute/${name}/available`),
    create: (
      name: string,
      user: string,
      gender: Gender,
      body: BodyParts,
      colors: BodyColors,
      master: string | null,
    ) => Fetch<{brute: Brute, pointsLost: number }>('/api/brute/create', {
      name,
      user,
      gender,
      body,
      colors,
      master,
    }, 'POST'),
    getLevelUpChoices: (name: string) => Fetch<{
      brute: Brute,
      choices: [DestinyChoice, DestinyChoice],
    }>(`/api/brute/${name}/level-up-choices`),
    levelUp: (
      name: string,
      choice: number,
    ) => Fetch<never>(`/api/brute/${name}/level-up`, { choice }, 'POST'),
    getOpponents: (name: string, level: number) => Fetch<Brute[]>(`/api/brute/${name}/get-opponents/${level}`),
    sacrifice: (name: string) => Fetch<{ points: number }>(`/api/brute/${name}/sacrifice`, {}, 'GET'),
  },
  Log: {
    list: (brute: string) => Fetch<Log[]>(`/api/log/list/${brute}`),
  },
  Fight: {
    get: (name: string, id: number) => Fetch<Fight>(`/api/fight/${name}/${id}`),
    create: (brute1: string, brute2: string) => Fetch<{ id: number }>('/api/fight/create', { brute1, brute2 }, 'POST'),
  }
};

export default Server;
