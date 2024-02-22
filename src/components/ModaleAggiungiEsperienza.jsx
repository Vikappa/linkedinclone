/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ADD_EXPERIENCE,
  FETCH_CURRENT_USER_EXPERIENCES,
} from "../Redux/Actions/ADD_EXPERIENCE";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ModaleAggiungiEsperienza(props) {
  const [visibilitàModaleAddEsperienza, setVisibilitàModaleAddEsperienza] =
    useState(props.visibilitàModaleAddEsperienza);
  const [newRuolo, setNewRuolo] = useState("");
  const [newAzienda, setNewAzienda] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newDescrizione, setNewDescrizione] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClose = () => {
    props.onClose();
  };
  const handleShow = () => props.setVisibilitàModaleAddEsperienza(true);

  const handleRuoloChange = (event) => {
    setNewRuolo(event.target.value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewImage(file);
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
  //!

  let currentUserStore = useSelector((state) => state.currentUser.currentUser);
  const [currentUser, setCurrentUser] = useState(currentUserStore);

  useEffect(() => {
    setCurrentUser(currentUserStore);
  }, [currentUserStore]);
  // console.log("id", currentUser._id);
  const myPostUrl = ` https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences`;

  const bearerToken = sessionStorage.getItem("accessToken");

  const handleSubmit = async (e) => {
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
        // image: newImage,
      };

      const response = await fetch(myPostUrl, {
        method: "POST",
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
      const responseData = await response.json();
      const experienceId = responseData._id;

      const myUrlImage = `https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences/${experienceId}/picture`;

      const formDataImage = new FormData();
      formDataImage.append("experience", newImage);

      const responseImage = await fetch(myUrlImage, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + bearerToken,
        },
        body: formDataImage,
      });

      if (!responseImage.ok) {
        throw new Error("Errore nella richiesta POST per l'immagine");
      }

      setNewRuolo("");
      setNewAzienda("");
      setNewArea("");
      setNewDescrizione("");
      setStartDate(new Date());
      setEndDate(new Date());
      setNewImage("");
      handleClose();
    } catch (error) {
      console.error("Errore durante la richiesta POST:", error);
    }
  };

  //!
  useEffect(() => {
    // console.log("Effetto collaterale eseguito");
    setVisibilitàModaleAddEsperienza(props.visibilitàModaleAddEsperienza);
  }, [props.visibilitàModaleAddEsperienza]);

  return (
    <Modal
      show={visibilitàModaleAddEsperienza}
      onHide={handleClose}
      onSubmit={handleSubmit}
    >
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
          <Form.Group className="mb-3" controlId="idValueArea">
            <Form.Label>Select Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="d-flex align-items-center justify-content-center"
          variant="success"
          onClick={handleSubmit}
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
}

export default ModaleAggiungiEsperienza;
