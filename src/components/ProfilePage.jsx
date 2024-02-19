import { Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import LinkedInNavBar from "./LinkedInNavBar"
import Analisi from "./Analisi"
import { Footer } from "react-bootstrap/lib/Modal"
function ProfilePage(){

    return (
        <>
        <LinkedInNavBar />
        <Container>
            <Row>
                {/* lato sinistro */}
            <Col xs={9}> <Analisi/></Col>
            <Footer/>
            {/* sidebar */}
            <Col></Col>
            </Row>
        </Container>
        </>
    )
}

export default ProfilePage;
