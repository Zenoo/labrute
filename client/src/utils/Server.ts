import { Brute, Destiny, Fight, LevelUpChoice, Log, User } from '@eternaltwin/labrute-core/types';
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
    get: (name: string) => Fetch<Brute>(`/api/brute/${name}`),
    isNameAvailable: (name: string) => Fetch<boolean>(`/api/brute/${name}/available`),
    create: (brute: Brute) => Fetch<Brute>('/api/brute/create', brute, 'POST'),
    startLevelUp: (name: string) => Fetch<{ brute: Brute, destiny: Destiny | undefined }>(`/api/brute/${name}/start-level-up`),
    saveDestinyChoices: (name: string, choices: [LevelUpChoice, LevelUpChoice]) => Fetch<Destiny>(`/api/brute/${name}/save-destiny-choices`, { choices }, 'POST'),
    levelUp: (
      name: string,
      data: Brute['data'],
      choice: number,
      destiny: number,
    ) => Fetch<never>(`/api/brute/${name}/level-up`, { data, choice, destiny }, 'POST'),
    getOpponents: (name: string, level: number) => Fetch<Brute[]>(`/api/brute/${name}/get-opponents/${level}`),
  },
  Log: {
    list: (brute: string) => Fetch<Log[]>(`/api/log/list/${brute}`),
  },
  Fight: {
    get: (name: string, id: number) => Fetch<Fight>(`/api/fight/${name}/${id}`),
  }
};

export default Server;
