import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToNetworkAction } from "../Redux/Actions/ADD_TO_NETWORK";
import TastoCollegati from "./TastoCollegati";

const SideBar = () => {
  const AllTheProfilesURL =
    "https://striveschool-api.herokuapp.com/api/profile";
  const myKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUzYjI0ZjYwNTAwMTkzN2Q0NmEiLCJpYXQiOjE3MDgzMzIzNDcsImV4cCI6MTcwOTU0MTk0N30.PhTpxaqmoqshGHbwVUIWDlVbF1mGD_vRAaHWmdvBCIs";

  const arrUsers = useSelector((state) => state.allUserArray.currentUser);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [profileOfOthers, setProfileOfOthers] = useState([]);
  const [showAllProfiles, setShowAllProfiles] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  // DISPACCIO sul bottone del modale
  const dispatch = useDispatch();

  // per navigare da modale a Rete
  const navigate = useNavigate();

  const gettingSelectedProfiles = async () => {
    try {
      let response = await fetch(AllTheProfilesURL, {
        headers: {
          Authorization: myKey,
        },
      });
      if (response.ok) {
        let data = await response.json();
        //  Map arrUsers to create an array of user_ids
        const currentUserIds = arrUsers.map((user) => user._id);

        const elisa = "65d3153b24f605001937d46a";
        const wendy = "65d4bb2e9c437000193c3636";
        const vincenzo = "65d3228a24f605001937d477";
        const fidan = "65d5c220a33fc900196582f8";
        const hamed = "65d311e424f605001937d456";
        const alex = "65d322a824f605001937d478";
        const includedUsersIds = [elisa, wendy, vincenzo, hamed, alex, fidan];
        // Filter out currentUser_id
        const otherUserIds = currentUserIds.filter(
          (id) => id !== currentUser._id
        );
        // Select profiles based on otherUserIds

        const selectedUsers = otherUserIds.filter((id) =>
          includedUsersIds.includes(id)
        );
        const selectedProfiles = selectedUsers.map((id) =>
          data.find((profile) => profile._id === id)
        );
        setSelectedProfiles(selectedProfiles);
      } else {
        throw new Error("Errore: " + response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setProfileOfOthers(arrUsers);
    gettingSelectedProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Card className="pb-2">
            {" "}
            <Card.Header className="fw-semibold">
              Altri profili consultati
            </Card.Header>
            <ListGroup variant="flush">
              {profileOfOthers
                .slice(204, showAllProfiles ? profileOfOthers.length : 210)
                .map((profile) => (
                  <ListGroup.Item key={profile._id} className="p-2">
                    <div className="d-flex flex-row justify-content-start align-items-baseline">
                      <span className="p-2">
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
                        <p className="fw-light"> {profile.area}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                      <TastoCollegati user={profile}/>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>
            {/* BOTTONE CHE TOGGLA TUTTI GLI ALTRI UTENTI */}
            <ListGroup.Item className="text-center d-flex justify-content-center align-items-center p-2">
              <Button
                style={{ maxWidth: "fit-content" }}
                variant="light"
                className="bg-transparent d-flex justify-content-center align-items-center p-2"
                onClick={() => setShowAllProfiles(!showAllProfiles)}
              >
                {showAllProfiles ? "Mostra meno" : "Mostra tutto"}
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
        {/* COLONNA UTENTI CHE POTRESTI CONOSCERE
         */}
        <Col xs={12} className="mt-3">
          <Card className="pb-2">
            <Card.Header className="fw-semibold">
              <span className="pb-0 mb-0 d-block">
                Persone che potresti conoscere
              </span>
              <span
                className="fw-light 
              text-secondary m-0 p-0 d-block"
              >
                Dal tuo settore
              </span>
            </Card.Header>
            <ListGroup variant="flush">
              {selectedProfiles.map((user) => (
                <ListGroup.Item className="p-2 text-secondary" key={user._id}>
                  <div
                    className="d-flex flex-row justify-content-start align-items-baseline
                "
                  >
                    <span className="p-2">
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
                  <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                    <TastoCollegati user={user}/>
                  </div>
                </ListGroup.Item>
              ))}
              {/* <ListGroup.Item className="text-center">
                <Button
                  style={{ maxWidth: "fit-content" }}
                  variant="light"
                  className="bg-transaprent"
                  onClick={() => setShowAllProfiles(!showAllProfiles)}
                >
                  {showAllProfiles ? "Mostra meno" : "Mostra tutto"}
                </Button>
              </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {/* MODALE PER I DETTAGLI AL COLLEGATI */}
      <Modal show={selectedProfile !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column align-items-center">
          {selectedProfile && (
            <>
              <h5>{`${selectedProfile.name} ${selectedProfile.surname}`}</h5>
              <p>{selectedProfile.title}</p>
              <p>{selectedProfile.email}</p>
            </>
          )}
          <div className="d-flex justify-content-center align-items-center ">
            <Button
              className="p-2 d-flex align-items-center justify-content-center m-1"
              size="md"
              style={{ maxWidth: "fit-content" }}
              variant="primary"
              onClick={() => {
                dispatch(AddToNetworkAction(selectedProfile));
              }}
            >
              Collega alla tua rete
            </Button>
            <Button
              className="p-2 d-flex align-items-center justify-content-center "
              size="md"
              style={{ maxWidth: "fit-content" }}
              variant="primary"
              onClick={() => {
                navigate("/network");
              }}
            >
              Vai alla tua rete
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center"
            variant="secondary"
            style={{ maxWidth: "fit-content" }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default SideBar;
