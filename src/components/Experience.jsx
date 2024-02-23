/* eslint-disable react-hooks/exhaustive-deps */
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
import { useParams } from "react-router-dom";

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
  const { userId } = useParams()
  const [focusedUserExperiences, setFocusedUserExperiences] = useState([])

  const fetchExperiencesFocusedUser = async () => {
    try {
      const fetchedExperiences = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!fetchedExperiences.ok) {
        throw new Error("Errore nella fetch delle esperienze")
      }

      const experiencesFocus = await fetchedExperiences.json()
      setFocusedUserExperiences(experiencesFocus)
    } catch (error) {
      console.log("Non sono riuscito a gettare le esperienze di focused user")
    }
  };

  useEffect(() => {
    if(userId){
      fetchExperiencesFocusedUser()
    }
  }, [userId])
  

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentUser(currentUserStore);
  }, [currentUserStore]);

  const storeEsperienze = useSelector((state) => state.experience.experiences);
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
    setExperienceToEdit(experience)
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
          {
            userId ? "" : <button
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              border: "none", 
              backgroundColor: "transparent", 
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "#f0f0f0"; 
              e.currentTarget.style.transform = "scale(1.05)"; 
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "transparent"; 
              e.currentTarget.style.transform = ""
            }}
            onClick={handleAddEsperienza}
            aria-label="Aggiungi Esperienza" 
          >
            <i className="bi bi-plus-circle" style={{ fontSize: "2rem", color: "#4B5563" }}></i> 
          </button>
          
          }
        </div>
        {
          userId ? 
          
          focusedUserExperiences.map((esperienza, index) => (
            <div key={index} className="d-flex align-items-center ">
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
              {showDeleteModal && deleteExperienceId === esperienza._id && (
                <DeleteExperience
                  experienceId={deleteExperienceId}
                  onClose={handleDeleteModalClose}
                />
              )}
            </div>
          ))
          
          : 
          
          storeEsperienze.map((esperienza, index) => (
            <div key={index} className="d-flex align-items-center ">
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
  style={{
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px", 
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
    transition: "all 0.3s ease", 
  }}
  variant="light"
  onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = "#f0f0f0"; 
    e.currentTarget.style.transform = "scale(1.05)"; 
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = ""; 
    e.currentTarget.style.transform = ""; 
  }}
  onClick={() => handleEditClick(esperienza)}
  className="d-flex align-items-center me-1"
>
                <FaPen />
              </Button>
              <Button
  style={{
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  }}
  variant="danger"
  onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = "#dc3545"; 
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = ""
    e.currentTarget.style.transform = ""
  }}
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
