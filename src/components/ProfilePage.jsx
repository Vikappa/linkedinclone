import { Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import LinkedInNavBar from "./LinkedInNavBar"
import Analisi from "./Analisi"
import { Footer } from "react-bootstrap/lib/Modal"

function ProfilePage() {
  return (
    <>
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col>
            <Footer></Footer>
            <Analisi/>
          </Col>
          {/* sidebar */}
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
