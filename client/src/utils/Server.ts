import { Brute, User } from '@backend/types';
import Fetch from './Fetch';

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
    create: (data: Brute['data']) => Fetch<Brute>('/api/brute/create', { data }, 'POST'),
  }
};

export default Server;
