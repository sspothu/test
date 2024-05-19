import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
      
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Zapier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <span className="nav-link active " aria-current="page">
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link ">Products</span>
              </li>
              <li className="nav-item">
                <span className="nav-link ">Services</span>
              </li>

              <li className="nav-item">
                <span className="nav-link ">Enterprise</span>
              </li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;