import React from 'react';
import PageNotFound from './pages/404/404';
import Home from './pages/Home/Home';

const routes = [
  {
    path: '/home',
    exact: false,
    main: ({ history, match }) => <Home history={history} match={match} />,
  },
  {
    path: '*',
    exact: false,
    main: () => <PageNotFound />,
  },
];

export default routes;
