import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import LinkedInNavBar from "./LinkedInNavBar";
import Analisi from "./Analisi";
import Footer from "./Footer";

function ProfilePage() {
  return (
    <>
      <LinkedInNavBar />
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col xs={12} lg={9}>
            <Analisi />
          </Col>
          {/* sidebar */}
          <Col></Col>
        </Row>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default ProfilePage;
