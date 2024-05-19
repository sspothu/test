import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../components/Form';

function Example() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }} onClick={handleShow}>
        Add New Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form/></Modal.Body>
        <Modal.Footer>
        <Button style={{ backgroundColor: 'transparent', color: '#000', border: 'none' }}>Cancel</Button>
          <Button style={{backgroundColor: '#0372ad', color: '#fff', border: 'none'}}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;