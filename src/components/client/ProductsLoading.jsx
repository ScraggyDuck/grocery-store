import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../../styles/client/components/ProductsLoading.scss';

export default function () {
  return (
    <Row className='m-0 py-3'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Col key={item} xl='3' lg='4' md='6' sm='6' className='mb-5'>
          <div className='product-loading'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
