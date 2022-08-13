import React from 'react';
import IddleBear from './components/animations/bear/IddleBear.js';
import Main from './layouts/Main.js';
import ArenaView from './views/ArenaView.js';
import CellView from './views/CellView.js';
import FightView from './views/FightView.js';
import HomeView from './views/HomeView.js';
import LevelUpView from './views/LevelUpView.js';
import VersusView from './views/VersusView.js';

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <HomeView /> },
      { path: 'oauth/callback', element: <HomeView /> },
      {
        path: ':bruteName',
        children: [
          { path: 'cell', element: <CellView /> },
          { path: 'level-up', element: <LevelUpView /> },
          { path: 'arena', element: <ArenaView /> },
          { path: 'versus/:opponentName', element: <VersusView /> },
          { path: 'fight/:fightId', element: <FightView /> },
        ],
      },
    ],
  },
  { path: 'test', element: <IddleBear id="test" /> },
];

export default routes;
