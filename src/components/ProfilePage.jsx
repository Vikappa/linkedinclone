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
import Feed from "./Feed";
import Analisi from './Analisi'


function ProfilePage() {

  const { userId } = useParams();

  const [currentUserId, setCurrentUserId] = useState(userId);
  
  useEffect(() => {
    setCurrentUserId(userId);
  }, [userId]);

  return (
    <>
      <Container>
        <Row>
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
            <CardSideBar/>
            {/* <Analisi /> */}
            <Feed/>
          </Col>
          <Col xs={0} lg={3}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
