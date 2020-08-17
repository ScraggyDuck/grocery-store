import React from 'react';
import '../../styles/client/components/Product.scss';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Product({ ...props }) {
  const { product } = props;
  return (
    <Link to={`/home/product/${product.slug}`} className='text-decoration-none'>
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
    </Link>
  );
}
