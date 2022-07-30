import React from 'react';
import Main from './layouts/Main';
import CellView from './views/CellView';
import HomeView from './views/HomeView';
import LevelUpView from './views/LevelUpView';

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <HomeView /> },
      { path: ':bruteName/cell', element: <CellView /> },
      { path: ':bruteName/level-up', element: <LevelUpView /> },
      { path: 'oauth/callback', element: <HomeView /> },
    ]
  },
];

export default routes;
