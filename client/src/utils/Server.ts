import { AchievementGetRankingsResponse, AchievementsGetResponse, AdminPanelBrute, BruteReportsListResponse, BrutesCreateResponse, BrutesExistsResponse, BrutesGetDestinyResponse, BrutesGetFightsLeftResponse, BrutesGetForRankResponse, BrutesGetLevelUpChoicesResponse, BrutesGetOpponentsResponse, BrutesGetRankingResponse, ClanChallengeBossResponse, ClanCreateResponse, ClanGetResponse, ClanGetThreadResponse, ClanGetThreadsResponse, ClanListResponse, FightCreateResponse, HookBrute, ServerReadyResponse, TournamentHistoryResponse, TournamentsGetDailyResponse, TournamentsGetGlobalResponse, UserGetAdminResponse, UserGetProfileResponse, UsersAdminUpdateRequest, UserWithBrutesBodyColor } from '@labrute/core';
import { Brute, BruteReportReason, BruteReportStatus, DestinyChoiceSide, Fight, Gender, Lang, Log, Prisma } from '@labrute/prisma';
import Fetch from './Fetch';

const Server = {
  isReady: () => Fetch<ServerReadyResponse>('/api/is-ready'),
  User: {
    authenticate: (login: string, token: string) => Fetch<UserWithBrutesBodyColor>('/api/user/authenticate', {
      login,
      token
    }, 'POST'),
    getForAdmin: (id: string) => Fetch<UserGetAdminResponse>(`/api/user/${id}/admin`),
    runDailyJob: () => Fetch<never>('/api/run-daily-job'),
    changeLanguage: (lang: Lang) => Fetch<never>('/api/user/change-language', { lang }, 'POST'),
    changeFightSpeed: (fightSpeed: number) => Fetch<never>('/api/user/change-fight-speed', { fightSpeed }, 'POST'),
    toggleBackgroundMusic: (backgroundMusic: boolean) => Fetch<never>('/api/user/toggle-background-music', { backgroundMusic }, 'POST'),
    adminUpdate: (id: string, data: UsersAdminUpdateRequest) => Fetch<never>(`/api/user/${id}/admin-update`, data, 'POST'),
    getProfile: (id: string) => Fetch<UserGetProfileResponse>(`/api/user/${id}/profile`),
    getDinoRpgRewards: () => Fetch<never>('/api/user/get-dinorpg-reward'),
  },
  Brute: {
    getForHook: (name: string) => Fetch<HookBrute>(`/api/brute/${name}/for-hook`),
    getForAdmin: (name: string) => Fetch<AdminPanelBrute>(`/api/brute/${name}/for-admin`),
    getForVersus: (name: string) => Fetch<Brute>(`/api/brute/${name}/for-versus`),
    isNameAvailable: (name: string) => Fetch<boolean>(`/api/brute/${name}/available`),
    create: (
      name: string,
      user: string,
      gender: Gender,
      body: string,
      colors: string,
      master: string | null,
    ) => Fetch<BrutesCreateResponse>('/api/brute/create', {
      name,
      user,
      gender,
      body,
      colors,
      master,
    }, 'POST'),
    getLevelUpChoices: (name: string) => Fetch<BrutesGetLevelUpChoicesResponse>(`/api/brute/${name}/level-up-choices`),
    levelUp: (
      name: string,
      choice: DestinyChoiceSide,
    ) => Fetch<Brute>(`/api/brute/${name}/level-up`, { choice }, 'POST'),
    getOpponents: (name: string, level: number) => Fetch<BrutesGetOpponentsResponse>(`/api/brute/${name}/get-opponents/${level}`),
    sacrifice: (name: string) => Fetch<{ gold: number }>(`/api/brute/${name}/sacrifice`, {}, 'GET'),
    getForRank: ({ name, rank }: { name: string, rank?: number }) => Fetch<BrutesGetForRankResponse>(`/api/brute/${name}/ranking-data${typeof rank === 'undefined' ? '' : `/${rank}`}`),
    getRanking: (name: string) => Fetch<BrutesGetRankingResponse>(`/api/brute/${name}/ranking`),
    exists: (name: string) => Fetch<BrutesExistsResponse>(`/api/brute/${name}/exists`),
    rankUp: (name: string) => Fetch<never>(`/api/brute/${name}/rank-up`),
    getDestiny: (name: string) => Fetch<BrutesGetDestinyResponse>(`/api/brute/${name}/destiny`),
    getFightsLeft: (name: string) => Fetch<BrutesGetFightsLeftResponse>(`/api/brute/${name}/fights-left`),
    adminUpdate: (name: string, data: Prisma.BruteUncheckedUpdateInput) => Fetch<never>(`/api/brute/${name}/admin-update`, data, 'POST'),
    restore: (id: number) => Fetch<never>(`/api/brute/${id}/restore`),
    favorite: (name: string) => Fetch<never>(`/api/brute/${name}/favorite`),
    reset: (name: string) => Fetch<HookBrute>(`/api/brute/${name}/reset`),
    resetVisuals: (name: string, body: string, colors: string) => Fetch<never>(`/api/brute/${name}/reset-visuals`, { body, colors }, 'POST'),
    giveFreeVisualReset: (name: string) => Fetch<never>(`/api/brute/${name}/give-free-visual-reset`),
  },
  Log: {
    list: (brute: string) => Fetch<(Log & { currentBrute: { name: string } })[]>(`/api/log/list/${brute}`),
  },
  Fight: {
    get: (name: string, id: number) => Fetch<Fight>(`/api/fight/${name}/${id}`),
    create: (brute1: string, brute2: string) => Fetch<FightCreateResponse>('/api/fight/create', { brute1, brute2 }, 'POST'),
  },
  Tournament: {
    getDaily: ({
      name,
      date,
    }: { name: string, date: string }) => Fetch<TournamentsGetDailyResponse>(`/api/tournament/${name}/${date}`),
    registerDaily: (name: string) => Fetch<never>(`/api/tournament/${name}/register`),
    updateStepWatched: (name: string) => Fetch<never>(`/api/tournament/${name}/update-step-watched`),
    setDailyWatched: (name: string) => Fetch<never>(`/api/tournament/${name}/set-daily-watched`),
    getGlobal: ({
      name,
      date,
    }: { name: string, date: string }) => Fetch<TournamentsGetGlobalResponse>(`/api/tournament/global/${name}/${date}`),
    deleteDaily: () => Fetch<never>('/api/tournament/daily', {}, 'DELETE'),
    deleteGlobal: () => Fetch<never>('/api/tournament/global', {}, 'DELETE'),
    getHistory: (name: string) => Fetch<TournamentHistoryResponse>(`/api/tournament/${name}/history`),
    isGlobalTournamentValid: () => Fetch<{ isValid: boolean }>('/api/tournament/is-valid/global'),
  },
  Achievement: {
    getForUser: (userId: string) => Fetch<AchievementsGetResponse>('/api/achievements', { userId }, 'POST'),
    getForBrute: (name: string) => Fetch<AchievementsGetResponse>(`/api/achievements/${name}`),
    getRankings: (byUser: boolean) => Fetch<AchievementGetRankingsResponse>('/api/achievements/rankings/all', { byUser }),
  },
  BruteReport: {
    list: (status: BruteReportStatus) => Fetch<BruteReportsListResponse>(`/api/report/list/${status}`),
    send: (name: string, reason: BruteReportReason) => Fetch<never>(`/api/report/send/${name}/${reason}`),
    accept: (id: number) => Fetch<never>(`/api/report/${id}/accept`),
    reject: (id: number) => Fetch<never>(`/api/report/${id}/reject`),
  },
  Clan: {
    list: ({ page, search }: { page: number, search: string }) => Fetch<ClanListResponse>('/api/clan/list', { page, search }),
    create: (brute: string, name: string) => Fetch<ClanCreateResponse>(`/api/brute/${brute}/clan/create`, { name }),
    get: (id: number) => Fetch<ClanGetResponse>(`/api/clan/${id}`),
    request: (brute: string, id: number) => Fetch<never>(`/api/brute/${brute}/clan/${id}/request`),
    cancelRequest: (brute: string, id: number) => Fetch<never>(`/api/brute/${brute}/clan/${id}/request-cancel`),
    accept: (brute: string, id: number) => Fetch<never>(`/api/clan/${id}/accept/${brute}`),
    reject: (brute: string, id: number) => Fetch<never>(`/api/clan/${id}/reject/${brute}`),
    remove: (brute: string, id: number) => Fetch<never>(`/api/clan/${id}/remove/${brute}`),
    setMaster: (brute: string, id: number) => Fetch<never>(`/api/clan/${id}/set-master/${brute}`),
    leave: (brute: string, id: number) => Fetch<never>(`/api/brute/${brute}/clan/${id}/leave`),
    getThreads: (data: { brute: string, id: number }) => Fetch<ClanGetThreadsResponse>(`/api/brute/${data.brute}/clan/${data.id}/threads`),
    createThread: (
      brute: string,
      id: number,
      title: string,
      content: string,
    ) => Fetch<ClanGetThreadsResponse>(`/api/brute/${brute}/clan/${id}/thread/create`, { title, content }, 'POST'),
    createPost: (
      brute: string,
      id: number,
      content: string,
    ) => Fetch<never>(`/api/brute/${brute}/thread/${id}/post/create`, { content }, 'POST'),
    lockThread: (brute: string, id: number, threadId: number) => Fetch<never>(`/api/brute/${brute}/clan/${id}/thread/${threadId}/lock`),
    pinThread: (brute: string, id: number, threadId: number) => Fetch<never>(`/api/brute/${brute}/clan/${id}/thread/${threadId}/pin`),
    unpinThread: (brute: string, id: number, threadId: number) => Fetch<never>(`/api/brute/${brute}/clan/${id}/thread/${threadId}/unpin`),
    getThread: (brute: string, id: number, threadId: number, page: number) => Fetch<ClanGetThreadResponse>(`/api/brute/${brute}/clan/${id}/thread/${threadId}`, { page }),
    challengeBoss: (brute: string, id: number) => Fetch<ClanChallengeBossResponse>(`/api/brute/${brute}/clan/${id}/challenge-boss`),
  }
};

export default Server;
