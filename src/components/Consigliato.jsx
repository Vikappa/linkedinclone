import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Wendy from "./Wendy";

const Consigliato = () => {
  const [show, setShow] = useState(false); // setto lo stato del  primo modale
  const [show2, setShow2] = useState(false); // setto stato del secondo modale

  const [isLoading, setIsLoading] = useState(true); // spinner

  const handleShow = () => setShow(true); // funzione associata al 1°modale
  const handleClose = () => setShow(false); // funzione associata al 1° modale

  const handleShow2 = () => setShow2(true); // funzione associata al 2° modale
  const handleClose2 = () => setShow2(false); // funzione associata al 2° modale

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    handleClose2();
  };

  return (
    <div className="border border-tertiary p-3 mt-3 rounded-top rounded-bottom py-4 bg-white">
      <Container fluid>
        <Row>
          <div>
            <h5 className="mb-1 fw-bold">Consigliato per te </h5>
            <div className="d-flex justify-content-start align-items-center">
              <span>
                <BsEyeFill className="text-secondary" />
              </span>
              <span className="ms-1 text-secondary">Solo per te</span>
            </div>
          </div>
        </Row>
        <Row>
          <div className="my-3">
            <h6 className="fw-bold">Intermedio</h6>
            <Row>
              <ProgressBar
                now={70}
                className="progressbar"
                variant="secondary"
              />
            </Row>
            <span className="consigliato me-1 mb-0">
              Completa 2 passaggi per raggiungere il livello
            </span>
            <Link to="/profile-status/" className="link">
              Massimo
            </Link>
          </div>
        </Row>
        {/*      PRIMA CARD     */}
        <Row>
          <Col md={6} lg={6}>
            <Card className="card">
              <Card.Body>
                <Card.Title>Dove ti trovi?</Card.Title>
                <Card.Text>
                  Gli utenti che includono una località con codice postale
                  ricevono fino al 70% in più di visualizzazioni del profilo.
                </Card.Text>
                <Button
                  type="submit"
                  className="btn rounded-pill border border-black text-secondary py-1 bg-body-tertiary button fw-semibold"
                  onClick={handleShow}
                >
                  Aggiungi una località
                </Button>
                {/*      PRIMO MODALE       */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    {isLoading ? (
                      <h4>Caricamento in corso</h4>
                    ) : (
                      <Modal.Title>Aggungi località</Modal.Title>
                    )}
                  </Modal.Header>
                  <Modal.Body>
                    {isLoading ? (
                      <Wendy
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                      />
                    ) : (
                      <>
                        <h4>Confermiamo la tua località attuale</h4>
                        <p>* Indica che é obbligatorio</p>
                        <Form onSubmit={handleSubmit}>
                          <Form.Group>
                            <Form.Label className="area mb-1">
                              Paese/Area geografica*
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Es. Stati Uniti"
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label className="cap mb-0 mt-3">
                              CAP
                            </Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                        </Form>
                      </>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={handleClose}
                      className="salva rounded-pill text-white fw-semibold"
                    >
                      Salva
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
          {/*        SECONDA CARD       */}
          <Col md={6} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Scrivi un riepilogo per mettere in evidenza la tua personalità
                  o la tua esperienza lavorativa
                </Card.Title>
                <Card.Text>
                  Gli utenti che includono una località con codice postale
                  ricevono fino al 70% in più di visualizzazioni del profilo.
                </Card.Text>
                <Button
                  type="submit"
                  className="btn rounded-pill border border-black text-secondary py-1  bg-body-tertiary button fw-semibold"
                  onClick={handleShow2}
                >
                  Aggiungi un riepilogo
                </Button>
                {/*      SECONDO MODALE       */}

                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit2}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Invia
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose2}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Consigliato;
