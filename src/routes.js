import React from 'react';
import Home from './pages/Home/Home';
import PageNotFound from './pages/404/404';

const routes = [
  {
    path: '/',
    exact: true,
    main: ({ history }) => <Home history={history} />,
  },
  {
    path: '*',
    exact: false,
    main: () => <PageNotFound />,
  },
];

export default routes;
