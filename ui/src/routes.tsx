import React from 'react';

const LoggedOut = React.lazy(() => import('./layouts/LoggedOut'));
const HomeView = React.lazy(() => import('./views/HomeView'));

const routes = [
  {
    path: '/',
    element: <LoggedOut />,
    children: [
      { path: '', element: <HomeView /> },
    ]
  }
];

export default routes;
