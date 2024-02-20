import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Experience from "./Experience";

function ProfilePage() {
  return (
    <>
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col md={9}>
            <Experience />
          </Col>
          {/* sidebar */}

          <Col md={3}>SIDE</Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
