import { BruteWithBodyColors, UserWithBrutesBodyColor } from '@labrute/core';
import { Brute, DestinyChoice, DestinyChoiceSide, Fight, Gender, Log, Prisma, User } from '@labrute/prisma';
import Fetch from './Fetch';

const Server = {
  User: {
    authenticate: (login: string, token: string) => Fetch<UserWithBrutesBodyColor>('/api/user/authenticate', {
      login,
      token
    }, 'POST'),
    list: () => Fetch<User[]>('/api/user/list', {}, 'GET'),
  },
  Brute: {
    list: () => Fetch<Brute[]>('/api/brute/list/'),
    get: ({
      name,
      include,
    }: { name: string, include?: Prisma.BruteInclude }) => Fetch<Brute>(`/api/brute/${name}/get`, { include }, 'POST'),
    isNameAvailable: (name: string) => Fetch<boolean>(`/api/brute/${name}/available`),
    isReadyToFight: (name: string) => Fetch<boolean>(`/api/brute/${name}/ready`),
    create: (
      name: string,
      user: string,
      gender: Gender,
      body: Prisma.BruteBodyCreateWithoutBruteInput,
      colors: Prisma.BruteColorsCreateWithoutBruteInput,
      master: string | null,
    ) => Fetch<{brute: BruteWithBodyColors, pointsLost: number }>('/api/brute/create', {
      name,
      user,
      gender,
      body,
      colors,
      master,
    }, 'POST'),
    getLevelUpChoices: (name: string) => Fetch<{
      brute: BruteWithBodyColors,
      choices: [DestinyChoice, DestinyChoice],
    }>(`/api/brute/${name}/level-up-choices`),
    levelUp: (
      name: string,
      choice: DestinyChoiceSide,
    ) => Fetch<never>(`/api/brute/${name}/level-up`, { choice }, 'POST'),
    getOpponents: (name: string, level: number) => Fetch<BruteWithBodyColors[]>(`/api/brute/${name}/get-opponents/${level}`),
    sacrifice: (name: string) => Fetch<{ points: number }>(`/api/brute/${name}/sacrifice`, {}, 'GET'),
  },
  Log: {
    list: (brute: string) => Fetch<(Log & { currentBrute: { name: string } })[]>(`/api/log/list/${brute}`),
  },
  Fight: {
    get: (name: string, id: number) => Fetch<Fight>(`/api/fight/${name}/${id}`),
    create: (brute1: string, brute2: string) => Fetch<{ id: number }>('/api/fight/create', { brute1, brute2 }, 'POST'),
  }
};

export default Server;
