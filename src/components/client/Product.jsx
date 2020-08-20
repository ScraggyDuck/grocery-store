import React, { useState } from 'react';
import '../../styles/client/components/Product.scss';
import { Card, Button } from 'react-bootstrap';

import ProductDetail from '../../pages/client/ProductDetail';

export default function Product({ ...props }) {
  const { product } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <Card onClick={() => setShow(true)} className='product'>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <h5 className='product-title'>{product.title}</h5>
          <span className='product-unit'>{product.unit}</span>
          <div className='product-meta'>
            <span className='product-price'>${product.price}</span>
            <Button className='btn-cart'>
              <i className='fa fa-cart-arrow-down mr-2' aria-hidden='true'></i>
              Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
      {show && (
        <ProductDetail product={product} show={show} setShow={setShow} />
      )}
    </>
  );
}
