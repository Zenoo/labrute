import React from 'react';
import ProvideBrute from './components/Brute/ProvideBrute';
import Main from './layouts/Main';
import AdminView from './views/AdminView';
import AnchorTestView from './views/AnchorTestView';
import ArenaView from './views/ArenaView';
import CellView from './views/CellView';
import DestinyView from './views/DestinyView';
import FightView from './views/FightView';
import HomeView from './views/HomeView';
import LevelUpView from './views/LevelUpView';
import RankingView from './views/RankingView';
import TournamentView from './views/TournamentView';
import VersusView from './views/VersusView';
import TournamentHistoryView from './views/TournamentHistoryView';
import GlobalTournamentView from './views/GlobalTournamentView';
import AchievementsView from './views/AchievementsView';
import WeaponAnchorTestView from './views/WeaponAnchorTestView';
import ShieldAnchorTestView from './views/ShieldAnchorTestView';
import { Navigate, RouteObject } from 'react-router';

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
      { path: 'achievements', element: <AchievementsView /> },
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
          { path: 'tournament/global/:date', element: <GlobalTournamentView /> },
          { path: 'tournament/:date', element: <TournamentView /> },
          { path: 'ranking', element: <RankingView /> },
          { path: 'ranking/:rank', element: <RankingView /> },
          { path: 'destiny', element: <DestinyView /> },
          { path: 'tournaments', element: <TournamentHistoryView /> },
          { path: 'achievements', element: <AchievementsView /> },
          // Redirect :name to :name/cell
          { path: '', element: <Navigate to="cell" /> },
        ],
      },
    ],
  },
];

export default routes;
