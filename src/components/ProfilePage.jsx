import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedInNavBar from "./LinkedInNavBar";
import Analisi from "./Analisi";
import Footer from "./Footer";
import Consigliato from "./Consigliato";

function ProfilePage() {
  return (
    <>
      <LinkedInNavBar />
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col xs={12} lg={9}>
            <Analisi />
            <Consigliato />
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
