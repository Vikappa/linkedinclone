// import { useState, useEffect } from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";

// const SearchJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [clickedJob, setClickedJob] = useState(null);
//   const [textInput, setTextInput] = useState([]);

//   //   const params = useParams();

//   const baseEndpoint = `https://strive-benchmark.herokuapp.com/api/jobs?search=${textInput}`;

//   useEffect(() => {
//     getJobs();
//   }, []);

//   const getJobs = async () => {
//     try {
//       const response = await fetch(baseEndpoint);
//       if (response.ok) {
//         const jobs = await response.json();
//         console.log(response);
//         setJobs(jobs);
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     return (
//       <Container>
//         <Row>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src="holder.js/100px180" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the cards content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   };
// };
// export default SearchJobsPage;

import { useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const SearchJobsPage = () => {
  const [choosenJob, setChoosenJob] = useState(null);
  const [textInput,setTextInput]=useState
  const jobs = useSelector((state) => state.jobs.list);
  const jobsLoading = useSelector((state) => state.jobs.isLoading);

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
    <Container className="mt-5">
      <Row>
        <Col className="col-6">
          {jobsLoading ? (
            <div className="text-center mt-5 pt-5">
              <Spinner animation="border" />
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
                      <small>{job.publication_date.slice(0, 10)}</small>
                    </div>
                    <p className="mb-1">{job.company_name}</p>
                    <small>{job.candidate_required_location}</small>
                  </div>
                </div>
              );
            })
          ) : (
            "Nessun lavoro :("
          )}
        </Col>
        <Col className="col-6">
          {choosenJob !== null ? (
            <Card className="sticky-top top-choosenJob">
              <Card.Body>
                <Card.Title>{choosenJob.title}</Card.Title>
                <Card.Subtitle
                  className="mb-2 text-secondary"
                  style={{ fontSize: "smaller" }}
                >
                  {choosenJob.company_name}
                  <i className="bi bi-dot"></i>
                  {choosenJob.candidate_required_location}
                  <i className="bi bi-dot"></i>
                  {choosenJob.publication_date.slice(0, 10)}
                </Card.Subtitle>
                <Card.Text>
                  <i className="bi bi-briefcase-fill text-secondary"></i>
                  <span
                    className="ms-2"
                    style={{ fontSize: "smaller", backgroundColor: "#daebd1" }}
                  >
                    {choosenJob.job_type}
                  </span>
                  <div>
                    <i className="bi bi-people-fill text-secondary"></i>
                    <span className="ms-2" style={{ fontSize: "smaller" }}>
                      Alcuni tuoi collegamenti lavorano qui
                    </span>
                  </div>
                  <div>
                    <i
                      className="bi bi-lightbulb text-secondary"
                      style={{ fontSize: "smaller" }}
                    ></i>
                    <span className="ms-2" style={{ fontSize: "smaller" }}>
                      Vedi come ti posizioni rispetto a 6 candidati. Prova
                      Premium per 0 EUR
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
                <div
                  dangerouslySetInnerHTML={{ __html: choosenJob.description }}
                ></div>
              </Card.Body>
            </Card>
          ) : (
            "Seleziona un lavoro"
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJobsPage
