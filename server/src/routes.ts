/* eslint-disable @typescript-eslint/no-misused-promises */
import { ServerReadyResponse } from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { Application } from 'express-ws';
import { Config } from './config.js';
import { Achievements } from './controllers/Achievements.js';
import { BruteReports } from './controllers/BruteReports.js';
import { Brutes } from './controllers/Brutes.js';
import { Clans } from './controllers/Clans.js';
import { ClanWars } from './controllers/ClanWars.js';
import { Configs } from './controllers/Configs.js';
import { Events } from './controllers/Events.js';
import { Fights } from './controllers/Fights.js';
import { Logs } from './controllers/Logs.js';
import { Notifications } from './controllers/Notifications.js';
import { OAuth } from './controllers/OAuth.js';
import { Tournaments } from './controllers/Tournaments.js';
import { UserLogs } from './controllers/UserLogs.js';
import { Users } from './controllers/Users.js';
import { ServerState } from './utils/ServerState.js';

export const initRoutes = (app: Application, config: Config, prisma: PrismaClient) => {
  app.get('/api', (_req: Request, res: Response) => {
    res.status(200).send({
      message: 'server is running!',
    });
  });

  // Server state
  app.get('/api/is-ready', (
    _req: Request,
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
  app.patch('/api/run-daily-job', Users.runDailyJob(prisma));

  // User
  app.post('/api/user/authenticate', Users.authenticate(prisma));
  app.patch('/api/user/get-dinorpg-reward', Users.getDinoRpgRewards(prisma));
  app.get('/api/user/:id/admin', Users.get(prisma));
  app.put('/api/user/change-language', Users.changeLanguage(prisma));
  app.put('/api/user/change-fight-speed', Users.changeFightSpeed(prisma));
  app.put('/api/user/toggle-background-music', Users.toggleBackgroundMusic(prisma));
  app.put('/api/user/:id/admin-update', Users.adminUpdate(prisma));
  app.get('/api/user/:userId/profile', Users.getProfile(prisma));
  app.get('/api/user/:userId/done', Users.isDoneForToday(prisma));
  app.patch('/api/user/:userId/ban', Users.ban(prisma));
  app.patch('/api/user/:userId/unban', Users.unban(prisma));
  app.get('/api/user/banlist', Users.bannedList(prisma));
  app.get('/api/user/multiple-accounts', Users.multipleAccountsList(prisma));
  app.get('/api/user/next-modifiers', Users.getNextModifiers(prisma));
  app.put('/api/user/next-modifiers', Users.setNextModifiers(prisma));
  app.patch('/api/user/toggle-follow/:bruteId', Users.toggleFollow(prisma));
  app.put('/api/user/settings', Users.updateSettings(prisma));
  app.patch('/api/user/disconnect', Users.disconnect(prisma));

  // Brute
  app.get('/api/brute/:name/for-versus', Brutes.getForVersus(prisma));
  app.get('/api/brute/:name/for-hook', Brutes.getForHook(prisma));
  app.get('/api/brute/:name/for-admin', Brutes.getForAdmin(prisma));
  app.get('/api/brute/:name/fights-left', Brutes.getFightsLeft(prisma));
  app.get('/api/brute/:name/available', Brutes.isNameAvailable(prisma));
  app.put('/api/brute', Brutes.create(prisma));
  app.get('/api/brute/:name/level-up-choices', Brutes.getLevelUpChoices(prisma));
  app.patch('/api/brute/:name/level-up', Brutes.levelUp(prisma));
  app.get('/api/brute/:name/get-opponents/:level', Brutes.getOpponents(prisma));
  app.delete('/api/brute/:name', Brutes.sacrifice(prisma));
  app.get('/api/brute/:name/ranking-data/:rank', Brutes.getForRank(prisma));
  app.get('/api/brute/:name/ranking-data', Brutes.getForRank(prisma));
  app.get('/api/brute/:name/ranking', Brutes.getRanking(prisma));
  app.get('/api/brute/:name/exists', Brutes.exists(prisma));
  app.patch('/api/brute/:name/rank-up', Brutes.rankUp(prisma));
  app.patch('/api/brute/:name/ascend', Brutes.ascend(prisma));
  app.get('/api/brute/:name/destiny', Brutes.getDestiny(prisma));
  app.put('/api/brute/:name/admin-update', Brutes.adminUpdate(prisma));
  app.put('/api/brute/:id/restore', Brutes.restore(prisma));
  app.patch('/api/brute/:name/favorite', Brutes.toggleFavorite(prisma));
  app.patch('/api/brute/:name/reset', Brutes.reset(prisma));
  app.patch('/api/brute/:name/reset-visuals', Brutes.resetVisuals(prisma));
  app.patch('/api/brute/:name/change-name/:newName', Brutes.changeName(prisma));
  app.get('/api/brute/:name/inventory', Brutes.getInventory(prisma));
  app.put('/api/brute/item', Brutes.giveItem(prisma));
  app.get('/api/brute/:name/master-clan-id', Brutes.getClanIdAsMaster(prisma));
  app.put('/api/brute/:name/update-event-round-watched/:fight', Brutes.updateEventRoundWatched(prisma));

  // Log
  app.get('/api/log/list/:name', Logs.list(prisma));
  app.get('/api/log/user-feed/:page', Logs.getForUserFeed(prisma));

  // Fight
  app.patch('/api/fight/:id/toggle-favorite', Fights.toggleFavorite(prisma));
  app.get('/api/fight/:id', Fights.get(prisma));
  app.patch('/api/fight', Fights.create(prisma));

  // Tournament
  app.get('/api/tournament/is-valid/global', Tournaments.isGlobalTournamentValid(prisma));
  app.patch('/api/tournament/:name/register', Tournaments.registerDaily(prisma));
  app.get('/api/tournament/:name/history', Tournaments.getHistory(prisma));
  app.patch('/api/tournament/:name/update-step-watched', Tournaments.updateStepWatched(prisma));
  app.patch('/api/tournament/:name/update-global-round-watched/:fight', Tournaments.updateGlobalRoundWatched(prisma));
  app.put('/api/tournament/:name/skip-watching-global', Tournaments.skipWatchingGlobal(prisma));
  app.put('/api/tournament/:name/set-daily-watched', Tournaments.setDailyWatched(prisma));
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
  app.get('/api/report/list/:status/:page', BruteReports.list(prisma));
  app.put('/api/report/send/:name/:reason', BruteReports.send(prisma));
  app.patch('/api/report/:id/accept', BruteReports.accept(prisma));
  app.patch('/api/report/:id/reject', BruteReports.reject(prisma));
  app.put('/api/report/banned-word/:word', BruteReports.addBannedWord(prisma));

  // Clan
  app.get('/api/clan/list', Clans.list(prisma));
  app.put('/api/brute/:brute/clan/create', Clans.create(prisma));
  app.get('/api/clan/:id', Clans.get(prisma));
  app.put('/api/brute/:brute/clan/:id/request', Clans.request(prisma));
  app.delete('/api/brute/:brute/clan/:id/request', Clans.cancelRequest(prisma));
  app.patch('/api/clan/:id/accept/:brute', Clans.accept(prisma));
  app.patch('/api/clan/:id/reject/:brute', Clans.reject(prisma));
  app.patch('/api/clan/:id/remove/:brute', Clans.remove(prisma));
  app.put('/api/clan/:id/master/:brute', Clans.setMaster(prisma));
  app.patch('/api/brute/:brute/clan/:id/leave', Clans.leave(prisma));
  app.get('/api/brute/:brute/clan/:id/threads', Clans.getThreads(prisma));
  app.put('/api/brute/:brute/clan/:id/thread/create', Clans.createThread(prisma));
  app.put('/api/brute/:brute/thread/:id/post/create', Clans.createPost(prisma));
  app.patch('/api/brute/:brute/clan/:id/thread/:threadId/lock', Clans.lockThread(prisma));
  app.patch('/api/brute/:brute/clan/:id/thread/:threadId/pin', Clans.pinThread(prisma));
  app.delete('/api/brute/:brute/clan/:id/thread/:threadId', Clans.deleteThread(prisma));
  app.patch('/api/brute/:brute/clan/:id/thread/:threadId', Clans.updateThread(prisma));
  app.patch('/api/brute/:brute/clan/:id/thread/:threadId/unpin', Clans.unpinThread(prisma));
  app.get('/api/brute/:brute/clan/:id/thread/:threadId', Clans.getThread(prisma));
  app.put('/api/brute/:brute/clan/:id/challenge-boss', Clans.challengeBoss(prisma));
  app.put('/api/clan/:id/toggle-war', Clans.toggleClanWarParticipation(prisma));
  app.get('/api/clan/:id/admin', Clans.getForAdmin(prisma));
  app.patch('/api/clan/:id/update', Clans.adminUpdate(prisma));
  app.ws('/api/clan/:id/boss-fight/:fightId/:bruteId', Clans.bossFightWs(prisma));

  // Clan war
  app.put('/api/clan/war/friendly', ClanWars.declareFriendlyWar(prisma));
  app.post('/api/clan/war/fighters', ClanWars.getAvailableFighters(prisma));
  app.post('/api/clan/war/fighters/used', ClanWars.getUsedFighters(prisma));
  app.patch('/api/clan/war/fighters/toggle', ClanWars.toggleFighter(prisma));
  app.get('/api/clan/:clan/war/history', ClanWars.getHistory(prisma));
  app.get('/api/clan/:clan/war/:war', ClanWars.get(prisma));
  app.delete('/api/clan/war', ClanWars.cancel(prisma));
  app.patch('/api/clan/war/accept', ClanWars.accept(prisma));
  app.get('/api/clan/war/:warId/fight/:fightId', ClanWars.getFight(prisma));

  // Event
  app.get('/api/event/list', Events.list(prisma));
  app.get('/api/event/:id/brute/:bruteId', Events.get(prisma));
  app.get('/api/event/:id/round/:round', Events.getRound(prisma));
  app.get('/api/event/currents', Events.listCurrent(prisma));

  // Notifications
  app.get('/api/notification/list', Notifications.list(prisma));
  app.patch('/api/notification/all/read', Notifications.setAllRead(prisma));
  app.patch('/api/notification/:id/read', Notifications.setRead(prisma));

  // Config
  app.get('/api/config/list', Configs.list(prisma));
  app.put('/api/config/set', Configs.set(prisma));
  app.post('/api/config/decrypt', Configs.decrypt(prisma));
  app.delete('/api/config', Configs.delete(prisma));

  // User logs
  app.post('/api/user-log/list', UserLogs.list(prisma));
};
