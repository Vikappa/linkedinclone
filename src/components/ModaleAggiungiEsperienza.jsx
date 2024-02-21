/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ModaleAggiungiEsperienza(props) {
  const [visibilitàModaleAddEsperienza, setVisibilitàModaleAddEsperienza] = useState(props.visibilitàModaleAddEsperienza)
  const handleClose = () => {props.onClose()}
  const handleShow = () => props.setVisibilitàModaleAddEsperienza(true);

  function handleDateChange(event) {
    const formattedDate = formatDate(event.target.value);
    console.log(formattedDate)
  }
  
  function formatDate(date) {
    const d = new Date(date),
          day = '' + d.getDate(),
          month = '' + (d.getMonth() + 1),
          year = d.getFullYear();
  
    return [day.padStart(2, '0'), month.padStart(2, '0'), year].join(' ');
  }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

useEffect(() => {
    setVisibilitàModaleAddEsperienza(props.visibilitàModaleAddEsperienza)
}, [props.visibilitàModaleAddEsperienza])


  return (
    <>
      <Modal show={visibilitàModaleAddEsperienza} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi nuova esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="idValueRuolo">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ruolo.."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="idValueAzienda">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Azienda.."
                autoFocus
              />
            </Form.Group>
<div className='d-flex'>
<Form.Group className="mb-3" controlId="formStartDate">
        <Form.Label>Data Inizio</Form.Label>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date, setStartDate)}
          dateFormat="dd MM yyyy"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEndDate">
        <Form.Label>Data Fine</Form.Label>
        <DatePicker
          selected={endDate}
          onChange={(date) => handleDateChange(date, setEndDate)}
          dateFormat="dd MM yyyy"
        />
      </Form.Group>
</div>

            <Form.Group
              className="mb-3"
              controlId="valueTextAreaDescrizione"
            >
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="idValueArea">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Area.."
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>

        <Button className='d-flex align-items-center justify-content-center' variant="primary" onClick={handleClose}>
           Invia
          </Button>

          <Button className='d-flex align-items-center justify-content-center' variant="secondary" onClick={handleClose}>
            Annulla
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModaleAggiungiEsperienza;