import React from 'react';
import Main from './layouts/Main';
import ArenaView from './views/ArenaView';
import CellView from './views/CellView';
import HomeView from './views/HomeView';
import LevelUpView from './views/LevelUpView';

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
