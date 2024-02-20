import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoShieldHalf } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const Footer = () => {
  return (
    <Container
      fluid
      className="p-2 w-100"
      style={{ backgroundColor: "#f4f2ee" }}
    >
      <Row
        className="mt-2 fs-6 fw-bold "
        xs={12}
        md={6}
        lg={5}
        style={{ color: "#626160", cursor: "pointer" }}
      >
        <Col>
          <p id="info" className="myfooterp">
            Informazioni
          </p>
          <p id="lineeguida" className="myfooterp">
            Linee guida della community
          </p>
          <p id="privacy" className="myfooterp">
            Privacy e condizioni
            <span>
              <IoMdArrowDropdown />
            </span>
          </p>
          <p id="sales" className="myfooterp">
            Sales Solutions
          </p>
          <p id="security" className="myfooterp">
            Centro Sicurezza
          </p>
        </Col>
        <Col>
          <p id="access" className="myfooterp">
            Accessibilità
          </p>
          <p id="career" className="myfooterp">
            Carriera
          </p>
          <p id="options" className="myfooterp">
            Opzioni per gli annunci pubbicitari
          </p>
          <p id="mobile" className="myfooterp">
            Mobile
          </p>
        </Col>
        <Col>
          <p id="talent" className="myfooterp">
            Talent Solutions
          </p>
          <p id="marketing" className="myfooterp">
            Soluzioni di marketing
          </p>
          <p id="pub" className="myfooterp">
            Pubblicità
          </p>
          <p id="imprese" className="myfooterp">
            Piccole imprese
          </p>
          <p></p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="d-flex flex-column flex-lg-row ">
            <div className="d-flex flex-column" style={{ minWidth: "90%" }}>
              <div>
                <span>
                  <HiQuestionMarkCircle className="icon me-2" />
                </span>
                <span className="myfooter">Domande?</span>
                <p className="questions ">
                  Visita il nostro Centro assistenza.
                </p>
              </div>
              <div>
                <span>
                  <IoSettingsSharp className="icon me-2" />
                </span>
                <span className="myfooter">
                  Gestisci il tuo account e la tua privacy
                </span>
                <p className="questions">Vai alle impostazioni</p>
              </div>
              <div>
                <span>
                  <IoShieldHalf className="icon me-2" />
                  <span className="myfooter">
                    Trasparenza sui contenuti consigliati
                  </span>
                </span>
                <p className="questions">
                  Scopri di più sui contenuti consigliati.
                </p>
              </div>
            </div>

            <div className="questions ">
              Seleziona lingua
              <div>
                <select className="language mt-1">
                  <option>English</option>
                  <option>Español</option>
                  <option>Italiano</option>
                  <option>Français</option>
                  <option>Deutsch</option>
                  <option>Polski</option>
                  <option>Svenska</option>
                  <option>Portuguese</option>
                  <option>Arabic</option>
                  <option>Tagalog</option>
                </select>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={3} className="date mb-4">
          Linkedin Corporation &copy; 2024
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
