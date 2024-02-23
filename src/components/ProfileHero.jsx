/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    bio: "",
    email: "",
    title: "",
    username: "",
  });

  const storedProfile = useSelector((state) => state.currentUser.currentUser);

  useEffect(() => {
    setProfile(storedProfile);
  }, [storedProfile]);

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        surname: profile.surname || "",
        bio: profile.bio || "",
        email: profile.email || "",
        title: profile.title || "",
        username: profile.username || "",
      });
    }
  }, [profile]);

  const accessToken = sessionStorage.getItem("accessToken");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewImage(file);
  };

  const handleImageSubmit = async () => {
    try {
      if (newImage) {
        const formDataImage = new FormData();
        formDataImage.append("profile", newImage);

        const responseImage = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: formDataImage,
          }
        );

        if (!responseImage.ok) {
          throw new Error(
            "Errore durante il caricamento dell'immagine del profilo"
          );
        }
        const updatedProfileImage = await responseImage.json();
        setNewImage(updatedProfileImage);
      }
    } catch (error) {
      console.error(
        "Si è verificato un errore durante il caricamento dell'immagine:",
        error
      );
    }
  };

  const handleFieldEdit = (fieldName) => {
    setIsEditing(true);
    setFieldToEdit(fieldName);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleImageSubmit();
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ [fieldToEdit]: formData[fieldToEdit] }),
        }
      );
      if (response.ok) {
        setIsEditing(false);

        const updatedProfile = await response.json();
        setProfile(updatedProfile);
      } else {
        console.error(
          "Errore durante l'aggiornamento del profilo:",
          response.status
        );
      }
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      {profile && (
        <Card
          key={profile._id}
          style={{
            width: "100%",
            position: "relative",
            overflow: "hidden",
            paddingBottom: "50px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              backgroundImage: "url(./src/img/bg-linkedin.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: 2,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <Card.Body
            className="d-flex flex-column"
            style={{
              zIndex: 3,
              position: "relative",
              textAlign: "left",
              marginLeft: "20px",
              top: "2.5rem",
            }}
          >
            <Card.Img
              className="ProfileImg"
              src={profile.image}
              alt="Profile Image"
              style={{
                borderRadius: "10%",
                border: "4px solid white",
                width: "200px",
              }}
            />
            <Card.Title
              style={{
                color: "black",
                marginBottom: "10px",
                position: "relative",
                zIndex: 4,
                fontSize: "40px",
              }}
            >
              {profile.name ? (
                profile.name
              ) : (
                <span style={{ color: "red" }}>Name not available</span>
              )}{" "}
              {profile.surname ? (
                profile.surname
              ) : (
                <span style={{ color: "red" }}>Surname not available</span>
              )}
              <Button
  className="Verify"
  style={{
    color: "black",
    border: "none",
    backgroundColor: "lightgrey",
    marginLeft: "10px",
    width: "auto",
    transition: "background-color 0.3s, color 0.3s", 
  }}
  onClick={() => handleFieldEdit("name")}
  onMouseEnter={(event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white'; 
  }}
  onMouseLeave={(event) => {
    event.target.style.backgroundColor = 'lightgrey';
    event.target.style.color = 'black'; 
  }}
>
  Modifica nome
</Button>

<Button
  className="Verify d-flex align-items-center justify-content-center"
  style={{
    color: "black",
    border: "none",
    backgroundColor: "lightgrey",
    marginLeft: "10px",
    width: "auto",
    transition: "background-color 0.3s, color 0.3s", 
  }}
  onClick={() => handleFieldEdit("surname")}
  onMouseEnter={(event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white'; 
  }}
  onMouseLeave={(event) => {
    event.target.style.backgroundColor = 'lightgrey';
    event.target.style.color = 'black'; 
  }}
>
  Modifica cognome
</Button>
            </Card.Title>
            {!isEditing && (
              <>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: profile.email ? "black" : "red",
                    marginBottom: "5px",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {profile.email ? profile.email : ""}
                  <Button
  className="Verify d-flex align-items-center justify-content-center"
  style={{
    color: "black",
    border: "none",
    backgroundColor: "lightgrey",
    marginLeft: "10px",
    width: "auto",
    transition: "background-color 0.3s, color 0.3s", 
  }}
  onClick={() => handleFieldEdit("email")}
  onMouseEnter={(event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white'; 
  }}
  onMouseLeave={(event) => {
    event.target.style.backgroundColor = 'lightgrey';
    event.target.style.color = 'black'; 
  }}
>
  Modifica email
</Button>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: profile.username ? "black" : "red",
                    marginBottom: "5px",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {profile.username ? "UserName: " + profile.username : ""}
                  <Button
  className="Verify d-flex align-items-center justify-content-center"
  style={{
    color: "black",
    border: "none",
    backgroundColor: "lightgrey",
    marginLeft: "10px",
    width: "auto",
    transition: "background-color 0.3s, color 0.3s", 
  }}
  onClick={() => handleFieldEdit("username")}
  onMouseEnter={(event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white';
  }}
  onMouseLeave={(event) => {
    event.target.style.backgroundColor = 'lightgrey';
    event.target.style.color = 'black'; 
  }}
>
  Modifica username
</Button>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: profile.title ? "black" : "red",
                    marginBottom: "5px",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {profile.title ? "Titolo: " + profile.title : ""}
                  <Button
  className="Verify d-flex align-items-center justify-content-center"
  style={{
    color: "black",
    border: "none",
    backgroundColor: "lightgrey",
    marginLeft: "10px",
    width: "auto",
    transition: "background-color 0.3s, color 0.3s", 
  }}
  onClick={() => handleFieldEdit("title")}
  onMouseEnter={(event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white'; 
  }}
  onMouseLeave={(event) => {
    event.target.style.backgroundColor = 'lightgrey';
    event.target.style.color = 'black'; 
  }}
>
  Modifica titolo
</Button>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: profile.bio ? "black" : "red",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {profile.bio ? "Bio: " + profile.bio : ""}
                  <Button
  className="Verify d-flex align-items-center justify-content-center"
  style={{
    color: "black",
    border: "none",
    backgroundColor: "lightgrey",
    marginLeft: "10px",
    width: "auto",
    transition: "background-color 0.3s, color 0.3s", 
  }}
  onClick={() => handleFieldEdit("bio")}
  onMouseEnter={(event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white'; 
  }}
  onMouseLeave={(event) => {
    event.target.style.backgroundColor = 'lightgrey';
    event.target.style.color = 'black'; 
  }}
>
  Modifica bio
</Button>
                </Card.Text>
              </>
            )}
            {isEditing && (
              <Card
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId={fieldToEdit}>
                    <Form.Label style={{ color: "black" }}>
                      {fieldToEdit === "name" && "Name:"}
                      {fieldToEdit === "surname" && "Surname:"}
                      {fieldToEdit === "email" && "Email:"}
                      {fieldToEdit === "username" && "Username:"}
                      {fieldToEdit === "title" && "Title:"}
                      {fieldToEdit === "bio" && "Bio:"}
                    </Form.Label>
                    <Form.Control
                      style={{ color: "black", backgroundColor: "white" }}
                      type="text"
                      name={fieldToEdit}
                      value={formData[fieldToEdit]}
                      onChange={handleInputChange}
                      placeholder={`Enter your ${fieldToEdit}`}
                    />
                  </Form.Group>
                  <Button
                     className="mt-2 btn-sm d-flex align-items-center justify-content-center" 
                     variant="success"
                     type="submit"
                     style={{ width: "20%" }} 
                                      >
                      Salva Modifiche
                    </Button>
                      <Button
                      className="mt-2 ms-2 btn-sm d-flex align-items-center justify-content-center" 
                      variant="danger"
                     style={{ width: "20%" }} 
                      onClick={handleCancelEdit}
                      >
                       Annulla
                      </Button>
                </Form>
              </Card>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default ProfileCard;