import React from 'react';

const Main = React.lazy(() => import('./layouts/Main'));
const HomeView = React.lazy(() => import('./views/HomeView'));
const CellView = React.lazy(() => import('./views/CellView'));

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
