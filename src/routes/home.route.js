import React from 'react';
import ProductDetail from '../pages/client/ProductDetail';

const routes = [
  {
    path: '/product/:slug',
    exact: true,
    main: ({ history, match }) => (
      <ProductDetail history={history} show={true} match={match} />
    ),
  },
];

export default routes;
