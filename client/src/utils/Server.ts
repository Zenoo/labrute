import { Brute, DestinyChoice, Fight, Log, User } from '@eternaltwin/labrute-core/types';
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
    getLevelUpChoices: (name: string) => Fetch<{
      brute: Brute,
      choices: [DestinyChoice, DestinyChoice],
    }>(`/api/brute/${name}/level-up-choices`),
    levelUp: (
      name: string,
      data: Brute['data'],
      choice: number,
    ) => Fetch<never>(`/api/brute/${name}/level-up`, { data, choice }, 'POST'),
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
