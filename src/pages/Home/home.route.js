import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const routes = [
  {
    path: '/home/product/:slug',
    exact: true,
    main: ({ history, match }) => (
      <ProductDetail history={history} show={true} match={match} />
    ),
  },
];

export default routes;
