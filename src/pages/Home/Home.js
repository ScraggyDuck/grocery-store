import React from 'react';
import { Route } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Offer from '../../components/Offer/Offer';
import Sidebar from '../../components/Sidebar/Sidebar';
import TopMenu from '../../components/TopMenu/TopMenu';
import ProductsContainer from '../../containers/ProductsContainer';
import HomeRoute from './home.route';
import './Home.scss';

export default function Home({ ...props }) {
  return (
    <div>
      <TopMenu />
      <Banner />
      <div className='container-fluid p-0 main'>
        <Offer />
        <div className='row m-0 p-0'>
          <div className='col-xl-2 col-lg-3 col-md-4 p-0'>
            <Sidebar />
          </div>
          <div className='col-xl-10 col-lg-9 col-md-8 p-0'>
            <ProductsContainer history={props.history} />
          </div>
        </div>
      </div>
      {showRoutes(HomeRoute)}
    </div>
  );
}

const showRoutes = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          path={route.path}
          key={index}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return result;
};
