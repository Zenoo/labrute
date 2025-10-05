import { RouteObject } from 'react-router';
import React from 'react';

// Import layout components
import MainLayout from './routes/_layout';
import BruteLayout from './routes/$bruteName/_layout';
import AdminLayout from './routes/admin-panel/_layout';
import ModeratorLayout from './routes/moderator-panel/_layout';

// Import route components
import Index from './routes/_index';
import NotFound from './routes/$';
import OAuthCallback from './routes/oauth.callback';
import Wiki from './routes/wiki';
import Hall from './routes/hall';
import Fight from './routes/fight.$fightId';
import PatchNotes from './routes/patch-notes';
import AchievementRankings from './routes/achievements.rankings';
import GeneratingTournaments from './routes/generating-tournaments';
import UnknownBrute from './routes/unknown-brute';

// Import brute routes
import BruteIndex from './routes/$bruteName/_index';
import BruteCell from './routes/$bruteName/cell';
import BruteArena from './routes/$bruteName/arena';
import BruteChangeName from './routes/$bruteName/change-name';
import BruteAchievements from './routes/$bruteName/achievements';
import BruteAscend from './routes/$bruteName/ascend';
import BruteDestiny from './routes/$bruteName/destiny';
import BruteFight from './routes/$bruteName/fight.$fightId';
import BruteInventory from './routes/$bruteName/inventory';
import BruteLevelUp from './routes/$bruteName/level-up';
import BruteRankingIndex from './routes/$bruteName/ranking._index';
import BruteRanking from './routes/$bruteName/ranking.$rank';
import BruteResetVisuals from './routes/$bruteName/reset-visuals';
import BruteTournament from './routes/$bruteName/tournament.$date';
import BruteTournamentGlobal from './routes/$bruteName/tournament.global.$date';
import BruteTournaments from './routes/$bruteName/tournaments';
import BruteVersus from './routes/$bruteName/versus.$opponentName';

// Import clan routes
import ClanIndex from './routes/$bruteName/clan/$id._index';
import ClanCreate from './routes/$bruteName/clan/create';
import ClanRanking from './routes/$bruteName/clan/ranking';
import ClanForum from './routes/$bruteName/clan/$id.forum';
import ClanPostIndex from './routes/$bruteName/clan/$id.post.$tid._index';
import ClanPostEdit from './routes/$bruteName/clan/$id.post.$tid.edit';
import ClanThread from './routes/$bruteName/clan/$id.thread.$tid';
import ClanWarIndex from './routes/$bruteName/clan/$id.war.$warId._index';
import ClanWarFight from './routes/$bruteName/clan/$id.war.$warId.fight.$fightId';
import ClanWarHistory from './routes/$bruteName/clan/$id.war.history';

// Import event routes
import EventIndex from './routes/$bruteName/event/$id._index';
import EventCurrent from './routes/$bruteName/event/current';
import EventHistory from './routes/$bruteName/event/history';
import EventRound from './routes/$bruteName/event/$id.round.$round';

// Import user routes
import UserIndex from './routes/user/$userId._index';
import UserFeed from './routes/user/$userId.feed';

// Import admin routes
import AdminIndex from './routes/admin-panel/_index';
import AdminUser from './routes/admin-panel/user';
import AdminBrute from './routes/admin-panel/brute.$bruteName';
import AdminConfig from './routes/admin-panel/config';
import AdminBannedUsers from './routes/admin-panel/banned-users';
import AdminReport from './routes/admin-panel/report';
import AdminUserLogs from './routes/admin-panel/user.logs.$userId';
import AdminClan from './routes/admin-panel/clan.$clanId';
import AdminMultipleAccounts from './routes/admin-panel/multiple-accounts';

// Import moderator routes
import ModeratorReport from './routes/moderator-panel/report';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'oauth/callback', element: <OAuthCallback /> },
      { path: 'wiki', element: <Wiki /> },
      { path: 'hall', element: <Hall /> },
      { path: 'fight/:fightId', element: <Fight /> },
      { path: 'patch-notes', element: <PatchNotes /> },
      { path: 'achievements/rankings', element: <AchievementRankings /> },
      { path: 'generating-tournaments', element: <GeneratingTournaments /> },
      { path: 'unknown-brute', element: <UnknownBrute /> },
      {
        path: 'user/:userId',
        children: [
          { index: true, element: <UserIndex /> },
          { path: 'feed', element: <UserFeed /> },
        ],
      },
      {
        path: ':bruteName',
        element: <BruteLayout />,
        children: [
          { index: true, element: <BruteIndex /> },
          { path: 'cell', element: <BruteCell /> },
          { path: 'arena', element: <BruteArena /> },
          { path: 'change-name', element: <BruteChangeName /> },
          { path: 'achievements', element: <BruteAchievements /> },
          { path: 'ascend', element: <BruteAscend /> },
          { path: 'destiny', element: <BruteDestiny /> },
          { path: 'fight/:fightId', element: <BruteFight /> },
          { path: 'inventory', element: <BruteInventory /> },
          { path: 'level-up', element: <BruteLevelUp /> },
          {
            path: 'ranking',
            children: [
              { index: true, element: <BruteRankingIndex /> },
              { path: ':rank', element: <BruteRanking /> },
            ],
          },
          { path: 'reset-visuals', element: <BruteResetVisuals /> },
          { path: 'tournament/:date', element: <BruteTournament /> },
          { path: 'tournament/global/:date', element: <BruteTournamentGlobal /> },
          { path: 'tournaments', element: <BruteTournaments /> },
          { path: 'versus/:opponentName', element: <BruteVersus /> },
          {
            path: 'clan',
            children: [
              { path: 'create', element: <ClanCreate /> },
              { path: 'ranking', element: <ClanRanking /> },
              {
                path: ':id',
                children: [
                  { index: true, element: <ClanIndex /> },
                  { path: 'forum', element: <ClanForum /> },
                  {
                    path: 'post/:tid',
                    children: [
                      { index: true, element: <ClanPostIndex /> },
                      { path: 'edit', element: <ClanPostEdit /> },
                    ],
                  },
                  { path: 'thread/:tid', element: <ClanThread /> },
                  {
                    path: 'war',
                    children: [
                      { path: 'history', element: <ClanWarHistory /> },
                      {
                        path: ':warId',
                        children: [
                          { index: true, element: <ClanWarIndex /> },
                          { path: 'fight/:fightId', element: <ClanWarFight /> },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: 'event',
            children: [
              { path: 'current', element: <EventCurrent /> },
              { path: 'history', element: <EventHistory /> },
              {
                path: ':id',
                children: [
                  { index: true, element: <EventIndex /> },
                  { path: 'round/:round', element: <EventRound /> },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'admin-panel',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminIndex /> },
          { path: 'user', element: <AdminUser /> },
          { path: 'brute/:bruteName', element: <AdminBrute /> },
          { path: 'config', element: <AdminConfig /> },
          { path: 'banned-users', element: <AdminBannedUsers /> },
          { path: 'report', element: <AdminReport /> },
          { path: 'user/logs/:userId?', element: <AdminUserLogs /> },
          { path: 'clan/:clanId', element: <AdminClan /> },
          { path: 'multiple-accounts', element: <AdminMultipleAccounts /> },
        ],
      },
      {
        path: 'moderator-panel',
        element: <ModeratorLayout />,
        children: [
          { path: 'report', element: <ModeratorReport /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];
