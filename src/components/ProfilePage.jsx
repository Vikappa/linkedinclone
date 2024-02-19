import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";

function ProfilePage() {
  return (
    <>
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col xs={6}></Col>
          {/* sidebar */}
          <Col xs={4}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
