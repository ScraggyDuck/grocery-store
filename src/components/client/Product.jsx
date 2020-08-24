import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actAddToCart } from '../../actions/cartActions';
import '../../styles/client/components/Product.scss';
import ModalBox from './ModalBox';
import ProductInfo from './ProductInfo';

export default function Product({ ...props }) {
  const { product } = props;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const addToCart = () => {
    const payload = {
      ...product,
      quantity: 1,
    };
    dispatch(actAddToCart(payload));
  };

  return (
    <>
      <Card className='product'>
        <Card.Img
          onClick={() => setShow(true)}
          variant='top'
          src={product.image}
        />
        <Card.Body>
          <h5 className='product-title'>{product.title}</h5>
          <span className='product-unit'>{product.unit}</span>
          <div className='product-meta'>
            <span className='product-price'>${product.price}</span>
            <Button className='btn-cart' onClick={addToCart}>
              <i className='fa fa-cart-arrow-down mr-2' aria-hidden='true'></i>
              Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
      {show && (
        <ModalBox show={show} setShow={setShow} isProductInfo={true}>
          {product && (
            <ProductInfo
              product={product}
              setShow={setShow}
              isQuickView={true}
            />
          )}
        </ModalBox>
      )}
    </>
  );
}
