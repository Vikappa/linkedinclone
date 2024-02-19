import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap-icons";
const Footer = () => {
  return (
    <Container
      fluid
      className="p-2 w-100 "
      style={{ backgroundColor: "#f4f2ee" }}
    >
      <Row
        className="mt-2 fs-6 fw-bold "
        xs={12}
        md={3}
        lg={5}
        style={{ color: "#626160", cursor: "pointer" }}
      >
        <Col>
          <p id="info">Informazioni</p>
          <p id="lineeguida">Linee guida della community</p>
          <p id="privacy">Privacy e condizioni </p>
          <p id="sales">Sales Solutions</p>
          <p id="security">Centro Sicurezza</p>
        </Col>
        <Col>
          <p id="access">Accessibilità</p>
          <p id="career">Carriera</p>
          <p id="options">Opzioni per gli annunci pubbicitari</p>
          <p id="mobile">Mobile</p>
        </Col>
        <Col>
          <p id="talent">Talent Solutions</p>
          <p id="marketing">Soluzioni di marketing</p>
          <p id="pub">Pubblicità</p>
          <p id="imprese">Piccole imprese</p>
          <p></p>
        </Col>
        <Col>
          <div>
            <span>
              <i className="bi bi-question-circle-fill"></i>Domande?
            </span>
            <p className="questions">Visita il nostro Centro assistenza.</p>
          </div>
          <div>
            <span>
              <i className="bi bi-gear-fill"></i>Gestisci il tuo account e la
              tua privacy
            </span>
            <p className="questions">Vai alle impostazioni</p>
          </div>
          <div>
            <span>
              <i className="bi bi-shield-shaded"></i>Trasparenza sui contenuti
              consigliati
            </span>
            <p className="questions">
              Scopri di più sui contenuti consigliati.
            </p>
          </div>
        </Col>
        <Col>
          <div className="questions mx-2">
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
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3} className="date">
          Linkedin Corporation &copy; 2024
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
