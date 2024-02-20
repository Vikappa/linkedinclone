import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const SideBar = () => {
  const AllTheProfilesURL =
    "https://striveschool-api.herokuapp.com/api/profile";
  const myKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUzYjI0ZjYwNTAwMTkzN2Q0NmEiLCJpYXQiOjE3MDgzMzIzNDcsImV4cCI6MTcwOTU0MTk0N30.PhTpxaqmoqshGHbwVUIWDlVbF1mGD_vRAaHWmdvBCIs";

  const [profileOfOthers, setProfileOfOthers] = useState([]);
  const [showAllProfiles, setShowAllProfiles] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  // funzione fetcha  gli utenti
  const gettingProfiles = async () => {
    try {
      let response = await fetch(AllTheProfilesURL, {
        headers: {
          Authorization: myKey,
        },
      });
      if (response.ok) {
        let data = await response.json();
        // console.log(data);
        setProfileOfOthers(data);
      } else {
        throw new Error("Errore: " + response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const gettingSelectedProfiles = async () => {
    try {
      let response = await fetch(AllTheProfilesURL, {
        headers: {
          Authorization: myKey,
        },
      });
      if (response.ok) {
        let data = await response.json();
        const ArrayOfSelected = [].concat(
          data[207],
          data[211],
          data[202],
          data[224],
          data[232],
          data[231]
        );
        setSelectedProfiles(ArrayOfSelected);
        // console.log(
        //   data[207],
        //   data[211],
        //   data[202],
        //   data[224],
        //   data[232],
        //   data[231]
        // );
      } else {
        throw new Error("Errore: " + response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingProfiles();
    gettingSelectedProfiles();
  }, []);
  // funzione per chiuder il modale di Collegati
  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  return (
    <Container className="d-none d-lg-block my-2">
      <Row className="justify-content-center">
        {/* colonna SETTINGS  */}
        <Col>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item className="p-2 ">
                <div className="d-flex justify-content-between">
                  <span className="me-3 fw-semibold"> Lingua del profilo</span>
                  <span>
                    <i className="bi bi-pencil align-self"></i>
                  </span>
                </div>
                <p className="text-muted">Italiano</p>
              </ListGroup.Item>
              <ListGroup.Item className="p-2 ">
                <div className="d-flex justify-content-between">
                  <span className="me-3 fw-semibold">Public Profile & URL</span>
                  <span>
                    <i className="bi bi-pencil align-self"></i>
                  </span>
                </div>
                <p className="text-muted">www.mioprofilo.com</p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        {/* colonna PROFILI CONSULTATI  */}
        <Col xs={12} className="mt-3">
          <Card>
            <Card.Header className="fw-semibold">
              Altri profili consultati
            </Card.Header>
            <ListGroup variant="flush">
              {profileOfOthers
                .slice(0, showAllProfiles ? profileOfOthers.length : 5)
                .map((profile) => (
                  <ListGroup.Item key={profile._id} className="p-1">
                    <div className="d-flex flex-row justify-content-between align-items-baseline">
                      <span>
                        <Image
                          src={profile.image}
                          roundedCircle
                          fluid
                          style={{ width: "45px", height: "45px" }}
                        />
                      </span>

                      <div className="d-flex flex-column justify-content-end">
                        <div className="d-flex flex-row">
                          <p className="text-dark fw-semibold">
                            {profile.name} {profile.surname}
                          </p>
                        </div>

                        <p className="text-muted m-0">{profile.title}</p>
                        <span> COMPANY</span>
                      </div>
                    </div>
                    <div className=" mt-2 text-center">
                      {/* bottone che aziona al click il modale */}
                      <Button
                        style={{ maxWidth: "fit-content" }}
                        size="sm"
                        variant="outline-secondary"
                        className="rounded-5 border-2  fw-semibold"
                        onClick={() => {
                          setSelectedProfile(profile);
                        }}
                      >
                        <i className="bi bi-person-plus-fill me-1"></i>
                        Collegati
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>
            {/* BOTTONE CHE TOGGLA TUTTI GLI ALTRI UTENTI */}
            <ListGroup.Item className="text-center">
              <Button
                style={{ maxWidth: "fit-content" }}
                variant="light"
                className="bg-transparent"
                onClick={() => setShowAllProfiles(!showAllProfiles)}
              >
                {showAllProfiles ? "Mostra meno" : "Mostra tutto"}
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
        {/* COLONNA UTENTI CHE POTRESTI CONOSCERE
          PS.non è ancora dinamica */}
        <Col xs={12} className="mt-3">
          <Card>
            <Card.Header className="fw-semibold">
              <p className="pb-0 mb-0">Persone che potresti conoscere</p>
              <p
                className="fw-light 
              text-secondary m-0 p-0"
              >
                Dal tuo settore
              </p>
            </Card.Header>
            <ListGroup variant="flush">
              {selectedProfiles.map((user) => (
                <ListGroup.Item className="p-1 text-secondary" key={user._id}>
                  <div
                    className="d-flex flex-row justify-content-between align-items-baseline
                "
                  >
                    <span className="me-2">
                      <Image
                        src={user.image}
                        roundedCircle
                        fluid
                        style={{ width: "45px", height: "45px" }}
                      />
                    </span>

                    <div className="d-flex flex-column justify-content-end">
                      <div className="d-flex flex-row">
                        <p className="text-dark fw-semibold">
                          {user.name} {user.surname}
                        </p>
                      </div>

                      <p className="text muted m-0">{user.title}</p>

                      <div className=" mt-2"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      className="rounded-5 border-2  fw-semibold "
                      style={{ maxWidth: "fit-content" }}
                      onClick={() => {
                        setSelectedProfile(user);
                      }}
                    >
                      <i className="bi bi-person-plus-fill me-1"></i>
                      Collegati
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
              <ListGroup.Item className="text-center">
                <Button
                  style={{ maxWidth: "fit-content" }}
                  variant="light"
                  className="bg-transaprent"
                  onClick={() => setShowAllProfiles(!showAllProfiles)}
                >
                  {showAllProfiles ? "Mostra meno" : "Mostra tutto"}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {/* MODALE PER I DETTAGLI AL COLLEGATI */}
      <Modal show={selectedProfile !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProfile && (
            <>
              <h5>{`${selectedProfile.name} ${selectedProfile.surname}`}</h5>
              <p>{selectedProfile.title}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default SideBar;
