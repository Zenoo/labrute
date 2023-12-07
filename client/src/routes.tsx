import React from 'react';
import { Navigate, RouteObject } from 'react-router';
import ProvideBrute from './components/Brute/ProvideBrute';
import Main from './layouts/Main';
import AchievementsView from './views/AchievementsView';
import AdminView from './views/AdminView';
import AnchorTestView from './views/AnchorTestView';
import ArenaView from './views/ArenaView';
import BruteNotFoundView from './views/BruteNotFoundView';
import CellView from './views/CellView';
import DestinyView from './views/DestinyView';
import FightView from './views/FightView';
import GeneratingView from './views/GeneratingView';
import HallView from './views/HallView';
import HomeView from './views/HomeView';
import LevelUpView from './views/LevelUpView';
import NotFoundView from './views/NotFoundView';
import RankingView from './views/RankingView';
import ReportAdminView from './views/ReportAdminView';
import ShieldAnchorTestView from './views/ShieldAnchorTestView';
import TournamentHistoryView from './views/TournamentHistoryView';
import TournamentView from './views/TournamentView';
import UserAdminView from './views/UserAdminView';
import VersusView from './views/VersusView';
import WeaponAnchorTestView from './views/WeaponAnchorTestView';
import ClanCreateView from './views/clan/ClanCreateView';
import ClanForumView from './views/clan/ClanForumView';
import ClanPostView from './views/clan/ClanPostView';
import ClanRankingView from './views/clan/ClanRankingView';
import ClanThreadView from './views/clan/ClanThreadView';
import ClanView from './views/clan/ClanView';

const routes: RouteObject[] = [
  { path: 'anchor-test', element: <AnchorTestView /> },
  { path: 'weapon-anchor-test', element: <WeaponAnchorTestView /> },
  { path: 'shield-anchor-test', element: <ShieldAnchorTestView /> },
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <HomeView /> },
      { path: 'oauth/callback', element: <HomeView /> },
      { path: 'admin-panel', element: <AdminView /> },
      { path: 'admin-panel/user', element: <UserAdminView /> },
      { path: 'admin-panel/report', element: <ReportAdminView /> },
      { path: 'achievements', element: <AchievementsView /> },
      { path: 'unknown-brute', element: <BruteNotFoundView /> },
      { path: 'generating-tournaments', element: <GeneratingView /> },
      { path: 'hall', element: <HallView /> },
      {
        path: ':bruteName',
        children: [
          {
            path: 'cell',
            element: <ProvideBrute />,
            children: [
              { path: '', element: <CellView /> },
            ],
          },
          { path: 'level-up', element: <LevelUpView /> },
          { path: 'arena', element: <ArenaView /> },
          { path: 'versus/:opponentName', element: <VersusView /> },
          { path: 'fight/:fightId', element: <FightView /> },
          { path: 'tournament/:date', element: <TournamentView /> },
          { path: 'ranking', element: <RankingView /> },
          { path: 'ranking/:rank', element: <RankingView /> },
          { path: 'destiny', element: <DestinyView /> },
          { path: 'tournaments', element: <TournamentHistoryView /> },
          { path: 'achievements', element: <AchievementsView /> },
          {
            path: 'clan',
            element: <ProvideBrute />,
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
                ],
              },
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
