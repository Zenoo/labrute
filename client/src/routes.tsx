import React from 'react';
import { Navigate, RouteObject } from 'react-router';
import ProvideBrute from './components/Brute/ProvideBrute';
import Main from './layouts/Main';
import AchievementRankingView from './views/AchievementRankingView';
import AchievementsView from './views/AchievementsView';
import AdminView from './views/admin/AdminView';
import ArenaView from './views/ArenaView';
import AscendView from './views/AscendView';
import { BannedUsersView } from './views/BannedUsersView';
import BruteNotFoundView from './views/BruteNotFoundView';
import CellView from './views/CellView';
import ClanCreateView from './views/clan/ClanCreateView';
import ClanForumView from './views/clan/ClanForumView';
import ClanPostView from './views/clan/ClanPostView';
import ClanRankingView from './views/clan/ClanRankingView';
import ClanThreadView from './views/clan/ClanThreadView';
import ClanView from './views/clan/ClanView';
import ClanWarFightView from './views/clan/ClanWarFightView';
import { ClanWarHistoryView } from './views/clan/ClanWarHistoryView';
import { ClanWarView } from './views/clan/ClanWarView';
import DestinyView from './views/DestinyView';
import { EventHistoryView } from './views/event/EventHistoryView';
import { EventView } from './views/event/EventView';
import FightView from './views/FightView';
import { FollowingFeedView } from './views/FollowingFeedView';
import GeneratingView from './views/GeneratingView';
import GlobalTournamentView from './views/GlobalTournamentView';
import HallView from './views/HallView';
import HomeView from './views/HomeView';
import { InventoryView } from './views/InventoryView';
import LevelUpView from './views/LevelUpView';
import { MultipleAccountsView } from './views/admin/MultipleAccountsView';
import NameChangeView from './views/NameChangeView';
import NotFoundView from './views/NotFoundView';
import PatchNotesView from './views/PatchNotesView';
import RankingView from './views/RankingView';
import ReportAdminView from './views/admin/ReportAdminView';
import ResetVisualsView from './views/ResetVisualsView';
import TournamentHistoryView from './views/TournamentHistoryView';
import TournamentView from './views/TournamentView';
import UserAdminView from './views/admin/UserAdminView';
import UserView from './views/UserView';
import VersusView from './views/VersusView';
import { WikiView } from './views/WikiView';
import { ConfigAdminView } from './views/admin/ConfigAdminView';
import { AdminLayout } from './layouts/AdminLayout';
import { BruteAdminView } from './views/admin/BruteAdminView';
import { ModeratorLayout } from './layouts/ModeratorLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <HomeView /> },
      { path: 'oauth/callback', element: <HomeView /> },
      { path: 'achievements/rankings', element: <AchievementRankingView /> },
      { path: 'unknown-brute', element: <BruteNotFoundView /> },
      { path: 'generating-tournaments', element: <GeneratingView /> },
      { path: 'hall', element: <HallView /> },
      { path: 'patch-notes', element: <PatchNotesView /> },
      { path: 'wiki', element: <WikiView /> },
      {
        path: 'user/:userId',
        children: [
          { path: '', element: <UserView /> },
          { path: 'feed', element: <FollowingFeedView /> },
        ]
      },
      {
        path: ':bruteName',
        element: <ProvideBrute />,
        children: [
          { path: 'cell', element: <CellView /> },
          { path: 'level-up', element: <LevelUpView /> },
          { path: 'arena', element: <ArenaView /> },
          { path: 'inventory', element: <InventoryView /> },
          { path: 'versus/:opponentName', element: <VersusView /> },
          { path: 'fight/:fightId', element: <FightView /> },
          { path: 'tournament/global/:date', element: <GlobalTournamentView /> },
          { path: 'tournament/:date', element: <TournamentView /> },
          { path: 'ranking', element: <RankingView /> },
          { path: 'ranking/:rank', element: <RankingView /> },
          { path: 'destiny', element: <DestinyView /> },
          { path: 'ascend', element: <AscendView /> },
          { path: 'tournaments', element: <TournamentHistoryView /> },
          { path: 'achievements', element: <AchievementsView /> },
          { path: 'reset-visuals', element: <ResetVisualsView /> },
          { path: 'change-name', element: <NameChangeView /> },
          {
            path: 'clan',
            children: [
              { path: 'ranking', element: <ClanRankingView /> },
              { path: 'create', element: <ClanCreateView /> },
              {
                path: ':id',
                children: [
                  { path: '', element: <ClanView /> },
                  { path: 'forum', element: <ClanForumView /> },
                  { path: 'thread/:tid', element: <ClanThreadView /> },
                  { path: 'post/:tid', element: <ClanPostView /> },
                  { path: 'post/:tid/edit', element: <ClanPostView /> },
                  {
                    path: 'war',
                    children: [
                      { path: 'history', element: <ClanWarHistoryView /> },
                      {
                        path: ':warId',
                        children: [
                          { path: '', element: <ClanWarView /> },
                          { path: 'fight/:fightId', element: <ClanWarFightView /> },
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
              { path: ':id', element: <EventView /> },
              { path: 'history', element: <EventHistoryView /> },
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
          { path: '', element: <AdminView /> },
          { path: 'user', element: <UserAdminView /> },
          { path: 'report', element: <ReportAdminView /> },
          { path: 'config', element: <ConfigAdminView /> },
          { path: 'banned-users', element: <BannedUsersView /> },
          { path: 'multiple-accounts', element: <MultipleAccountsView /> },
          { path: 'brute/:bruteName', element: <BruteAdminView /> },
        ],
      },
      {
        path: 'moderator-panel',
        element: <ModeratorLayout />,
        children: [
          { path: 'report', element: <ReportAdminView /> },
        ],
      },
      // 404
      { path: '*', element: <NotFoundView /> },
    ],
  },
];

export default routes;
