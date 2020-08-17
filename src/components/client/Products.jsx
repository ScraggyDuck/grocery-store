import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../../styles/client/components/Products.scss';
import Product from './Product';
import ProductLoading from './ProductsLoading';
import Fade from 'react-reveal/Fade';

export default function Products({ ...props }) {
  const { products, loadMore, isLoadMore, loading, match } = props;

  const onLoadMoreClick = () => {
    loadMore();
  };

  const renderProductList = () =>
    products &&
    products.map((product, index) => (
      <Col xl={3} lg={4} md={6} className='p-0' key={product._id}>
        <Fade duration={800} delay={index * 10} style={{ height: '100%' }}>
          <Product product={product} match={match} />
        </Fade>
      </Col>
    ));

  if (products.length <= 0) return <ProductLoading />;

  return (
    <Row className='products p-2 m-0' fluid='true'>
      {renderProductList()}

      <Col className='w-100 text-center'>
        {loading ? (
          <Button type='button' className='btn-load-more my-5'>
            ...
          </Button>
        ) : (
          isLoadMore && (
            <Button
              type='button'
              onClick={onLoadMoreClick}
              className='btn-load-more my-5'>
              Load more
            </Button>
          )
        )}
      </Col>
    </Row>
  );
}
