import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { trashThis } from "../Redux/Actions/ADD_TO_NETWORK";
import sadCat from "../assets/5ee772d099588c0004aa684b.png";
import { Link } from "react-router-dom";
//CIAO SONO VINCENZO TOCCO IL TUO CODICE SENZA PERMESSO
const Network = () => {
  const networking = useSelector((state) => state.networking.users);
  const dispatch = useDispatch();
  const handleTrash = (i) => {
    dispatch(trashThis(i));
  };

  return (
    <Container fluid>
      <Row className="justify-content-center my-5 gy-2">
        {networking.length > 0 ? (
          networking.map((user, i) => (
            <Col xs={12} md={3} key={i}>
              <Card className="my-2 h-100">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-photo/vibrant-colors-blend-abstract-backdrop-pattern-generated-by-ai_188544-9565.jpg"
                  style={{ height: "150px" }}
                />
                <Card.Body className="position-relative text-center d-flex flex-column flex-grow-1 h-100 card-body">
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
                    <Link to={`/profile/${user._id}`}>
                      <h4>
                        {user.name} {user.surname}
                      </h4>
                    </Link>
                  </Card.Title>
                  <Card.Text className="fw-light text-secondary">
                    <span className="d-block">{user.title}</span>
                    <span className="d-block">{user.email}</span>
                  </Card.Text>
                  <div className="d-flex flex-column flex-grow-1 justify-content-end align-items-end">
                    {/* <Button
                    style={{ maxWidth: "fit-content" }}
                    className="d-flex justify-content-center align-items-center p-2"
                    size="md"
                    variant="warning"
                    onClick={() => {
                      handleTrash(i)
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p>Non hai amici</p>
            <img src={sadCat} alt="Non hai amici :C" />
          </div>
        )}
      </Row>
    </Container>
  );
};
export default Network;
