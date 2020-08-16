import React from 'react';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.scss';

export default function Products({ ...props }) {
  const { products, loadMore } = props;

  const onLoadMoreClick = () => {
    loadMore();
  };

  const renderProductList = () => {
    let result = null;
    result = products.map((item) => (
      <div key={item._id} className='col-xl-3 col-lg-4 col-md-6 p-0'>
        <Product product={item} />
      </div>
    ));
    return result;
  };

  return (
    <div className='products row m-0 p-2'>
      {products && renderProductList()}
      <div className='col-12 text-center'>
        <Button
          type='button'
          onClick={onLoadMoreClick}
          className='btn-load-more my-5'>
          Load more
        </Button>
      </div>
    </div>
  );
}
