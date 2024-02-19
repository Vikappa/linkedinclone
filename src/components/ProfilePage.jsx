import { Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import Analisi from "./Analisi"
function ProfilePage(){

    return (
        <>
        <Container>
            <Row>
                {/* lato sinistro */}
            <Col xs={9}> <Analisi/></Col>
            {/* sidebar */}
            <Col></Col>
            </Row>
        </Container>
        </>
    )
}

export default ProfilePage