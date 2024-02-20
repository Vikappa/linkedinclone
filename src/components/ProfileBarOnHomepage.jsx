import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

const ProfileBarOnHomepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card className="my-2">
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/vibrant-colors-blend-abstract-backdrop-pattern-generated-by-ai_188544-9565.jpg"
            />
            <Card.Body className="position-relative text-center">
              <div className="position-absolute top-0 start-50 translate-middle">
                <Image
                  src="https://placebear.com/g/200/300"
                  roundedCircle
                  fluid
                  thumbnail
                  style={{ width: "80px", height: "80px" }}
                  className="border-1"
                />
              </div>
              <Card.Title className="mt-5">Card Title</Card.Title>
              <Card.Text className="fw-light text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush d-none d-md-block">
              <ListGroup.Item>
                <p className="text-secondary m-0">Collegamenti</p>
                <p>Espandi la tua rete</p>
              </ListGroup.Item>
              <ListGroup.Item>
                Raggiungi i tuoi obiettivi con Premium
                <p className="fw-light">
                  <i className="bi bi-square-half text-warning"></i> Prova
                  Premium per 0 EUR
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bi bi-bookmark-fill text-secondary"></i> I miei
                elementi
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileBarOnHomepage;
