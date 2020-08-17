import React from 'react';
import PageNotFound from '../pages/client/PageNotFound';
import Home from '../pages/client/Home';

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
