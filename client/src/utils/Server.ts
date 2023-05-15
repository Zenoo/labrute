import { BrutesCreateResponse, BrutesExistsResponse, BrutesGetDestinyResponse, BrutesGetFightsLeftResponse, BrutesGetForRankResponse, BrutesGetOpponentsResponse, BrutesGetRankingResponse, BruteWithBodyColors, FullTournament, TournamentsGetGlobalResponse, UserWithBrutesBodyColor } from '@labrute/core';
import { Achievement, Brute, DestinyChoice, DestinyChoiceSide, Fight, Gender, Lang, Log, Prisma, Tournament, User } from '@labrute/prisma';
import Fetch from './Fetch';

const Server = {
  User: {
    authenticate: (login: string, token: string) => Fetch<UserWithBrutesBodyColor>('/api/user/authenticate', {
      login,
      token
    }, 'POST'),
    list: () => Fetch<User[]>('/api/user/list', {}, 'GET'),
    runDailyJob: () => Fetch<never>('/api/run-daily-job'),
    changeLanguage: (lang: Lang) => Fetch<never>('/api/user/change-language', { lang }, 'POST'),
    changeFightSpeed: (fightSpeed: number) => Fetch<never>('/api/user/change-fight-speed', { fightSpeed }, 'POST'),
    toggleBackgroundMusic: (backgroundMusic: boolean) => Fetch<never>('/api/user/toggle-background-music', { backgroundMusic }, 'POST'),
  },
  Brute: {
    list: () => Fetch<Brute[]>('/api/brute/list/'),
    get: ({
      name,
      include,
      where,
    }: { name: string, include?: Prisma.BruteInclude, where?: Prisma.BruteWhereInput }) => Fetch<Brute>(`/api/brute/${name}/get`, { include, where }, 'POST'),
    isNameAvailable: (name: string) => Fetch<boolean>(`/api/brute/${name}/available`),
    isReadyToFight: (name: string) => Fetch<boolean>(`/api/brute/${name}/ready`),
    create: (
      name: string,
      user: string,
      gender: Gender,
      body: Prisma.BruteBodyCreateWithoutBruteInput,
      colors: Prisma.BruteColorsCreateWithoutBruteInput,
      master: string | null,
    ) => Fetch<BrutesCreateResponse>('/api/brute/create', {
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
    getOpponents: (name: string, level: number) => Fetch<BrutesGetOpponentsResponse>(`/api/brute/${name}/get-opponents/${level}`),
    sacrifice: (name: string) => Fetch<{ points: number }>(`/api/brute/${name}/sacrifice`, {}, 'GET'),
    getForRank: ({ name, rank }: { name: string, rank?: number }) => Fetch<BrutesGetForRankResponse>(`/api/brute/${name}/ranking-data${typeof rank === 'undefined' ? '' : `/${rank}`}`),
    getRanking: (name: string) => Fetch<BrutesGetRankingResponse>(`/api/brute/${name}/ranking`),
    exists: (name: string) => Fetch<BrutesExistsResponse>(`/api/brute/${name}/exists`),
    rankUp: (name: string) => Fetch<never>(`/api/brute/${name}/rank-up`),
    getDestiny: (name: string) => Fetch<BrutesGetDestinyResponse>(`/api/brute/${name}/destiny`),
    getFightsLeft: (name: string) => Fetch<BrutesGetFightsLeftResponse>(`/api/brute/${name}/fights-left`),
    adminUpdate: (name: string, data: Prisma.BruteUncheckedUpdateInput) => Fetch<never>(`/api/brute/${name}/admin-update`, data, 'POST'),
  },
  Log: {
    list: (brute: string) => Fetch<(Log & { currentBrute: { name: string } })[]>(`/api/log/list/${brute}`),
  },
  Fight: {
    get: (name: string, id: number) => Fetch<Fight>(`/api/fight/${name}/${id}`),
    create: (brute1: string, brute2: string) => Fetch<{ id: number }>('/api/fight/create', { brute1, brute2 }, 'POST'),
  },
  Tournament: {
    getDaily: ({
      name,
      date,
    }: { name: string, date: string }) => Fetch<FullTournament>(`/api/tournament/${name}/${date}`),
    registerDaily: (name: string) => Fetch<never>(`/api/tournament/${name}/register`),
    updateStepWatched: (name: string) => Fetch<never>(`/api/tournament/${name}/update-step-watched`),
    setDailyWatched: (name: string) => Fetch<never>(`/api/tournament/${name}/set-daily-watched`),
    getGlobal: ({
      name,
      date,
    }: { name: string, date: string }) => Fetch<TournamentsGetGlobalResponse>(`/api/tournament/global/${name}/${date}`),
    deleteDaily: () => Fetch<never>('/api/tournament/daily', {}, 'DELETE'),
    deleteGlobal: () => Fetch<never>('/api/tournament/global', {}, 'DELETE'),
    getHistory: (name: string) => Fetch<Tournament[]>(`/api/tournament/${name}/history`),
  },
  Spritesheet: {
    regenerate: () => Fetch<never>('/api/spritesheet/regenerate'),
  },
  Achievement: {
    getForUser: (userId: string) => Fetch<Achievement[]>('/api/achievements', { userId }, 'POST'),
    getForBrute: (name: string) => Fetch<Achievement[]>(`/api/achievements/${name}`),
  },
};

export default Server;
