import React from 'react';
import Main from './layouts/Main.js';
import ArenaView from './views/ArenaView.js';
import CellView from './views/CellView.js';
import HomeView from './views/HomeView.js';
import LevelUpView from './views/LevelUpView.js';

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
        ],
      },
    ]
  },
];

export default routes;
