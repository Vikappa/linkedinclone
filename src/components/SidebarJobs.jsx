import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { RiBookmarkFill } from "react-icons/ri";
import { FaListUl } from "react-icons/fa";
import { LiaClipboardCheckSolid } from "react-icons/lia";

import { RiVideoFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
// import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const SidebarJobs = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Card className="mt-2 ">
            <Card.Body>
              <div className="lista d-flex justify-content-between align-items-center">
                <ul className="p-1 list-unstyled">
                  <div className="d-flex justify-content-between align-items-center px-2">
                    <li className="d-flex justify-content-start">
                      <RiBookmarkFill className="fs-4" />

                      <span className="ms-2 ">Le mie offerte di lavoro</span>
                    </li>
                    <div className="d-md-none">
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="d-flex bg-white fw-semibold border-0 text-secondary  align-items-center"
                          style={{ maxWidth: "fit-content" }}
                        >
                          Altro
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-2">
                            <FaListUl className="fs-5 me-3" />
                            <span className="fw-semibold">Preferenze</span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <LiaClipboardCheckSolid className="fs-5 me-2" />
                            <span className="fw-semibold">
                              Valutazioni per le competenze
                            </span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <RiVideoFill className="fs-5 me-2" />
                            <span className="fw-semibold">
                              Indicazioni per chi cerca lavoro
                            </span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <IoSettingsSharp className="fs-5 me-2" />
                            <span className="fw-semibold">
                              Impostazioni candidatura
                            </span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="d-none d-md-block  ">
                    <li className="d-flex justify-content-start align-items-center">
                      <FaListUl className="fs-4" />
                      <span className="ms-2">Preferenze</span>
                    </li>

                    <li className="d-flex justify-content-start align-items-center">
                      <LiaClipboardCheckSolid className="fs-4" />
                      <span className="ms-2">Valutazioni delle competenze</span>
                    </li>

                    <li className="d-flex justify-content-start align-items-center">
                      <RiVideoFill className="fs-4" />
                      <span className="ms-2">
                        Indicazioni per chi cerca lavoro
                      </span>
                    </li>

                    <li className="d-flex justify-content-start align-items-center">
                      <IoSettingsSharp className="fs-4" />
                      <span className="ms-2">Impostazioni candidatura</span>
                    </li>
                  </div>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
export default SidebarJobs;
