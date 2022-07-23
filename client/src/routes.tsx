import React from 'react';
import Main from './layouts/Main';
import CellView from './views/CellView';
import HomeView from './views/HomeView';

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <HomeView /> },
      { path: 'cell/:bruteName', element: <CellView /> },
      { path: 'oauth/callback', element: <HomeView /> },
    ]
  },
];

export default routes;
