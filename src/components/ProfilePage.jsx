import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";

function ProfilePage() {
  return (
    <>
      <Container fluid>
        <Row>
          {/* lato sinistro */}
          <Col xs={12} md={9}></Col>
          {/* sidebar */}
          <Col md={3}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
