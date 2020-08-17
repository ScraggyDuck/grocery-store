import React from 'react';
import '../../styles/client/components/Offer.scss';
export default function Offer() {
  return (
    <div className='row px-5 py-4 offer-section d-none d-lg-flex m-0'>
      <div className='col-4'>
        <img
          className='img-fluid'
          src='https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png'
          alt='offer-1'
        />
      </div>
      <div className='col-4'>
        <img
          className='img-fluid'
          src='https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png'
          alt='offer-2'
        />
      </div>
      <div className='col-4'>
        <img
          className='img-fluid'
          src='https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png'
          alt='offer-3'
        />
      </div>
    </div>
  );
}
