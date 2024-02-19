import { Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import LinkedInNavBar from "./LinkedInNavBar"
import Analisi from "./Analisi"
import Footer from "./Footer"
import './style.css'

function ProfilePage() {
  return (
    <>
      <LinkedInNavBar />
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col xs={12} lg={9}>

            {/* <Analisi /> */}
            <Footer/>
          </Col >
          {/* sidebar */}
          <Col xs={0} lg={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default ProfilePage
