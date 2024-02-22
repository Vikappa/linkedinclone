/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
  Modal,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SidebarJobs from "./SidebarJobs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FINISH_LOADING_JOBS } from "../Redux/Reducers/JobsReducer";
import Anchor from "react-bootstrap/Anchor";

const SearchJobsPage = () => {
  const [choosenJob, setChoosenJob] = useState(null);
  const [textInput, setTextInput] = useState("");
  const jobs = useSelector((state) => state.jobs.allTheJobs);
  const jobsLoading = useSelector((state) => state.jobs.isLoading);
  const wholeStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const values = [true, "lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const myUrl = `https://strive-benchmark.herokuapp.com/api/jobs?search=${textInput}`;

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const fetchResults = await response.json();
        console.log(fetchResults.data);
        dispatch({
          type: FINISH_LOADING_JOBS,
          payload: fetchResults.data,
        });
      } else {
        alert("Errore nella ricezione dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <>
    <Container fluid>
      <Row>
        <Col xs={12} md={3}>
          <SidebarJobs />
        </Col>
        <Col md={6}>
          {jobsLoading ? (
            <div className="text-center mt-4 pt-4 d-flex align-items-center justify-content-center">
              <Spinner animation="border" variant="black" />
            </div>
          ) : jobs ? (
            jobs.slice(0, 50).map((job) => {
              return (
                <div className="list-group" key={job._id}>
                  <div
                    className="list-group-item list-group-item-action "
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5
                        className="mb-1"
                        onClick={() => {
                          setChoosenJob(job);
                          handleShow();
                        }}
                        style={{ cursor: "pointer", color: "#0b65c2" }}
                      >
                        {job.title}
                      </h5>
                      <p>{job.publication_date.slice(0, 10)}</p>
                    </div>
                    <p className="mb-1 text-black">{job.company_name} </p>
                    <p>{job.candidate_required_location}</p>
                  </div>
                </div>
              );
            })
          ) : (
            "No jobs left!"
          )}
        </Col>
        {choosenJob !== null ? (
          <>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>{choosenJob.title}</Modal.Title>
              </Modal.Header>
              <Card>
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
                        Informazioni sull&apos;offerta di lavoro
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
                  <Card.Link href={choosenJob.url}>
                    Vai alla pagina dell&apos;offerta
                  </Card.Link>
                  <Card.Title className="mt-3">
                    Informazioni sull&apos;offerta di lavoro
                  </Card.Title>

                  {choosenJob.description}
                </Card.Body>
              </Card>
              <Modal.Footer>
                <Button variant="primary">
                  <Anchor href={choosenJob.url}> Visualizza offerta</Anchor>
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          ""
        )}
      </Row>
    </Container>
    // </>
  );
};

export default SearchJobsPage;
