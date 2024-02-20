import { Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import LinkedInNavBar from "./LinkedInNavBar"
import Analisi from "./Analisi"
import Footer from "./Footer"
import './style.css'
import Risorse from "./Risorse"
import Experience from "./Experience";
import SideBar from "./SideBar";

function ProfilePage() {
  return (
    <>
      <LinkedInNavBar />
      <Container>
        <Row>
          {/* lato sinistro */}

          <Col xs={12} lg={9} className="py-3">
            <Experience />
            <Analisi /> 
            <Risorse/>
          </Col>
          {/* sidebar */}
          <Col xs={0} lg={3}>
            <SideBar />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default ProfilePage;
