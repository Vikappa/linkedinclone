import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const NotFound404 = () => {
  return (
    <aside className="container mt-2 mb-4">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={8} className="text-center ">
          <h1 className="fw-bold text-primary"> Hi Beauty!</h1>
          <span className="fw-semibold text-secondary d-block fs-5 mb-3">
            404 Not Found
          </span>
          <Image
            fluid
            src="https://placebear.com/g/400/500"
            className="rounded-1"
          ></Image>
        </Col>
      </Row>
    </aside>
  );
};
export default NotFound404;
