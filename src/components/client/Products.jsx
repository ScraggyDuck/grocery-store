import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../../styles/client/components/Products.scss';
import Product from './Product';
import ProductLoading from './ProductsLoading';
import Fade from 'react-reveal/Fade';

export default function Products({ ...props }) {
  const { products, loadMore, isLoadMore, loading, match, hasMore } = props;

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

  return (
    <Row className='products p-2 m-0' fluid='true'>
      {loading ? <ProductLoading /> : renderProductList()}

      <div className='w-100 text-center col-12'>
        {isLoadMore ? (
          <Button type='button' className='btn-load-more my-5'>
            ...
          </Button>
        ) : (
          hasMore && (
            <Button
              type='button'
              onClick={onLoadMoreClick}
              className='btn-load-more my-5'>
              Load more
            </Button>
          )
        )}
      </div>
    </Row>
  );
}
