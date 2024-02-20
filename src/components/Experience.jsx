import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { differenceInMonths } from "date-fns";
import CreateExperience from "./CreateExperience";
import DeleteExperience from "./DeleteExperience";
import { FaTrashAlt } from "react-icons/fa";

const Experience = () => {
  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return date.toISOString().split("T")[0];
  // };
  // const calculateExperience = (startDate, endDate) => {
  //   const months = differenceInMonths(new Date(endDate), new Date(startDate));
  //   const years = Math.floor(months / 12);
  //   const remainingMonths = months % 12;
  //   return `${years} anni ${remainingMonths} mesi`;
  // };

  // const [experience, setExperience] = useState([]);
  // const myUrlFetchProfile =
  //   "https://striveschool-api.herokuapp.com/api/profile/65d322a824f605001937d478/experiences";
  // const bearerToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjJhODI0ZjYwNTAwMTkzN2Q0NzgiLCJpYXQiOjE3MDgzMzU3ODQsImV4cCI6MTcwOTU0NTM4NH0.pioeDwZO2GA-_tAisq4KElbrIk9InfeCBaG2-L3oQJA";

  // const fetchExperience = async () => {
  //   try {
  //     const res = await fetch(myUrlFetchProfile, {
  //       method: "GET",
  //       headers: {
  //         Authorization: "Bearer " + bearerToken,
  //         "Content-type": "application/json",
  //       },
  //     });

  //     if (!res.ok) {
  //       throw new Error("Errore");
  //     }

  //     const data = await res.json();
  //     setExperience(data);
  //     console.log("experience", data);
  //   } catch (error) {
  //     console.log("Errore", error);
  //   }
  // };

  useEffect(() => {
    // fetchExperience();
  }, []);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteExperienceId, setDeleteExperienceId] = useState(null);
  const handleDeleteClick = (experienceId) => {
    setDeleteExperienceId(experienceId);
    setShowDeleteModal(true);
  };
  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const [showCreateExperience, setShowCreateExperience] = useState(false);
  const handleAddExperienceClick = () => {
    setShowCreateExperience(!showCreateExperience);
  };

  const handleCreateExperienceClose = () => {
    setShowCreateExperience(false);
  };
  return (
    <div className="border rounded p-2 mt-5">
      <h4 className="text-start">Esperienza</h4>{" "}
      {showCreateExperience && (
        <CreateExperience
          onClose={handleCreateExperienceClose}
          fetchExperience={fetchExperience}
        />
      )}
      <Button
        style={{ width: "150px", height: "50px" }}
        onClick={handleAddExperienceClick}
        className="mb-3"
      >
        {" "}
        {showCreateExperience ? "Hide" : "ADD EXPERIENCE"}
      </Button>
      {experience.map((exp) => (
        <Col
          className="d-flex  mb-2 text-start position-relative"
          key={exp._id}
        >
          <img
            src={exp.image}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
            className="border rounded-circle me-2"
          />
          <Col className="d-flex flex-column border-bottom">
            {exp.role}
            <Col> {exp.company} </Col>
            <Col className="text-muted">
              {`${formatDate(exp.startDate)} - ${formatDate(
                exp.endDate
              )} ${calculateExperience(exp.startDate, exp.endDate)}`}
              <Col>{exp.area}</Col>
            </Col>
            <Col className="mb-2"> {exp.description} </Col>
            <Button
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
              variant="danger"
              onClick={() => handleDeleteClick(exp._id)}
            >
              <FaTrashAlt />
            </Button>

            {showDeleteModal && deleteExperienceId === exp._id && (
              <DeleteExperience
                experienceId={deleteExperienceId}
                onClose={handleDeleteModalClose}
                fetchExperience={fetchExperience}
              />
            )}
          </Col>
        </Col>
      ))}
    </div>
  );
};

export default Experience;
