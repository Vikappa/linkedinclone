/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const SearchJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [clickedJob, setClickedJob] = useState(null);
  const [textInput, setTextInput] = useState([]);

  //   const params = useParams();

  const baseEndpoint = `https://strive-benchmark.herokuapp.com/api/jobs?search=${textInput}`;

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const jobs = await response.json();
        console.log(response);
        setJobs(jobs);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }

    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
};
export default SearchJobsPage;
