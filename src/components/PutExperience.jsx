/* eslint-disable react/prop-types */
import { formatDate } from "date-fns";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PutExperience = (props) => {
  let currentUserStore = useSelector((state) => state.currentUser.currentUser);
  const [currentUser, setCurrentUser] = useState(currentUserStore);
  const storeEsperienze = useSelector((state) => state.experience.experiences);
  const dispatch = useDispatch();

  const [newRuolo, setNewRuolo] = useState("");
  const [newAzienda, setNewAzienda] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newDescrizione, setNewDescrizione] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleShow = () => props.setVisibilitàModaleEditEsperienza(true);

  const job = props.experienceToEdit;
  useEffect(() => {
    // Inizializza lo stato locale con il valore della prop quando il componente viene montato
    setNewRuolo(job ? job.role : "");
    setNewAzienda(job ? job.company : "");
    setNewArea(job ? job.area : "");
    setNewDescrizione(job ? job.description : "");
    setStartDate(job ? new Date(job.startDate) : new Date());
    setEndDate(
      job ? (job.endDate ? new Date(job.endDate) : new Date()) : new Date()
    );
  }, [job]);
  if (!job) {
    // Se props.experienceToEdit non è ancora pronto, potresti mostrare un messaggio di caricamento o gestire diversamente il caso in cui i dati non sono ancora pronti
    return <div></div>;
  }
  const handleClose = () => {
    props.onClose();
    console.log("HANDOLO CLOSO");
  };
  const handleRuoloChange = (event) => {
    setNewRuolo(event.target.value);
  };

  const handleAziendaChange = (event) => {
    setNewAzienda(event.target.value);
  };

  const handleAreaChange = (event) => {
    setNewArea(event.target.value);
  };

  const handleDescrizioneChange = (event) => {
    setNewDescrizione(event.target.value);
  };

  function handleDateChange(selectedDate, setFunction) {
    const formattedDate = formatDate(selectedDate);
    console.log(formattedDate);
    setFunction(selectedDate);
  }

  function formatDate(date) {
    const d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ");
  }

  const myPostUrl = `https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences/${job._id}`;
  const bearerToken = sessionStorage.getItem("accessToken");

  const handleEdit = async (e) => {
    e.preventDefault();
    console.log("Submit form");
    try {
      const formData = {
        role: newRuolo,
        company: newAzienda,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        area: newArea,
        description: newDescrizione,
      };

      const response = await fetch(myPostUrl, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + bearerToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log("API response:", response);

      if (!response.ok) {
        throw new Error("Errore nella richiesta POST");
      }

      // setNewRuolo("");
      // setNewAzienda("");
      // setNewArea("");
      // setNewDescrizione("");
      // setStartDate(new Date());
      // setEndDate(new Date());
      handleClose();
    } catch (error) {
      console.error("Errore durante la richiesta POST:", error);
    }
  };

  return (
    <Modal
      show={props.visibilitàModaleEditEsperienza}
      onHide={handleClose}
      onSubmit={handleEdit}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modifica esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="idValueRuolo">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ruolo.."
              autoFocus
              value={newRuolo}
              onChange={handleRuoloChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="idValueAzienda">
            <Form.Label>Azienda</Form.Label>
            <Form.Control
              type="text"
              placeholder="Azienda.."
              value={newAzienda}
              onChange={handleAziendaChange}
              required
            />
          </Form.Group>
          <div className="d-flex">
            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Data Inizio</Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => handleDateChange(date, setStartDate)}
                dateFormat="dd MM yyyy"
                required
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
          <Form.Group className="mb-3" controlId="valueTextAreaDescrizione">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newDescrizione}
              onChange={handleDescrizioneChange} // Aggiorna lo state ogni volta che il contenuto cambia
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="idValueArea">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area.."
              value={newArea}
              onChange={handleAreaChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="d-flex align-items-center justify-content-center"
          variant="success"
          onClick={handleEdit}
        >
          Invia
        </Button>
        <Button
          className="d-flex align-items-center justify-content-center"
          variant="secondary"
          onClick={handleClose}
        >
          Annulla
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PutExperience;
