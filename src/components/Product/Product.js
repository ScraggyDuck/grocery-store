import React from 'react';
import './Product.scss';
import { Card, Button } from 'react-bootstrap';

export default function Product() {
  return (
    <Card className='product'>
      <Card.Img variant='top' src='https://via.placeholder.com/150x100' />
      <Card.Body>
        <h5 className='product-title'>Lime</h5>
        <span className='product-unit'>12px(s)</span>
        <div className='product-meta'>
          <span className='product-price'>$1.5</span>
          <Button className='btn-cart'>
            <i className='fa fa-cart-arrow-down mr-2' aria-hidden='true'></i>
            Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
