import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import * as ProductServices from '../../services/productServices';
import Product from './Product';
import ProductsLoading from './ProductsLoading';
import '../../styles/client/components/RelatedProducts.scss';

export default function RelatedProducts({ ...props }) {
  const [relatedProducts, setRelatedProducts] = useState(null);

  useEffect(() => {
    const { category } = props;
    const fetchData = async () => {
      const filters = { category, limit: 8, offset: 0 };
      const {
        data: { data: products },
      } = await ProductServices.getProducts(filters);
      setRelatedProducts(products);
    };

    fetchData();
  });

  const renderRelatedProducts = () => {
    return relatedProducts.map((product, index) => (
      <Col xl={3} lg={4} md={6} className='p-0' key={product._id}>
        <Fade duration={800} delay={index * 10} style={{ height: '100%' }}>
          <Product product={product} />
        </Fade>
      </Col>
    ));
  };

  return (
    <div className='related-products'>
      <h3>Related Items</h3>
      <Row>
        {relatedProducts ? renderRelatedProducts() : <ProductsLoading />}
      </Row>
    </div>
  );
}
