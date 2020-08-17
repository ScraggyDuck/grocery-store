import React, { useEffect, useState } from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';
import './ProductDetail.scss';
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        {product && (
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6'>
                <Slider {...settings}>
                  {product.gallery &&
                    product.gallery.map((img, index) => (
                      <div key={index}>
                        <img
                          className='img-fluid'
                          src={img}
                          alt={`gallery-${index}`}
                        />
                      </div>
                    ))}
                </Slider>
              </div>
              <div className='col-md-6'>
                <div className='product-header d-flex'>
                  <h1 className='product-title'>{product.title}</h1>
                  <div className='product-price'>{product.price}</div>
                </div>
                <div className='product-unit'>{product.unit}</div>
                <div className='product-description'>{product.description}</div>
                <Button className='btn-cart'>
                  <i
                    className='fa fa-cart-arrow-down mr-2'
                    aria-hidden='true'></i>
                  Cart
                </Button>
                <div className='product-categories'>
                  {product.categories &&
                    product.categories.map((category) => (
                      <Badge key={category} variant='secondary'>
                        {category}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
