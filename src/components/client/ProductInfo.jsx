import React from 'react';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import '../../styles/client/components/ProductInfo.scss';

export default function ProductInfo({ ...props }) {
  const { product } = props;

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <Row className='bg-white p-4 product-info'>
      <Col md={6} xs={12} className='p-lg-5'>
        <Slider {...settings}>
          {product.gallery &&
            product.gallery.map((img, index) => (
              <div className='w-100 ' key={index}>
                <img
                  className='img-fluid w-100'
                  src={img}
                  alt={`gallery-${index}`}
                />
              </div>
            ))}
        </Slider>
      </Col>
      <Col className='p-lg-5 pt-5' md={6}>
        <div className='product-header d-flex align-items-center mb-2'>
          <div className='product-title mr-3'>{product.title}</div>
          <div className='product-price'>{product.price}$</div>
        </div>
        <div className='product-unit'>{product.unit}</div>
        <div className='product-description'>{product.description}</div>
        <Button className='btn-cart'>
          <i className='fa fa-cart-arrow-down mr-2' aria-hidden='true'></i>
          Cart
        </Button>
        <div className='product-categories mt-3'>
          {product.categories &&
            product.categories.map((category) => (
              <Badge
                key={category}
                variant='secondary'
                className='px-3 py-1 mr-2'>
                {category}
              </Badge>
            ))}
        </div>
      </Col>
    </Row>
  );
}
