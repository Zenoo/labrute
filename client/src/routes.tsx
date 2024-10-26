import React from 'react';
import { Navigate, RouteObject } from 'react-router';
import ProvideBrute from './components/Brute/ProvideBrute';
import Main from './layouts/Main';
import AchievementRankingView from './views/AchievementRankingView';
import AchievementsView from './views/AchievementsView';
import AdminView from './views/AdminView';
import ArenaView from './views/ArenaView';
import { BannedUsersView } from './views/BannedUsersView';
import BruteNotFoundView from './views/BruteNotFoundView';
import CellView from './views/CellView';
import DestinyView from './views/DestinyView';
import AscendView from './views/AscendView';
import FightView from './views/FightView';
import { FollowingFeedView } from './views/FollowingFeedView';
import GeneratingView from './views/GeneratingView';
import GlobalTournamentView from './views/GlobalTournamentView';
import HallView from './views/HallView';
import HomeView from './views/HomeView';
import { InventoryView } from './views/InventoryView';
import LevelUpView from './views/LevelUpView';
import { MultipleAccountsView } from './views/MultipleAccountsView';
import NameChangeView from './views/NameChangeView';
import NotFoundView from './views/NotFoundView';
import PatchNotesView from './views/PatchNotesView';
import RankingView from './views/RankingView';
import ReportAdminView from './views/ReportAdminView';
import ResetVisualsView from './views/ResetVisualsView';
import TournamentHistoryView from './views/TournamentHistoryView';
import TournamentView from './views/TournamentView';
import UserAdminView from './views/UserAdminView';
import UserView from './views/UserView';
import VersusView from './views/VersusView';
import ClanCreateView from './views/clan/ClanCreateView';
import ClanForumView from './views/clan/ClanForumView';
import ClanPostView from './views/clan/ClanPostView';
import ClanRankingView from './views/clan/ClanRankingView';
import ClanThreadView from './views/clan/ClanThreadView';
import ClanView from './views/clan/ClanView';
import ClanWarFightView from './views/clan/ClanWarFightView';
import { ClanWarHistoryView } from './views/clan/ClanWarHistoryView';
import { ClanWarView } from './views/clan/ClanWarView';
import { EventView } from './views/event/EventView';
import { EventHistoryView } from './views/event/EventHistoryView';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <HomeView /> },
      { path: 'oauth/callback', element: <HomeView /> },
      { path: 'admin-panel', element: <AdminView /> },
      { path: 'admin-panel/user', element: <UserAdminView /> },
      { path: 'admin-panel/report', element: <ReportAdminView /> },
      { path: 'admin-panel/banned-users', element: <BannedUsersView /> },
      { path: 'admin-panel/multiple-accounts', element: <MultipleAccountsView /> },
      { path: 'achievements/rankings', element: <AchievementRankingView /> },
      { path: 'unknown-brute', element: <BruteNotFoundView /> },
      { path: 'generating-tournaments', element: <GeneratingView /> },
      { path: 'hall', element: <HallView /> },
      { path: 'patch-notes', element: <PatchNotesView /> },
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
      // 404
      { path: '*', element: <NotFoundView /> },
    ],
  },
];

export default routes;
