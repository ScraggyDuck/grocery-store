import React from 'react';
import Home from '../pages/client/Home';
import PageNotFound from '../pages/client/PageNotFound';
import ProductDetail from '../pages/client/ProductDetail';

const routes = [
  {
    path: '/',
    exact: true,
    main: ({ history, match }) => <Home history={history} match={match} />,
  },
  {
    path: '/product/:slug',
    exact: false,
    main: ({ history, match }) => (
      <ProductDetail history={history} match={match} />
    ),
  },
  {
    path: '*',
    exact: false,
    main: () => <PageNotFound />,
  },
];

export default routes;
