import React from 'react';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.scss';

export default function Products({ ...props }) {
  const { products, loadMore, isLoadMore, loading } = props;

  const onLoadMoreClick = () => {
    loadMore();
  };

  const renderProductList = () => {
    let result = null;
    result = products.map((item) => (
      <div key={item._id} className='col-xl-3 col-lg-4 col-md-6 p-0'>
        <Product product={item} match={props.match} />
      </div>
    ));
    return result;
  };

  return (
    <div className='products row m-0 p-2 container-fluid p-0'>
      {products && renderProductList()}

      <div className='col-12 w-100 m-0 text-center'>
        {loading ? (
          <h6>Loading</h6>
        ) : (
          isLoadMore && (
            <Button
              type='button'
              onClick={onLoadMoreClick}
              className='btn-load-more my-5'>
              Load more
            </Button>
          )
        )}
      </div>
    </div>
  );
}
