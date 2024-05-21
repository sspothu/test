import { DeleteFilled } from '@ant-design/icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
function DelModal({apidata,setapidata,record}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deletehandler=()=>{
    let index = apidata.findIndex((x)=> x.id === record.id)
    const updateddata = [...apidata]
    updateddata.splice(index,1)
    setapidata(updateddata)
  }
 
  return (
    <>
    
      <Button variant="" onClick={handleShow}>
      <DeleteFilled/>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete these Records? </p>
          <p style={{color:"orange", fontSize:"14px"}}>This action cannot be Undone</p>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"dark"}}>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClose}>
            <span onClick={deletehandler}>
            Delete
            </span>
         
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 
export default DelModal;