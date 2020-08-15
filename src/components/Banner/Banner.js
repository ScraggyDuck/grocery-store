import React from 'react';
import './Banner.scss';

export default function Banner() {
  return (
    <div className='banner-container'>
      <div className='banner-content container d-flex flex-column align-items-center'>
        <h1 className='banner-title'>Groceries Delivered in 90 Minute</h1>
        <h4 className='banner-description'>
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </h4>
      </div>
    </div>
  );
}
