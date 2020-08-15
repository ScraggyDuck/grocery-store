import React from 'react';
import './Products.scss';
import Product from '../Product/Product';

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const renderProductList = (arr) => {
  let result = null;
  result = arr.map((item) => (
    <div key={item} className='col-xl-3 col-lg-4 col-md-6 p-0'>
      <Product />
    </div>
  ));
  return result;
};

export default function Products() {
  return (
    <div className='products row m-0 p-2'>{renderProductList(products)}</div>
  );
}
