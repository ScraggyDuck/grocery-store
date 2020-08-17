import React, { useEffect, useState } from 'react';
import { Modal, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import '../../styles/client/pages/ProductDetail.scss';
import * as ProductServices from '../../services/productServices';
import Slider from 'react-slick';

export default function ProductDetail({ ...props }) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({});

  const handleClose = () => {
    setShow(false);
    props.history.goBack();
  };
  console.log(props.match.params);

  useEffect(() => {
    props.show && setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    const fetchProduct = async () => {
      const {
        data: { data: productData },
      } = await ProductServices.getProductBySlug(props.match.params.slug);
      setProduct(productData);
    };
    fetchProduct();
  }, [props.match.params.slug]);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  console.log(product);

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='w-100 p-5'>
          {product && (
            <Row>
              <Button className='btn-close' onClick={handleClose}>
                X
              </Button>
              <Col md={6} xs={12}>
                <Slider {...settings}>
                  {product.gallery &&
                    product.gallery.map((img, index) => (
                      <div className='w-100' key={index}>
                        <img
                          className='img-fluid w-100'
                          src={img}
                          alt={`gallery-${index}`}
                        />
                      </div>
                    ))}
                </Slider>
              </Col>
              <Col md={6}>
                <div className='product-header d-flex align-items-center mb-2'>
                  <div className='product-title mr-3'>{product.title}</div>
                  <div className='product-price'>{product.price}$</div>
                </div>
                <div className='product-unit'>{product.unit}</div>
                <div className='product-description'>{product.description}</div>
                <Button className='btn-cart'>
                  <i
                    className='fa fa-cart-arrow-down mr-2'
                    aria-hidden='true'></i>
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
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}