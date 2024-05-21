import { EditFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EmpForm from './EmpForm';
const Editmodal = ({record,editfunction}) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [updatedata, setUpdatedata] = useState({ ...record });
    

    // const changehandler = (e) => {
    //   const {name,value}= e.target
    //   setUpdatedata(prevData => ({ ...prevData, [name]: value}));
    // }

    const edited = () => {
      editfunction(record, updatedata);
      handleClose();
    };
  return (
    
    <>
      <Button variant="" onClick={handleShow}>
        <EditFilled  style={{ color: "orange", width: "20px", height: "20px" }} />
      </Button>
 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image"
                name="images"
                value={updatedata.images}
                onChange={changehandler}
              />
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={updatedata.title}
                onChange={changehandler}
              />
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brand"
                name="brand"
                value={updatedata.brand}
                onChange={changehandler}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                value={updatedata.price}
                onChange={changehandler}
              />
              <Form.Label>Discount Percentage</Form.Label>
              <Form.Control
                type="number"
                placeholder="Discount Percentage"
                name="discountPercentage"
                value={updatedata.discountPercentage}
                onChange={changehandler}
              />
            </Form.Group>
          </Form> */}
          <EmpForm record={record}/>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "dark" }}>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" 
          onClick={edited}
        >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editmodal