import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ProgressBar } from "react-bootstrap";

const Consigliato = () => {
  return (
    <div className="border border-tertiary p-3 mb-4 rounded-top rounded-bottom py-4 bg-white">
      <Container>
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
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card style={{ width: "18rem" }} className="card" height={"100%"}>
              <Card.Body>
                <Card.Title>Dove ti trovi?</Card.Title>
                <Card.Text>
                  Gli utenti che includono una località con codice postale
                  ricevono fino al 70% in più di visualizzazioni del profilo.
                </Card.Text>
                <Button
                  type="submit"
                  className="btn rounded-pill border border-black text-secondary py-1  bg-body-tertiary button"
                >
                  Aggiungi una località
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card style={{ width: "18rem" }} height={"100%"}>
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
                  className="btn rounded-pill border border-black text-secondary py-1  bg-body-tertiary button"
                >
                  Aggiungi una località
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Consigliato;
