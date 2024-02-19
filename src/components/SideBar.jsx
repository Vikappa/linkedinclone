import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const SideBar = () => {
  return (
    <Container className="d-none d-md-block mt-2">
      <Row className="justify-content-center">
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
        <Col className="mt-3">
          <Card>
            <Card.Header className="fw-semibold">
              Altri profili consultati
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="p-1 text-secondary">
                <div
                  className="d-flex flex-row justify-content-between align-items-baseline
                "
                >
                  <span className="me-2">
                    <Image src="https://placebear.com/g/80/80" roundedCircle />
                  </span>

                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row">
                      <p className="text-dark fw-semibold">
                        Emanuele Brancaforte
                      </p>
                    </div>

                    <p className="text muted m-0">Software Engineer</p>
                    <span> COMPANY</span>
                    <div className=" mt-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="rounded-5 border-2  fw-semibold"
                      >
                        {" "}
                        <i className="bi bi-person-plus-fill me-1"></i>
                        Collegati
                      </Button>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="text-center">
                <Button variant="light" className="bg-transaprent">
                  Mostra tutto
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col className="mt-3">
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
              <ListGroup.Item className="p-1 text-secondary">
                <div
                  className="d-flex flex-row justify-content-between align-items-baseline
                "
                >
                  <span className="me-2">
                    <Image src="https://placebear.com/g/80/80" roundedCircle />
                  </span>

                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row">
                      <p className="text-dark fw-semibold">
                        Emanuele Brancaforte
                      </p>
                    </div>

                    <p className="text muted m-0">Software Engineer</p>
                    <span> COMPANY</span>
                    <div className=" mt-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="rounded-5 border-2  fw-semibold"
                      >
                        <i className="bi bi-person-plus-fill me-1"></i>
                        Collegati
                      </Button>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="text-center">
                <Button variant="light" className="bg-transaprent">
                  Mostra tutto
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SideBar;
