/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import SidebarJobs from "./SidebarJobs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";

const SearchJobsPage = () => {
  const [choosenJob, setChoosenJob] = useState(null);
  const [textInput, setTextInput] = useState(null);
  const jobs = useSelector((state) => state.jobs.allTheJobs);
  const jobsLoading = useSelector((state) => state.jobs.isLoading);

  const myUrl = `https://strive-benchmark.herokuapp.com/api/jobs?search=${textInput}`;

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const jobs = await response.json();
        console.log(response);
        setTextInput(jobs);
      } else {
        alert("Errore nella ricezione dei dati");
      }
    } catch (error) {
      console.log(error);
    }

    return (
      <>
        <SidebarJobs />
        <Container>
          <Row>
            <Col md={6}>
              {jobsLoading ? (
                <div className="text-center mt-4 pt-4">
                  <Spinner animation="border" variant="black" />
                </div>
              ) : jobs ? (
                jobs.slice(0, 50).map((job) => {
                  return (
                    <div
                      className="list-group"
                      key={job._id}
                      onClick={() => setChoosenJob(job)}
                    >
                      <div
                        className="list-group-item list-group-item-action pointer"
                        aria-current="true"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">{job.title}</h5>
                          <p>{job.publication_date.slice(0, 10)}</p>
                        </div>
                        <p className="mb-1">{job.company_name}</p>
                        <p>{job.candidate_required_location}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                "No jobs left!"
              )}
            </Col>
            <Col md={6}>
              {choosenJob !== null ? (
                <Card className="sticky-top">
                  <Card.Body>
                    <Card.Title>{choosenJob.title}</Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-secondary"
                      style={{ fontSize: "small" }}
                    >
                      {choosenJob.company_name}
                      <i className="bi bi-dot"></i>
                      {choosenJob.candidate_required_location}
                      <i className="bi bi-dot"></i>
                      {choosenJob.publication_date.slice(0, 10)}
                    </Card.Subtitle>
                    <Card.Text>
                      <BsBriefcaseFill />{" "}
                      <span
                        className="ms-2"
                        style={{
                          fontSize: "smaller",
                          backgroundColor: "#daebd1",
                        }}
                      >
                        {choosenJob.job_type}
                      </span>
                      <div>
                        <BsPeopleFill />{" "}
                        <span className="ms-2" style={{ fontSize: "smaller" }}>
                          lorem ipsum lorem ipsum
                        </span>
                      </div>
                      <div>
                        <BsFillLightbulbFill />{" "}
                        <span className="ms-2" style={{ fontSize: "smaller" }}>
                          lorem ipsus lorem ipsum lorem ipsum
                        </span>
                      </div>
                      <Button variant="primary" className="rounded-pill">
                        Candidati
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="ms-2 rounded-pill"
                      >
                        Salva
                      </Button>
                    </Card.Text>
                    <Card.Link href={choosenJob.url}>Scopri di più</Card.Link>
                    <Card.Title className="mt-3">Maggiori info</Card.Title>
                    {/* <div
                      
                        {choosenJob.description}
                  
                    </div> */}
                  </Card.Body>
                </Card>
              ) : (
                "Scegli un lavoro"
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  };
};
export default SearchJobsPage;
