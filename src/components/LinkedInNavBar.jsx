/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import linkedInIcon from "../assets/iconSmall.png";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ModaleDestro from "./PezziDiNavBar/ModaleDestro";
import { useDispatch } from "react-redux";
import { DELETE_CURRENT_USER } from "../Redux/Actions/ADD_EXPERIENCE";

function LinkedInNavBar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserExperience, setCurrentUserExperience] = useState([]);
  let currentUserStore = useSelector((state) => state.currentUser.currentUser);

  const dispatch = useDispatch();

  const deleteUserFetch = () => {
    dispatch({
      type: DELETE_CURRENT_USER,
      payload: null,
    });
  };

  useEffect(() => {
    setCurrentUser(currentUserStore);
  }, [currentUserStore]);

  const [mostraModaleDestro, setMostraModaleDestro] = useState(false);

  const toggleModaleDestro = () => {
    setMostraModaleDestro(!mostraModaleDestro);
  };

  const ToggleDropDownTu = React.forwardRef(({ childrentu, onClick }, ref) => (
    <a
      className="d-flex flex-column align-items-center justify-content-center"
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {currentUser ? (
        <img
          src={currentUser.image}
          alt="profile pic mockup"
          className="rounded-circle"
          style={{ height: "24px", width: "24px" }}
        />
      ) : (
        <img
          src="https://placekitten.com/80/80"
          alt="profile pic mockup"
          className="rounded-circle"
          style={{ height: "24px", width: "24px" }}
        />
      )}
      <p className="d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP">
        Tu &#x25bc;
      </p>
    </a>
  ));

  const DropDownTu = React.forwardRef(
    ({ childrentu, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex align-items-center">
              {currentUser ? (
                <img
                  src={currentUser.image}
                  alt="profile pic mockup"
                  className="rounded-circle p-1"
                  style={{ width: "50px", height: "50px" }}
                />
              ) : (
                <img
                  src="https://placekitten.com/80/80"
                  alt="profile pic mockup"
                  className="rounded-circle p-1"
                  style={{ width: "50px", height: "50px" }}
                />
              )}
              <div className="d-flex flex-column justify-content-start">
                <Link to={`/profile/me`}>
                  <h6 className="titoliDropDownTu text-start m-0">
                    {currentUser
                      ? currentUser.name + " " + currentUser.surname
                      : "Error 404"}
                  </h6>
                </Link>
                {currentUser ? (
                  <Link to={`/profile/me`}>
                    <p className="testiDropDownTu">
                      Formazione dell&apos;utente
                    </p>
                  </Link>
                ) : (
                  <p className="testiDropDownTu">Errore 404</p>
                )}
              </div>
            </div>
            <div className="d-flex flex-column justify-content-start p-1">
              <h6 className="titoliDropDownTu text-start m-0">Account</h6>
              <p className="testiDropDownTu">Impostazioni e privacy</p>
              <p className="testiDropDownTu">Guida</p>
              <p className="testiDropDownTu">Lingua</p>
            </div>
            <div className="d-flex flex-column justify-content-start p-1">
              <h6 className="titoliDropDownTu text-start m-0">Gestisci</h6>
              <p className="testiDropDownTu">Post e attività</p>
            </div>
            <Link to={`/`}>
              <div className="d-flex flex-column justify-content-start p-1">
                <p className="testiDropDownTu" onClick={deleteUserFetch}>
                  Esci
                </p>
              </div>
            </Link>
          </div>
        </div>
      );
    }
  );

  DropDownTu.displayName = "DropDownTu";
  ToggleDropDownTu.displayName = "ToggleDropDownTu";

  return (
    <>
      <Navbar
        sticky="top"
        className="bg-body-tertiary justify-content-between container-fluid w-100 p-1"
      >
        {currentUser ? (
          <Link to={`/profile/`}>
            <img
              src={currentUser.image}
              alt="profile pic mockup"
              className="rounded-circle d-sm-none"
              id="profilePic"
            />
          </Link>
        ) : (
          <>
            <img
              src="https://http.cat/images/404.jpg"
              className="rounded-circle d-sm-none"
              id="profilePic"
            />
          </>
        )}
        <Container className="p-0 d-sm-none">
          <Form className="w-100 d-flex align-items-center">
            <BsSearch className="position-relative" id="searchIcon" />
            <Form.Control
              id="formControlNavBar"
              type="text"
              placeholder="     Cerca"
              className="mr-sm-2 container-fluid border-0 "
            />
          </Form>
        </Container>
        <Link>
          <i
            className="fa-solid fa-comment-dots d-sm-none"
            id="messageIcon"
          ></i>
        </Link>
        <Link to="/">
          <img
            src={linkedInIcon}
            alt="linkedin icon"
            height={"36px"}
            className="d-none d-sm-flex d-flex align-items-center mx-sm-3"
            id="linkedInIcon"
          />
        </Link>

        {currentUser ? (
          <Container className=" d-none d-sm-flex sectionOneNavbar">
            <div className="d-flex flex-column text-center">
              <i className="bi bi-search navBarDedicatedButton d-lg-none"> </i>
              <p className="d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP d-lg-none">
                Cerca
              </p>
              <Form className="w-100 d-flex align-items-center d-none d-lg-flex">
                <BsSearch className="position-relative" id="searchIcon" />
                <Form.Control
                  id="formControlNavBar"
                  type="text"
                  placeholder="     Cerca"
                  className="mr-sm-2 container-fluid border-0 "
                />
              </Form>
            </div>
            <Link to={`/home/`}>
              <div className="d-flex flex-column text-center topBarButton">
                <i className="bi bi-house-door-fill navBarDedicatedButton ">
                  {" "}
                </i>
                <p className="d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP">
                  Home
                </p>
              </div>
            </Link>
            <Link to={`/network`}>
              <div className="d-flex flex-column text-center topBarButton">
                <i className="bi bi-person-fill navBarDedicatedButton "> </i>
                <p className="d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP">
                  Rete
                </p>
              </div>
            </Link>
            <div className="d-flex flex-column text-center topBarButton">
              <i className="bi bi-briefcase-fill navBarDedicatedButton "> </i>
              <p className="d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP">
                Lavoro
              </p>
            </div>
            <div className="d-flex flex-column text-center topBarButton">
              <i className="bi bi-chat-dots-fill navBarDedicatedButton "> </i>
              <p className="d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP">
                Messaggistica
              </p>
            </div>
            <div className="d-flex flex-column text-center topBarButton">
              <i className="bi bi-bell-fill navBarDedicatedButton "> </i>
              <p className="d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP">
                Notifiche
              </p>
            </div>
            <Dropdown>
              <Dropdown.Toggle
                as={ToggleDropDownTu}
                id="dropdown-custom-components"
              ></Dropdown.Toggle>

              <Dropdown.Menu as={DropDownTu}></Dropdown.Menu>
            </Dropdown>
          </Container>
        ) : (
          <div style={{ width: "100%" }}></div>
        )}

        <Container className="container-fluid d-none d-sm-flex justify-content-start">
          <div
            onClick={toggleModaleDestro}
            className="d-flex flex-column text-center align-items-center justify-content-center"
          >
            <i className="bi bi-x-diamond-fill"></i>
            <p className="d-none d-md-inline p-0 m-0 navBarDedicatedButtonP2">
              Per le aziende ▼
            </p>
          </div>

          <div className="d-flex flex-column text-center goliardiaPortamiVia">
            <a className="text-nowrap">Prova Epicode e paga tra 2 anni!</a>
          </div>
        </Container>
      </Navbar>

      <Navbar
        fixed="bottom"
        className="bg-body-tertiary justify-content-between container-fluid w-100 d-sm-none p-0"
      >
        <Link className="navbar2Buttons">
          <i className="bi bi-house-door-fill"></i>
        </Link>
        <Link className="navbar2Buttons">
          <i className="bi bi-person-fill"></i>
        </Link>
        <Link className="navbar2Buttons">
          <i className="bi bi-plus-square-fill"></i>
        </Link>
        <Link className="navbar2Buttons">
          <i className="bi bi-bell-fill"></i>
        </Link>
        <Link className="navbar2Buttons">
          <i className="bi bi-briefcase-fill"></i>
        </Link>
      </Navbar>
      <ModaleDestro mostraModaleDestro={mostraModaleDestro} />
    </>
  );
}

export default LinkedInNavBar;
