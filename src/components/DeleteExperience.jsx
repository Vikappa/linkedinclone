import React from "react";

import { useDispatch } from "react-redux";

import { removeExperience } from "../Redux/Actions/ADD_EXPERIENCE";
import { Button, Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const DeleteExperience = ({ experienceId, onClose }) => {
  const dispatch = useDispatch();
  const myUrlFetchProfile = ` https://striveschool-api.herokuapp.com/api/profile/65d322a824f605001937d478/experiences/${experienceId}`;

  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjJhODI0ZjYwNTAwMTkzN2Q0NzgiLCJpYXQiOjE3MDgzMzU3ODQsImV4cCI6MTcwOTU0NTM4NH0.pioeDwZO2GA-_tAisq4KElbrIk9InfeCBaG2-L3oQJA";
  const handleDelete = async () => {
    try {
      await fetch(myUrlFetchProfile, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + bearerToken,
          "Content-Type": "application/json",
        },
      });

      dispatch(removeExperience(experienceId));

      onClose();
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
    }
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Conferma Eliminazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Sei sicuro di voler eliminare questa esperienza?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Annulla
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Elimina
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteExperience;
