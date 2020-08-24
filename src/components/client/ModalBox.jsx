import React from 'react';
import { Container, Modal } from 'react-bootstrap';
import '../../styles/client/components/ModalBox.scss';

export default function ModalBox({ ...props }) {
  const { show, setShow, isProductInfo } = props;

  return (
    <Container>
      <Modal
        className={isProductInfo ? 'max-width' : ''}
        show={show}
        onHide={() => setShow(false)}>
        <Modal.Body className='w-100 p-5'>{props.children}</Modal.Body>
      </Modal>
    </Container>
  );
}
