import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Banner from '../../components/client/Banner';
import Offer from '../../components/client/Offer';
import Sidebar from '../../components/client/Sidebar';
import TopMenu from '../../components/client/TopMenu';
import ProductsContainer from '../../containers/ProductsContainer';
import HomeRoute from '../../routes/home.route';

export default function Home({ ...props }) {
  return (
    <div>
      <TopMenu />
      <Banner />
      <Container className='p-0' fluid>
        <Offer />
        <Row className='m-0'>
          <Col xl={2} lg={3} md={4} className='p-0'>
            <Sidebar />
          </Col>
          <Col xl={10} lg={9} md={8} className='p-0'>
            <ProductsContainer history={props.history} />
          </Col>
        </Row>
      </Container>
      {HomeRoute && showRoutes(HomeRoute)}
    </div>
  );
}

const showRoutes = (routes) =>
  routes.map((route, index) => (
    <Route
      path={route.path}
      key={index}
      exact={route.exact}
      component={route.main}
    />
  ));
