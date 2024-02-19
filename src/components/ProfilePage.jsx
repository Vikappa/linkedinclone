import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";

function ProfilePage() {
  return (
    <>
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col>
            <Footer></Footer>
          </Col>
          {/* sidebar */}
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
