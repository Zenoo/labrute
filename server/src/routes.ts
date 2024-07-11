/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@labrute/prisma';
import type { Express, Request, Response } from 'express';
import { ServerReadyResponse } from '@labrute/core';
import Brutes from './controllers/Brutes.js';
import Fights from './controllers/Fights.js';
import Logs from './controllers/Logs.js';
import OAuth from './controllers/OAuth.js';
import Tournaments from './controllers/Tournaments.js';
import Users from './controllers/Users.js';
import Achievements from './controllers/Achievements.js';
import ServerState from './utils/ServerState.js';
import BruteReports from './controllers/BruteReports.js';
import Clans from './controllers/Clans.js';
import { Config } from './config.js';

export default function initRoutes(app: Express, config: Config, prisma: PrismaClient) {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!',
  }));

  // Server state
  app.get('/api/is-ready', (
    req: Request,
    res: Response<ServerReadyResponse>,
  ) => {
    res.status(200).send({
      ready: ServerState.isReady(),
    });
  });

  // OAuth
  const oauth = new OAuth(config, prisma);
  app.get('/api/oauth/redirect', oauth.redirect.bind(oauth));
  app.get('/api/oauth/token', oauth.token.bind(oauth));

  // Daily job
  app.get('/api/run-daily-job', Users.runDailyJob(prisma));

  // User
  app.post('/api/user/authenticate', Users.authenticate(prisma));
  app.get('/api/user/get-dinorpg-reward', Users.getDinoRpgRewards(prisma));
  app.get('/api/user/:id/admin', Users.get(prisma));
  app.post('/api/user/change-language', Users.changeLanguage(prisma));
  app.post('/api/user/change-fight-speed', Users.changeFightSpeed(prisma));
  app.post('/api/user/toggle-background-music', Users.toggleBackgroundMusic(prisma));
  app.post('/api/user/:id/admin-update', Users.adminUpdate(prisma));
  app.get('/api/user/:userId/profile', Users.getProfile(prisma));
  app.get('/api/user/:userId/done', Users.isDoneForToday(prisma));
  app.post('/api/user/:userId/ban', Users.ban(prisma));
  app.get('/api/user/:userId/unban', Users.unban(prisma));
  app.get('/api/user/banlist', Users.bannedList(prisma));
  app.get('/api/user/multiple-accounts', Users.multipleAccountsList(prisma));

  // Brute
  app.get('/api/brute/:name/for-versus', Brutes.getForVersus(prisma));
  app.get('/api/brute/:name/for-hook', Brutes.getForHook(prisma));
  app.get('/api/brute/:name/for-admin', Brutes.getForAdmin(prisma));
  app.get('/api/brute/:name/fights-left', Brutes.getFightsLeft(prisma));
  app.get('/api/brute/:name/available', Brutes.isNameAvailable(prisma));
  app.post('/api/brute/create', Brutes.create(prisma));
  app.get('/api/brute/:name/level-up-choices', Brutes.getLevelUpChoices(prisma));
  app.post('/api/brute/:name/level-up', Brutes.levelUp(prisma));
  app.get('/api/brute/:name/get-opponents/:level', Brutes.getOpponents(prisma));
  app.get('/api/brute/:name/sacrifice', Brutes.sacrifice(prisma));
  app.get('/api/brute/:name/ranking-data/:rank', Brutes.getForRank(prisma));
  app.get('/api/brute/:name/ranking-data', Brutes.getForRank(prisma));
  app.get('/api/brute/:name/ranking', Brutes.getRanking(prisma));
  app.get('/api/brute/:name/exists', Brutes.exists(prisma));
  app.get('/api/brute/:name/rank-up', Brutes.rankUp(prisma));
  app.get('/api/brute/:name/destiny', Brutes.getDestiny(prisma));
  app.post('/api/brute/:name/admin-update', Brutes.adminUpdate(prisma));
  app.get('/api/brute/:id/restore', Brutes.restore(prisma));
  app.get('/api/brute/:name/favorite', Brutes.toggleFavorite(prisma));
  app.get('/api/brute/:name/reset', Brutes.reset(prisma));
  app.post('/api/brute/:name/reset-visuals', Brutes.resetVisuals(prisma));
  app.get('/api/brute/:name/give-free-visual-reset', Brutes.giveFreeVisualReset(prisma));
  app.get('/api/brute/:name/change-name/:newName', Brutes.changeName(prisma));

  // Log
  app.get('/api/log/list/:name', Logs.list(prisma));

  // Fight
  app.get('/api/fight/:name/:id', Fights.get(prisma));
  app.post('/api/fight/create', Fights.create(prisma));

  // Tournament
  app.get('/api/tournament/is-valid/global', Tournaments.isGlobalTournamentValid(prisma));
  app.get('/api/tournament/:name/register', Tournaments.registerDaily(prisma));
  app.get('/api/tournament/:name/history', Tournaments.getHistory(prisma));
  app.get('/api/tournament/:name/update-step-watched', Tournaments.updateStepWatched(prisma));
  app.get('/api/tournament/:name/update-global-round-watched/:fight', Tournaments.updateGlobalRoundWatched(prisma));
  app.get('/api/tournament/:name/skip-watching-global', Tournaments.skipWatchingGlobal(prisma));
  app.get('/api/tournament/:name/set-daily-watched', Tournaments.setDailyWatched(prisma));
  app.get('/api/tournament/global/:name/:date', Tournaments.getGlobal(prisma));
  app.get('/api/tournament/:name/:date', Tournaments.getDaily(prisma));
  app.delete('/api/tournament/daily', Tournaments.deleteDaily(prisma));
  app.delete('/api/tournament/global', Tournaments.deleteGlobal(prisma));

  // Achievement
  app.post('/api/achievements', Achievements.getForUser(prisma));
  // app.get('/api/achievements/titles-as-csv', Achievements.generateTitlesCSV);
  app.get('/api/achievements/:name', Achievements.getForBrute(prisma));
  app.get('/api/achievements/rankings/all', Achievements.getRankings(prisma));

  // BruteReport
  app.get('/api/report/list/:status', BruteReports.list(prisma));
  app.get('/api/report/send/:name/:reason', BruteReports.send(prisma));
  app.get('/api/report/:id/accept', BruteReports.accept(prisma));
  app.get('/api/report/:id/reject', BruteReports.reject(prisma));

  // Clan
  app.get('/api/clan/list', Clans.list(prisma));
  app.get('/api/brute/:brute/clan/create', Clans.create(prisma));
  app.get('/api/clan/:id', Clans.get(prisma));
  app.get('/api/brute/:brute/clan/:id/request', Clans.request(prisma));
  app.get('/api/brute/:brute/clan/:id/request-cancel', Clans.cancelRequest(prisma));
  app.get('/api/clan/:id/accept/:brute', Clans.accept(prisma));
  app.get('/api/clan/:id/reject/:brute', Clans.reject(prisma));
  app.get('/api/clan/:id/remove/:brute', Clans.remove(prisma));
  app.get('/api/clan/:id/set-master/:brute', Clans.setMaster(prisma));
  app.get('/api/brute/:brute/clan/:id/leave', Clans.leave(prisma));
  app.get('/api/brute/:brute/clan/:id/threads', Clans.getThreads(prisma));
  app.post('/api/brute/:brute/clan/:id/thread/create', Clans.createThread(prisma));
  app.post('/api/brute/:brute/thread/:id/post/create', Clans.createPost(prisma));
  app.get('/api/brute/:brute/clan/:id/thread/:threadId/lock', Clans.lockThread(prisma));
  app.get('/api/brute/:brute/clan/:id/thread/:threadId/pin', Clans.pinThread(prisma));
  app.get('/api/brute/:brute/clan/:id/thread/:threadId/unpin', Clans.unpinThread(prisma));
  app.get('/api/brute/:brute/clan/:id/thread/:threadId', Clans.getThread(prisma));
  app.get('/api/brute/:brute/clan/:id/challenge-boss', Clans.challengeBoss(prisma));
}
