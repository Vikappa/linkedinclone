import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiBookmarkFill } from "react-icons/ri";
import { FaListUl } from "react-icons/fa";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { RiFileVideoFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";

const SidebarJobs = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body></Card.Body>
            <div>
              <span>
                <RiBookmarkFill />
              </span>
              <span>Le mie offerte di lavoro</span>
            </div>
            <div>
              <span>
                <FaListUl />
              </span>
              <span>Preferenze</span>
            </div>
            <div>
              <span>
                <LiaClipboardCheckSolid />
              </span>
              <span>Valutazioni delle competenze</span>
            </div>
            <div>
              <span>
                <RiFileVideoFill />
              </span>
              <span>Indicazioni per chi cerca lavoro</span>
            </div>
            <div>
              <span>
                <IoSettingsSharp />
              </span>
              <span>Impostazioni candidatura</span>
            </div>
            <Button></Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SidebarJobs;
