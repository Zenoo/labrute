import React from 'react';
import { Navigate, RouteObject } from 'react-router';
import { ProvideBrute } from './components/Brute/ProvideBrute';
import { Main } from './layouts/Main';
import { AchievementRankingView } from './views/AchievementRankingView';
import { AchievementsView } from './views/AchievementsView';
import { AdminView } from './views/admin/AdminView';
import { ArenaView } from './views/ArenaView';
import { AscendView } from './views/AscendView';
import { BannedUsersView } from './views/BannedUsersView';
import { BruteNotFoundView } from './views/BruteNotFoundView';
import { CellView } from './views/CellView';
import { ClanCreateView } from './views/clan/ClanCreateView';
import { ClanForumView } from './views/clan/ClanForumView';
import { ClanPostView } from './views/clan/ClanPostView';
import { ClanRankingView } from './views/clan/ClanRankingView';
import { ClanThreadView } from './views/clan/ClanThreadView';
import { ClanView } from './views/clan/ClanView';
import { ClanWarFightView } from './views/clan/ClanWarFightView';
import { ClanWarHistoryView } from './views/clan/ClanWarHistoryView';
import { ClanWarView } from './views/clan/ClanWarView';
import { DestinyView } from './views/DestinyView';
import { EventHistoryView } from './views/event/EventHistoryView';
import { EventView } from './views/event/EventView';
import { FightView } from './views/FightView';
import { FollowingFeedView } from './views/FollowingFeedView';
import { GeneratingView } from './views/GeneratingView';
import { GlobalTournamentView } from './views/GlobalTournamentView';
import { HallView } from './views/HallView';
import { HomeView } from './views/HomeView';
import { InventoryView } from './views/InventoryView';
import { KnownFingerprintsView } from './views/KnownFingerprintsView';
import { LevelUpView } from './views/LevelUpView';
import { MultipleAccountsView } from './views/admin/MultipleAccountsView';
import { NameChangeView } from './views/NameChangeView';
import { NotFoundView } from './views/NotFoundView';
import { PatchNotesView } from './views/PatchNotesView';
import { RankingView } from './views/RankingView';
import { ReportAdminView } from './views/admin/ReportAdminView';
import { ResetVisualsView } from './views/ResetVisualsView';
import { TournamentHistoryView } from './views/TournamentHistoryView';
import { TournamentView } from './views/TournamentView';
import { UserAdminView } from './views/admin/UserAdminView';
import { UserView } from './views/UserView';
import { StatsView } from './views/StatsView';
import { VersusView } from './views/VersusView';
import { WikiView } from './views/WikiView';
import { ConfigAdminView } from './views/admin/ConfigAdminView';
import { AdminLayout } from './layouts/AdminLayout';
import { BruteAdminView } from './views/admin/BruteAdminView';
import { ModeratorLayout } from './layouts/ModeratorLayout';
import { ClanAdminView } from './views/admin/ClanAdminView';
import { CurrentEventsView } from './views/event/CurrentEventsView';
import { EventRoundView } from './views/event/EventRoundView';
import { UserLogView } from './views/admin/UserLogView';
import { TransferBruteView } from './views/TransferBruteView';
import { UnlockColorView } from './views/UnlockColorView';
import { SharedBrowserView } from './views/admin/SharedBrowserView';
import { FingerprintAdminView } from './views/admin/FingerprintAdminView';
import { BrowserIdAdminView } from './views/admin/BrowserIdAdminView';
import { BannedWordsAdminView } from './views/admin/BannedWordsAdminView';
import { DojoView } from './views/DojoView';
import { TermsView } from './views/TermsView';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <HomeView />, id: 'home' },
      {
        path: 'oauth/callback',
        element: <HomeView />,
        handle: { shouldIndex: false },
      },
      { path: 'achievements/rankings', element: <AchievementRankingView /> },
      {
        path: 'unknown-brute',
        element: <BruteNotFoundView />,
        handle: { shouldIndex: false },
      },
      {
        path: 'generating-tournaments',
        element: <GeneratingView />,
        handle: { shouldIndex: false },
      },
      { path: 'hall', element: <HallView />, handle: { shouldIndex: false } },
      { path: 'patch-notes', element: <PatchNotesView /> },
      { path: 'wiki', element: <WikiView /> },
      { path: 'terms', element: <TermsView /> },
      { path: 'fight/:fightId', element: <FightView />, id: 'fight' },
      {
        path: 'user/:userId',
        children: [
          { path: '', element: <UserView />, id: 'user' },
          { path: 'stats', element: <StatsView />, id: 'user-stats' },
          {
            path: 'feed',
            element: <FollowingFeedView />,
            handle: { shouldIndex: false },
          },
          { path: 'transfer-brute', element: <TransferBruteView />, handle: { shouldIndex: false } },
        ]
      },
      {
        path: ':bruteName',
        element: <ProvideBrute />,
        children: [
          { path: 'cell', element: <CellView /> },
          { path: 'level-up', element: <LevelUpView />, handle: { shouldIndex: false } },
          { path: 'arena', element: <ArenaView />, handle: { shouldIndex: false } },
          { path: 'inventory', element: <InventoryView />, handle: { shouldIndex: false } },
          { path: 'versus/:opponentName', element: <VersusView />, handle: { shouldIndex: false } },
          { path: 'fight/:fightId', element: <FightView />, id: 'fight' },
          { path: 'tournament/global/:date', element: <GlobalTournamentView />, id: 'tournament' },
          { path: 'tournament/:date', element: <TournamentView />, id: 'tournament' },
          { path: 'ranking/:rank', element: <RankingView />, id: 'ranking/rank' },
          { path: 'destiny', element: <DestinyView /> },
          { path: 'ascend', element: <AscendView />, handle: { shouldIndex: false } },
          { path: 'tournaments', element: <TournamentHistoryView /> },
          { path: 'achievements', element: <AchievementsView /> },
          { path: 'reset-visuals', element: <ResetVisualsView />, handle: { shouldIndex: false } },
          { path: 'unlock-color', element: <UnlockColorView />, handle: { shouldIndex: false } },
          { path: 'change-name', element: <NameChangeView />, handle: { shouldIndex: false } },
          { path: 'dojo', element: <DojoView /> },
          {
            path: 'clan',
            children: [
              { path: 'ranking', element: <ClanRankingView />, id: 'clan-ranking' },
              { path: 'create', element: <ClanCreateView />, handle: { shouldIndex: false } },
              {
                path: ':id',
                children: [
                  { path: '', element: <ClanView />, id: 'clan' },
                  { path: 'forum', element: <ClanForumView />, handle: { shouldIndex: false } },
                  { path: 'thread/:tid', element: <ClanThreadView />, handle: { shouldIndex: false } },
                  { path: 'post/:tid', element: <ClanPostView />, handle: { shouldIndex: false } },
                  { path: 'post/:tid/edit', element: <ClanPostView />, handle: { shouldIndex: false } },
                  {
                    path: 'war',
                    children: [
                      { path: 'history', element: <ClanWarHistoryView />, id: 'clan-war-history' },
                      {
                        path: ':warId',
                        children: [
                          { path: '', element: <ClanWarView />, id: 'clan-war' },
                          { path: 'fight/:fightId', element: <ClanWarFightView />, id: 'clan-war-fight' },
                        ],
                      },
                    ],
                  }
                ],
              },
            ],
          },
          {
            path: 'event',
            children: [
              { path: 'current', element: <CurrentEventsView />, id: 'current-events' },
              { path: 'history', element: <EventHistoryView />, id: 'event-history' },
              {
                path: ':id',
                children: [
                  { path: '', element: <EventView />, id: 'event' },
                  { path: 'round/:round', element: <EventRoundView />, id: 'event-round' },
                ]
              },
            ],
          },
          // Redirect :name to :name/cell
          { path: '', element: <Navigate to="cell" /> },
        ],
      },
      {
        path: 'admin-panel',
        element: <AdminLayout />,
        children: [
          { path: '', element: <AdminView />, handle: { shouldIndex: false } },
          { path: 'user/:id?', element: <UserAdminView />, handle: { shouldIndex: false } },
          { path: 'report', element: <ReportAdminView />, handle: { shouldIndex: false } },
          { path: 'config', element: <ConfigAdminView />, handle: { shouldIndex: false } },
          { path: 'banned-users', element: <BannedUsersView />, handle: { shouldIndex: false } },
          { path: 'known-fingerprints', element: <KnownFingerprintsView />, handle: { shouldIndex: false } },
          { path: 'multiple-accounts', element: <MultipleAccountsView />, handle: { shouldIndex: false } },
          { path: 'brute/:bruteName?', element: <BruteAdminView />, handle: { shouldIndex: false } },
          { path: 'clan/:clanId', element: <ClanAdminView />, handle: { shouldIndex: false } },
          { path: 'user/logs/:userId?', element: <UserLogView />, handle: { shouldIndex: false } },
          { path: 'shared-browser', element: <SharedBrowserView />, handle: { shouldIndex: false } },
          { path: 'fingerprint', element: <FingerprintAdminView />, handle: { shouldIndex: false } },
          { path: 'browser-id', element: <BrowserIdAdminView />, handle: { shouldIndex: false } },
          { path: 'banned-words', element: <BannedWordsAdminView />, handle: { shouldIndex: false } }
        ],
      },
      {
        path: 'moderator-panel',
        element: <ModeratorLayout />,
        children: [
          { path: 'report', element: <ReportAdminView />, handle: { shouldIndex: false } },
        ],
      },
      // 404
      { path: '*', element: <NotFoundView /> },
    ],
  },
];
