import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModaleAggiungiEsperienza from "./ModaleAggiungiEsperienza";
import { useDispatch } from "react-redux";
import { FETCH_CURRENT_USER_EXPERIENCES } from "../Redux/Actions/ADD_EXPERIENCE";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import DeleteExperience from "./DeleteExperience";
import { FaPen } from "react-icons/fa";
import PutExperience from "./PutExperience";
import { useLocation } from "react-router-dom";

function formatISODate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

const Experience = () => {
  let currentUserStore = useSelector((state) => state.currentUser.currentUser);
  const [currentUser, setCurrentUser] = useState(currentUserStore)
  const [path, setPath] = useState(window.location.pathname)
  const location = useLocation()

  useEffect(() => {
    console.log(path)
  }, [location.pathname])

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentUser(currentUserStore);
  }, [currentUserStore]);

  const storeEsperienze = useSelector((state) => state.experience.experiences);
  console.log("store esperienza id", storeEsperienze._id);
  const [visibilitàModaleAddEsperienza, setVisibilitàModaleAddEsperienza] =
    useState(false);

  const handleAddEsperienza = (e) => {
    e.preventDefault();
    console.log("show");
    setVisibilitàModaleAddEsperienza(true);
  };

  const handleChiudiAddEsperienza = () => {
    const fetchExperiencesCurrentUser = async () => {
      try {
        const fetchedExperiences = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        );

        if (!fetchedExperiences.ok) {
          throw new Error("Errore nella fetch delle esperienze");
        }

        const experiencesData = await fetchedExperiences.json();

        // Dispatch dell'azione Redux
        await dispatch({
          type: FETCH_CURRENT_USER_EXPERIENCES,
          payload: experiencesData,
        });
      } catch (error) {
        console.log("Errore", error);
      }
    };
    fetchExperiencesCurrentUser();

    setVisibilitàModaleAddEsperienza(false);
    setVisibilitàModaleEditEsperienza(false);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteExperienceId, setDeleteExperienceId] = useState(null);

  const handleDeleteClick = (experienceId) => {
    setDeleteExperienceId(experienceId);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const [experienceToEdit, setExperienceToEdit] = useState(null);
  const [visibilitàModaleEditEsperienza, setVisibilitàModaleEditEsperienza] =
    useState(false)
  const handleEditClick = (experience) => {
    // setEditExperience(experience)
    setExperienceToEdit(experience);
    console.log("sperienza id", experience._id);
    setVisibilitàModaleEditEsperienza(true);
  };

  return (
    <>
      <div
        style={{ border: "1px solid #D2D2D2" }}
        className="container border-1 rounded-3 d-flex flex-column bg-white my-2 p-3"
      >
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="p-1">Esperienza</h5>
          <i
            className="bi bi-plus-circle"
            style={{ fontSize: "2rem" }}
            onClick={handleAddEsperienza}
          ></i>
        </div>
        {storeEsperienze.map((esperienza, index) => (
          <div key={index} className="d-flex align-items-center border-bottom ">
            <div className="d-flex justify-content-start align-items-center jobLine p-2">
              {esperienza.image ? (
                <img
                  src={esperienza.image}
                  alt="image"
                  className="border rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
              ) : (
                <img
                  src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                  alt="image"
                  className="border rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
              )}
              <div className="d-flex flex-column align-items-start">
                <p className="m-0">{esperienza.role}</p>
                <p
                  className="m-0"
                  style={{ fontSize: "0.75rem", color: "grey" }}
                >
                  {esperienza.company}
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: "0.6rem", color: "grey" }}
                >
                  {esperienza.description} - {esperienza.area}
                </p>
                {esperienza.endDate ? (
                  <p
                    className="m-0"
                    style={{ fontSize: "0.6rem", color: "grey" }}
                  >
                    {formatISODate(esperienza.startDate)} -{" "}
                    {formatISODate(esperienza.endDate)}
                  </p>
                ) : (
                  <p
                    className="m-0"
                    style={{ fontSize: "0.6rem", color: "grey" }}
                  >
                    {formatISODate(esperienza.startDate)} - attualmente assunto
                  </p>
                )}
              </div>
            </div>
            <Button
              style={{ width: "40px", height: "40px" }}
              variant="light"
              onClick={() => handleEditClick(esperienza)}
              className="d-flex align-items-center me-1"
            >
              <FaPen />
            </Button>
            <Button
              style={{ width: "40px", height: "40px" }}
              variant="danger"
              onClick={() => handleDeleteClick(esperienza._id)}
              className="d-flex align-items-center"
            >
              <FaTrashAlt />
            </Button>
            {showDeleteModal && deleteExperienceId === esperienza._id && (
              <DeleteExperience
                experienceId={deleteExperienceId}
                onClose={handleDeleteModalClose}
              />
            )}
          </div>
        ))
        }
      </div>
      <ModaleAggiungiEsperienza
        visibilitàModaleAddEsperienza={visibilitàModaleAddEsperienza}
        setVisibilitàModaleAddEsperienza={setVisibilitàModaleAddEsperienza}
        onClose={handleChiudiAddEsperienza}
      />
      <PutExperience
        visibilitàModaleEditEsperienza={visibilitàModaleEditEsperienza}
        setVisibilitàModaleEditEsperienza={setVisibilitàModaleEditEsperienza}
        experienceToEdit={experienceToEdit}
        onClose={handleChiudiAddEsperienza}
      />
    </>
  );
};

export default Experience;
