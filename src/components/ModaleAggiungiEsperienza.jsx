/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from 'react-datepicker';

function ModaleAggiungiEsperienza(props) {
  const [visibilitàModaleAddEsperienza, setVisibilitàModaleAddEsperienza] = useState(props.visibilitàModaleAddEsperienza)
  const handleClose = () => {props.onClose()}
    const handleShow = () => props.setVisibilitàModaleAddEsperienza(true);



useEffect(() => {
    setVisibilitàModaleAddEsperienza(props.visibilitàModaleAddEsperienza)
}, [props.visibilitàModaleAddEsperienza])


  return (
    <>
      <Modal show={visibilitàModaleAddEsperienza} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModaleAggiungiEsperienza;