import React from 'react';
import Home from './pages/Home/Home';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  // {
  //   path: "/products/:categories",
  //   exact: false,
  //   main: ({match}) => <Products match={match}/>
  // },
];

export default routes;
