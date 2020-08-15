import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import * as ProductServices from '../../services/productServices';
import Product from '../Product/Product';
import './Products.scss';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);

  const onLoadMoreClick = () => {
    console.log('lalal');
    setLimit(limit + 8);
  };

  const renderProductList = () => {
    let result = null;
    result = products.map((item) => (
      <div key={item.slug} className='col-xl-3 col-lg-4 col-md-6 p-0'>
        <Product product={item} />
      </div>
    ));
    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      const filters = { limit, offset: 0 };
      try {
        const {
          data: { data: productList },
        } = await ProductServices.getProducts(filters);
        setProducts(productList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [limit]);

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
