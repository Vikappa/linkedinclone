import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiBookmarkFill } from "react-icons/ri";

const SidebarJobs = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Card>
            <Card.Body>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
            <div>
              <span>
                <RiBookmarkFill />
              </span>
              <span>Le mie offerte di lavoro</span>
            </div>
            <div>
              <span>
                <RiBookmarkFill />
              </span>
              <span>Le mie offerte di lavoro</span>
            </div>
            <div>
              <span>
                <RiBookmarkFill />
              </span>
              <span>Le mie offerte di lavoro</span>
            </div>
            <div>
              <span>
                <RiBookmarkFill />
              </span>
              <span>Le mie offerte di lavoro</span>
            </div>
            <div>
              <span>
                <RiBookmarkFill />
              </span>
              <span>Le mie offerte di lavoro</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SidebarJobs;
