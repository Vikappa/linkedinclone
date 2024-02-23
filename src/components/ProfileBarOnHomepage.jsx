import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileBarOnHomepage = () => {
  const [currentProfile, setcurrentProfile] = useState(null);
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  useEffect(() => {
    setcurrentProfile(currentUser);
  }, [currentUser]);

  return (
    <Container fluid>
      <Row>
        <Col>
          {currentProfile && (
            <Card className="my-2">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/vibrant-colors-blend-abstract-backdrop-pattern-generated-by-ai_188544-9565.jpg"
                style={{ height: "150px" }}
              />
              <Card.Body className="position-relative text-center">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <Image
                    src={currentProfile.image}
                    roundedCircle
                    fluid
                    thumbnail
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <Card.Title className="mt-5">
                  <Link to={`/profile`}>
                    {" "}
                    <h4 className="text-black">
                      {" "}
                      {currentProfile.name} {currentProfile.surname}
                    </h4>
                  </Link>
                </Card.Title>
                <Card.Text className="fw-light text-secondary">
                  {currentProfile.title}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush d-none d-md-block">
                <ListGroup.Item className="text-secondary m-0">
                  Collegamenti
                  <span className="d-block text-black">
                    Espandi la tua rete
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Raggiungi i tuoi obiettivi con Premium
                  <span className="fw-light d-block fs-6">
                    <i className="bi bi-square-half text-warning"></i> Prova
                    Premium per 0 EUR
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <i className="bi bi-bookmark-fill text-secondary"></i> I miei
                  elementi
                </ListGroup.Item>
              </ListGroup>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileBarOnHomepage;
