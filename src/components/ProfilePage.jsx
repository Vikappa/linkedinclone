import { Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import LinkedInNavBar from "./LinkedInNavBar"
import Analisi from "./Analisi"
import Risorse from "./Risorse"
function ProfilePage(){

    return (
        <>
        <LinkedInNavBar />
        <Container>
            <Row>
                {/* lato sinistro */}
            <Col xs={9}> <Analisi/> <Risorse/> </Col>
            {/* sidebar */}
            <Col></Col>
            </Row>
        </Container>
        </>
    )
}

export default ProfilePage