import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { trashThis } from "../Redux/Actions/ADD_TO_NETWORK";

const Network = () => {
  const networking = useSelector((state) => state.networking.users);
  // console.log(networking);
  const dispatch = useDispatch();
  const handleTrash = (i) => {
    dispatch(trashThis(i));
  };

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        {networking.map((user, i) => (
          <Col xs={12} md={4} key={i}>
            <Card className="my-2">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/vibrant-colors-blend-abstract-backdrop-pattern-generated-by-ai_188544-9565.jpg"
                style={{ height: "150px" }}
              />
              <Card.Body className="position-relative text-center">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <Image
                    src={user.image}
                    roundedCircle
                    fluid
                    thumbnail
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <Card.Title className="mt-5">
                  <h4>
                    {user.name} {user.surname}
                  </h4>
                </Card.Title>
                <Card.Text className="fw-light text-secondary">
                  <span className="d-block">{user.title}</span>
                  <span className="d-block">{user.email}</span>
                </Card.Text>
                <div className="d-flex justify-content-end">
                  <Button
                    style={{ maxWidth: "fit-content" }}
                    className="d-flex justify-content-center align-items-center p-2"
                    size="md"
                    variant="warning"
                    onClick={() => {
                      handleTrash(i);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Network;
