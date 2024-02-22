import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
// import Analisi from "./Analisi";
import "./style.css";
import Experience from "./Experience";
import SideBar from "./SideBar";
import ProfileCardsInspectedUser from "./ProfileCardsInspectedUser";
import ProfileCards from './ProfileHero'
import CardSideBar from "./StaticSideBar";
import Consigliato from "./Consigliato";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ProfilePage() {

  const { userId } = useParams();

  // Inizializzo lo state con il valore di userId ottenuto
  const [currentUserId, setCurrentUserId] = useState(userId);

  // Opzionalmente, puoi utilizzare useEffect per aggiornare lo state
  // se il componente rimane montato e l'URL cambia
  useEffect(() => {
    setCurrentUserId(userId);
  }, [userId]);

  return (
    <>
      <Container>
        <Row>
          {/* lato sinistro */}
          <Col xs={0} lg={2}></Col>
          <Col xs={12} lg={7} className="py-3">
          {!currentUserId?
            <ProfileCards />:""
            }
            <ProfileCardsInspectedUser inspectedUserId={userId} />
            <Experience />
            {!currentUserId?
            <Consigliato />:""
            }
            {/* <Analisi /> */}
          </Col>
          {/* sidebar */}
          <Col xs={0} lg={3}>
            <CardSideBar/>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
