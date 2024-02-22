import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const PutPost = ({ post, onClose, visibilitàModaleEditPost }) => {
  const postEdit = post;
  const [newPostModifica, setNewPostModifica] = useState("");
  // const post=useSelector((state) => state.arrayAllPosts.arrayPosts);
  useEffect(() => {
    setNewPostModifica(postEdit ? postEdit.text : "");
  }, [postEdit]);
  ///
  const handleClose = () => {
    onClose();
    console.log("handle close");
  };
  const handlePostChange = (event) => {
    setNewPostModifica(event.target.value);
  };
  console.log("post id per la put", postEdit._id);
  ///
  const myUrlPutPost = `https://striveschool-api.herokuapp.com/api/posts/${postEdit._id}`;
  const bearerToken = sessionStorage.getItem("accessToken");
  const handleEdit = async (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTATO");

    try {
      const formData = {
        text: newPostModifica,
      };
      const response = await fetch(myUrlPutPost, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + bearerToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("API response:", response);

      if (!response.ok) {
        throw new Error("Errore nella richiesta PUT");
      }

      handleClose();
    } catch (error) {
      console.error("Errore durante la richiesta POST:", error);
    }
  };
  ///
  return (
    <Modal
      show={visibilitàModaleEditPost}
      onHide={handleClose}
      onSubmit={handleEdit}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modifica Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="valueTextAreaDescrizione">
            <Form.Control
              as="textarea"
              rows={3}
              value={newPostModifica}
              onChange={handlePostChange} // Aggiorna lo state ogni volta che il contenuto cambia
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="idValueImage">
            <Form.Label>Select Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Form.Group> */}
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

export default PutPost;
