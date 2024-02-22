import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FETCH_ALL_POSTS } from "../Redux/Actions/ADD_EXPERIENCE";

const DeletePost = ({ postId, onClose }) => {
  const dispatch = useDispatch();
  //   console.log("id del post", postId);
  const myUrlDeletePost = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

  const handleDelete = async () => {
    try {
      // Esegui la richiesta di eliminazione
      await fetch(myUrlDeletePost, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });

      // Aggiorna lo store con i post aggiornati dopo l'eliminazione
      const fetchPostCurrentUser = async () => {
        try {
          const res = await fetch(
            `https://striveschool-api.herokuapp.com/api/posts`,
            {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem(
                  "accessToken"
                )}`,
              },
            }
          );

          if (!res.ok) {
            throw new Error("Errore durante il recupero dei post");
          }

          const data = await res.json();

          dispatch({
            type: FETCH_ALL_POSTS,
            payload: data,
          });
        } catch (error) {
          console.log("Errore durante il recupero dei post", error);
        }
      };

      // Richiama la funzione per aggiornare lo store con i post aggiornati
      await fetchPostCurrentUser();

      // Chiudi la modale o esegui altre azioni necessarie
      onClose();
    } catch (error) {
      console.error("Errore durante l'eliminazione", error);
    }
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Conferma Eliminazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Sei sicuro di voler eliminare questo post?</p>
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

export default DeletePost;
