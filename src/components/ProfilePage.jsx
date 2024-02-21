import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
// import Analisi from "./Analisi";
import "./style.css";
import Experience from "./Experience";
import SideBar from "./SideBar";
import ProfileCards from "./ProfileHero";
import Consigliato from "./Consigliato";

function ProfilePage() {
  return (
    <>
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col xs={0} lg={2}></Col>
          <Col xs={12} lg={7} className="py-3">
            <ProfileCards />
            <Experience />
            <Consigliato />
            {/* <Analisi /> */}
          </Col>
          {/* sidebar */}
          <Col xs={0} lg={3}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
