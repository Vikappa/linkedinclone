import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ProfilePage />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
