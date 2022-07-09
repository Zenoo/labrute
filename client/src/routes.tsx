import React from 'react';

const LoggedOut = React.lazy(() => import('./layouts/LoggedOut'));
const HomeView = React.lazy(() => import('./views/HomeView'));
const CellView = React.lazy(() => import('./views/CellView'));

const routes = [
  {
    path: '/',
    element: <LoggedOut />,
    children: [
      { path: '', element: <HomeView /> },
      { path: 'cell/:bruteName', element: <CellView /> },
    ]
  },
];

export default routes;
