/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    bio: "",
    email: "",
    title: "",
    username: "",
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const storedProfile = useSelector((state) => state.currentUser.currentUser); //Prende l'user dallo store

  useEffect(() => {
    setProfile(storedProfile);
  }, [storedProfile]); //Setta il profilo preso dallo store come stato del componente

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const accessToken = sessionStorage.getItem("accessToken"); // modificato per prendere l'accestoken dell'utente corrente

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
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
              // height: '150px',
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
                borderRadius: "50%",
                border: "4px solid white",
                width: "150px",
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
              {!isEditing && (
                <button
                  className="Verify"
                  style={{ marginLeft: "10px", width: "20%" }}
                  onClick={() => setIsEditing(true)}
                >
                  Modifica
                </button>
              )}
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
                  Email: {profile.email ? profile.email : "Not Available"}
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
                  Username:{" "}
                  {profile.username ? profile.username : "Not Available"}
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
                  Title: {profile.title ? profile.title : "Not Available"}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: profile.bio ? "black" : "red",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  Bio: {profile.bio ? profile.bio : "Not Available"}
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
                  <Form.Group controlId="name">
                    <Form.Label style={{ color: "black" }}>Name:</Form.Label>
                    <Form.Control
                      style={{ color: "black", backgroundColor: "white" }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                  <Form.Group controlId="surname">
                    <Form.Label style={{ color: "black" }}>Surname:</Form.Label>
                    <Form.Control
                      style={{ color: "black", backgroundColor: "white" }}
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      placeholder="Enter your surname"
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label style={{ color: "black" }}>Email:</Form.Label>

                    <Form.Control
                      style={{ color: "black", backgroundColor: "white" }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </Form.Group>
                  <Form.Group controlId="username">
                    <Form.Label style={{ color: "black" }}>
                      Username:
                    </Form.Label>
                    <Form.Control
                      style={{ color: "black", backgroundColor: "white" }}
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter your username"
                    />
                  </Form.Group>
                  <Form.Group controlId="title">
                    <Form.Label style={{ color: "black" }}>Title:</Form.Label>
                    <Form.Control
                      style={{ color: "black", backgroundColor: "white" }}
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter your title"
                    />
                  </Form.Group>
                  <Form.Group controlId="bio">
                    <Form.Label style={{ color: "black" }}>Bio:</Form.Label>
                    <Form.Control
                      style={{ color: "black", backgroundColor: "white" }}
                      as="textarea"
                      rows={3}
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      placeholder="Enter your bio"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      style={{
                        backgroundColor: "#DC3545",
                        border: "none",
                        marginTop: "10px",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        marginLeft: "5px",
                        fontSize: "12px",
                      }}
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="Savebtn"
                      style={{
                        border: "none",
                        backgroundColor: "green",
                        marginTop: "10px",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        marginLeft: "5px",
                        fontSize: "12px",
                      }}
                      type="submit"
                    >
                      Save Changes
                    </Button>
                  </div>
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
