import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../components/client/Banner';
import Offer from '../../components/client/Offer';
import Sidebar from '../../components/client/Sidebar';
import TopMenu from '../../components/client/TopMenu';
import ProductsContainer from '../../containers/ProductsContainer';
import CartContainer from '../../containers/CartContainer';

export default function Home({ ...props }) {
  const productsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: productsRef.current.offsetTop - 100,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <TopMenu />
      <Banner />
      <Container className='p-0' fluid>
        <Offer />
        <Row className='m-0'>
          <Col xl={2} lg={3} className='p-0'>
            <Sidebar myRef={productsRef} />
          </Col>
          <Col ref={productsRef} xl={10} lg={9} className='p-0'>
            <ProductsContainer history={props.history} />
          </Col>
        </Row>
      </Container>
      <CartContainer />
    </>
  );
}
