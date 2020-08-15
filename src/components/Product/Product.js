import React from 'react';
import './Product.scss';
import { Card, Button } from 'react-bootstrap';

export default function Product({ ...props }) {
  const { product } = props;
  return (
    <Card className='product'>
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
  );
}