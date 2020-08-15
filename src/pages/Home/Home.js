import React from 'react';

import Banner from '../../components/Banner/Banner';
import ProductsContainer from '../../containers/ProductsContainer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Offer from '../../components/Offer/Offer';

import './Home.scss';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className='container-fluid p-0 main'>
        <Offer />
        <div className='row m-0 p-0'>
          <div className='col-xl-2 col-lg-3 col-md-4 p-0'>
            <Sidebar />
          </div>
          <div className='col-xl-10 col-lg-9 col-md-8 p-0'>
            <ProductsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
