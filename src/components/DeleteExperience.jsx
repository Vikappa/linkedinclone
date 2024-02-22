import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {
  FETCH_CURRENT_USER_EXPERIENCES,
  REMOVE_EXPERIENCE,
} from "../Redux/Actions/ADD_EXPERIENCE";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const DeleteExperience = ({ onClose, experienceId }) => {
  let currentUserStore = useSelector((state) => state.currentUser.currentUser);
  const [currentUser, setCurrentUser] = useState(currentUserStore);
  const dispatch = useDispatch();
  const myUrlFetchProfile = ` https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences/${experienceId}`;

  const handleDelete = async () => {
    try {
      await fetch(myUrlFetchProfile, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });

      const fetchExperiencesCurrentUser = async () => {
        try {
          const fetchedExperiences = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem(
                  "accessToken"
                )}`,
              },
            }
          );

          if (!fetchedExperiences.ok) {
            throw new Error("Errore nella fetch delle esperienze");
          }

          const experiencesData = await fetchedExperiences.json();

          // Dispatch dell'azione Redux
          dispatch({
            type: FETCH_CURRENT_USER_EXPERIENCES,
            payload: experiencesData,
          });
        } catch (error) {
          console.log("Errore", error);
        }
      };
      fetchExperiencesCurrentUser();

      onClose();
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
    }
  };
  // useEffect(() => {

  // }, [currentUser, dispatch]);

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
