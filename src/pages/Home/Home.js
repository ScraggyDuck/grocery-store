import React from 'react';

import Banner from '../../components/Banner/Banner';
import ProductsContainer from '../../containers/ProductsContainer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Offer from '../../components/Offer/Offer';
import TopMenu from '../../components/TopMenu/TopMenu';

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
    </div>
  );
}
