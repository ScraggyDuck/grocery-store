import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import '../../styles/client/components/Banner.scss';

export default function Banner() {
  return (
    <div className='banner-container d-flex align-items-center w-100'>
      <div className='banner-content container d-flex flex-column align-items-center'>
        <h1 className='banner-title mb-3 text-center'>
          Groceries Delivered in 90 Minute
        </h1>
        <h4 className='banner-description d-none d-md-block'>
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </h4>
        <div className='search-bar-container mt-5 d-none d-md-block'>
          <SearchBarContainer isTop={false} />
        </div>
      </div>
    </div>
  );
}
