/* eslint-disable react/prop-types */
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
import { Form } from "react-bootstrap";

const SearchJobsPage = () => {
  const [choosenJob, setChoosenJob] = useState(null);
  const [textInput, setTextInput] = useState("");
  const jobs = useSelector((state) => state.jobs.allTheJobs);
  const jobsLoading = useSelector((state) => state.jobs.isLoading);
  const dispatch = useDispatch();
  const values = [true, "lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function HtmlInterpreter({ htmlContent }) {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }

  const handleRicerca = function (e) {
    e.preventDefault();
    getJobs();
  };

  const handleChangeCampoRicerca = function (e) {
    setTextInput(e.target.value);
  };

  const myUrl = `https://strive-benchmark.herokuapp.com/api/jobs?search=${textInput}`;

  const getJobs = async () => {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const fetchResults = await response.json();
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
    <Container fluid>
      <Row>
        <Col xs={12} md={3}>
          <SidebarJobs />
        </Col>
        <Col md={6}>
          <Row>
            <Form onSubmit={handleRicerca} className="bg-white m-3">
              <Form.Group
                className="mb-3"
                controlId="campoRicerca d-flex align-items-center justify-content-center"
              >
                <Form.Label className="fw-semibold fs-5">Cerca</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ricerca"
                  value={textInput}
                  onChange={handleChangeCampoRicerca}
                />
                <Button
                  type="submit"
                  style={{ width: "30%" }}
                  className="d-flex align-items-center justify-content-center p-0 m-1"
                >
                  Cerca
                </Button>
              </Form.Group>
            </Form>
          </Row>

          {jobsLoading ? (
            <div className="text-center mt-4 pt-4 d-flex align-items-center justify-content-center">
              <Spinner animation="border" variant="black" />
            </div>
          ) : jobs ? (
            jobs.slice(0, 50).map((job) => {
              return (
                <div
                  className="list-group my-2"
                  style={{ border: "1px solid lightgrey" }}
                  key={job._id}
                >
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
                    <BsBriefcaseFill />
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
                      <BsPeopleFill />
                      <span className="ms-2" style={{ fontSize: "smaller" }}>
                        2 persone che conosci lavorano qui
                      </span>
                    </div>
                    <div>
                      <BsFillLightbulbFill />
                      <span className="ms-2" style={{ fontSize: "smaller" }}>
                        Vedi come ti posizioni rispetto a 38 candidati.
                      </span>
                    </div>
                    {/* <Row> */}
                    {/* <div className=" mt-2 "> */}
                    <Row>
                      <Col xs={6}>
                        <Row>
                          <Col xs={12} sm={2}>
                            <Button
                              variant="primary"
                              style={{ maxWidth: "fit-content" }}
                              className="rounded-pill d-flex justify-content-center align-items-center my-2 "
                            >
                              Candidati
                            </Button>
                          </Col>
                          <Col xs={12} sm={2}>
                            <Button
                              variant="primary"
                              style={{
                                color: "#0c6dfd",
                                maxWidth: "fit-content",
                              }}
                              className="rounded-pill d-flex bg-white fw-semibold justify-content-center align-items-center my-2"
                              onClick={() => {
                                alert("Hai salvato l'offerta di lavoro."),
                                  setButtonText(!buttonText);
                              }}
                            >
                              {buttonText ? "Salva" : "Salvato"}
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* </div> */}
                    {/* </Row> */}
                  </Card.Text>
                  <Card.Link href={choosenJob.url}>Scopri di più!</Card.Link>
                  <Card.Title className="mt-3">
                    Informazioni sull&apos;offerta di lavoro
                  </Card.Title>
                  <div id="htmlAnnounce">
                    <HtmlInterpreter htmlContent={choosenJob.description} />
                  </div>
                  <Modal.Footer className="d-flex align-items-center justify-content-center">
                    <Button
                      variant="primary"
                      style={{ width: "15rem" }}
                      className="rounded-pill mt-3"
                    >
                      <Anchor href={choosenJob.url}>
                        <p className="text-white text-center ">
                          Vai alla pagina dell&apos;offerta
                        </p>
                      </Anchor>
                    </Button>
                  </Modal.Footer>
                </Card.Body>
              </Card>
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
