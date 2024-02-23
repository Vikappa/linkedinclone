/* eslint-disable react-hooks/exhaustive-deps */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsEyeFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBarCompletamento from "./ProgressBarCompletamento";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import SpinnerComponent from "./SpinnerComponent";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Consigliato = () => {
  const [show, setShow] = useState(false); // setto lo stato del  primo modale
  const [show2, setShow2] = useState(false); // setto stato del secondo modale
  const [show3, setShow3] = useState(false); // 3° modale
  const [show4, setShow4] = useState(false); // 4° modale
  const [percentualeCompletamentoProfilo, setPercentualeCompletamentoProfilo] =
    useState(0);
  const currentUserStore = useSelector(
    (state) => state.currentUser.currentUser
  );

  useEffect(() => {
    if (currentUserStore) {
      let incremento = 0;
      if (currentUserStore.area && currentUserStore.area !== "")
        incremento += 25;
      if (currentUserStore.bio && currentUserStore.bio !== "") incremento += 25;
      if (
        currentUserStore.image &&
        currentUserStore.image !==
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
      )
        incremento += 25;
      if (currentUserStore.title && currentUserStore.title !== "")
        incremento += 25;

      setPercentualeCompletamentoProfilo(incremento);
    } else {
      setPercentualeCompletamentoProfilo(0);
    }
  }, [currentUserStore]);

  const [isLoading, setIsLoading] = useState(true); // spinner

  const handleShow = () => setShow(true); // funzione associata al 1°modale
  const handleClose = () => setShow(false); // funzione associata al 1° modale

  const handleShow2 = () => setShow2(true); // funzione associata al 2° modale
  const handleClose2 = () => setShow2(false); // funzione associata al 2° modale

  const handleShow3 = () => setShow3(true); // funzione associata al 3° modale
  const handleClose3 = () => setShow3(false); // funzione associata al 3° modale

  const handleShow4 = () => setShow4(true); // funzione associata al 4° modale
  const handleClose4 = () => setShow4(false); // funzione associata al 4° modale

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    handleClose2();
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    handleClose3();
  };

  const handleSubmit4 = (e) => {
    e.preventDefault();
    handleClose4();
  };

  return (
    <div
      style={{ border: "1px solid lightgrey" }}
      className="m-1 bg-white rounded-2 p-3"
    >
      {currentUserStore ? (
        <>
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
            <p>
              Percentuale completamento profilo:{" "}
              {percentualeCompletamentoProfilo}%
            </p>
            <ProgressBarCompletamento
              percentualeCompletamentoProfilo={percentualeCompletamentoProfilo}
            />
          </Row>

          <Container>
            <Row>
              {/* card località */}

              {currentUserStore.area === "" ? (
                <Col xs={12} md={6} className="my-2">
                  <Card className="cardconsigliato">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        className="fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <i
                            className="bi bi-globe-europe-africa me-1"
                            style={{ fontSize: "3rem" }}
                          ></i>
                          Dove ti trovi?
                        </div>
                      </Card.Title>
                      <Card.Text
                        className="card-text text-black tex"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Gli utenti che includono una località con codice postale
                        ricevono fino al 70% in più di visualizzazioni del
                        profilo.
                      </Card.Text>
                      <div className="d-flex align-items-center mt-auto mb-1 justify-content-center">
                        <Button
                          type="submit"
                          className={`d-flex align-items-center rounded-pill border-black text-secondary px-1 bg-body-tertiary button fw-semibold mt-auto`}
                          onClick={handleShow}
                        >
                          <p className="btnInvitoConsiglio mt-2">
                            Aggiungi una località
                          </p>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ) : (
                ""
              )}

              {currentUserStore.title === "" ? (
                <Col xs={12} md={6} className="my-2">
                  <Card className="cardconsigliato">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        className="fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <i
                            className="bi bi-newspaper me-1"
                            style={{ fontSize: "3rem" }}
                          ></i>
                          Qual&apos;è la tua qualifica?
                        </div>
                      </Card.Title>
                      <Card.Text
                        className="card-text text-black tex"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Gli utenti che descrivono il proprio titolo ottengono
                        fino a millemila milioni di views extra e i gatti gli
                        fanno più fusa da subito
                      </Card.Text>
                      <div className="d-flex align-items-center mt-auto mb-1 justify-content-center">
                        <Button
                          type="submit"
                          className={`d-flex align-items-center rounded-pill border-black text-secondary px-1 bg-body-tertiary button fw-semibold mx-md-auto`}
                          onClick={handleShow3}
                        >
                          <p className="btnInvitoConsiglio mt-2">
                            Aggiungi un titolo
                          </p>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ) : (
                ""
              )}

              {currentUserStore.bio === "" ? (
                <Col xs={12} md={6} className="my-2">
                  <Card className="cardconsigliato">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        className="fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <i
                            className="bi bi-person-lines-fill me-1"
                            style={{ fontSize: "3rem" }}
                          ></i>
                          Scrivi un riepilogo per mettere in evidenza la tua
                          personalità o la tua esperienza lavorativa
                        </div>
                      </Card.Title>
                      <Card.Text
                        className="card-text text-black tex"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Gli utenti che includono un riepilogo ricevono fino a
                        3,9 volte più visualizzazioni del profilo.
                      </Card.Text>
                      <div className="d-flex align-items-center mt-auto mb-1 justify-content-center">
                        <Button
                          type="submit"
                          className={`d-flex align-items-center rounded-pill border-black text-secondary px-1 bg-body-tertiary button fw-semibold mx-md-auto`}
                          onClick={handleShow2}
                        >
                          <p className="btnInvitoConsiglio mt-2">
                            Aggiungi un riepilogo
                          </p>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ) : (
                ""
              )}

              {currentUserStore.image ===
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" ? (
                <Col xs={12} md={6} className="my-2">
                  {/* card */}
                  <Card className="cardconsigliato">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        className="fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <i
                            className="bi bi-camera me-1"
                            style={{ fontSize: "3rem" }}
                          ></i>
                          Aggiungi una foto al tuo profilo per aiutare gli altri
                          a riconoscerti
                        </div>
                      </Card.Title>
                      <Card.Text
                        className="card-text text-black tex"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Gli utenti con una foto del profilo ricevono fino a 2,3
                        volte più visualizzazioni del profilo.
                      </Card.Text>
                      <div className="d-flex align-items-center mt-auto mb-1 justify-content-center">
                        <Button
                          type="submit"
                          className={`d-flex align-items-center rounded-pill border-black text-secondary px-1 bg-body-tertiary button fw-semibold mx-md-auto`}
                          onClick={handleShow4}
                        >
                          <p className="btnInvitoConsiglio mt-2">
                            Aggiungi una foto
                          </p>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Container>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              {isLoading ? (
                <h4>Caricamento in corso</h4>
              ) : (
                <Modal.Title>Aggiungi località</Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              {isLoading ? (
                <SpinnerComponent
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
                      <Form.Control type="text" placeholder="Es. Stati Uniti" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="cap mb-0 mt-3">CAP</Form.Label>
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
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              {isLoading ? (
                <h4>Caricamento in corso</h4>
              ) : (
                <Modal.Title>Aggiungi riepilogo</Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              {isLoading ? (
                <SpinnerComponent
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              ) : (
                <>
                  <h4>Aggiungiamo il tuo riepilogo</h4>
                  <p className="mb-1">
                    Puoi includere anni di esperienza, settore o competenze
                    acquisite. Potresti anche inserire i risultati raggiunti o
                    le esperienze di lavoro precedenti.
                  </p>

                  <Form onSubmit={handleSubmit2}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control as="textarea" rows={8} />
                    </Form.Group>
                  </Form>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={handleClose2}
                className="salva rounded-pill text-white fw-semibold"
              >
                Salva
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
              {isLoading ? (
                <h4>Caricamento in corso</h4>
              ) : (
                <Modal.Title>Aggiungi qualifica</Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              {isLoading ? (
                <SpinnerComponent
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              ) : (
                <>
                  <h4>Aggiungi la tua qualifica</h4>
                  <p className="mb-1">
                    Puoi includere la tua professione o la qualifica
                    professionale, o specificare di essere uno studente,
                    apprendista, stagista o gatto
                  </p>

                  <Form onSubmit={handleSubmit3} className="my-3">
                    <Form.Group className="my-3" controlId="titoloqualifica">
                      <Form.Control
                        type="text"
                        placeholder="La tua qualifica professionale"
                      />
                    </Form.Group>
                  </Form>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={handleClose3}
                className="salva rounded-pill text-white fw-semibold"
              >
                Salva
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show4} onHide={handleClose4}>
            <Modal.Header closeButton>
              {isLoading ? (
                <h4>Caricamento in corso</h4>
              ) : (
                <Modal.Title>Aggiungi foto</Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              {isLoading ? (
                <SpinnerComponent
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              ) : (
                <>
                  <h4>Aggiungiamo la tua foto</h4>
                  <p className="mb-1">
                    Puoi scegliere una foto al mare o in piscina anzichè una
                    noiosa foto vestito da pinguino in ufficio. Sennò metti una
                    foto del tuo gatto, ancora meglio. Se non hai gatto puoi
                    anche risparmiarci la foto
                  </p>

                  <Form onSubmit={handleSubmit4}></Form>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={handleClose4}
                className="salva rounded-pill text-white fw-semibold"
              >
                Salva
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Consigliato;
