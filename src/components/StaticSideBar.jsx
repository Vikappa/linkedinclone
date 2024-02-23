/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CardSideBar = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        textAlign: "left",
      }}
    >
      <h5 className="m-3 fw-semibold">Linkedin Notizie</h5>

      {showMore ? (
        <ul>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Come+fare+un+bilancio+di+competenze"
              target="_blank"
              rel="noopener noreferrer"
            >
              Come fare un bilancio di competenze
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Il+lato+positivo+dell%27invidia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Il lato positivo dell'invidia
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Ritorno+al+negozio+del+futuro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ritorno al negozio (del futuro)
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Verso+una+pubblica+amministrazione+digitale"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verso una pubblica amministrazione digitale
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Il+conto+del+cambiamento+climatico"
              target="_blank"
              rel="noopener noreferrer"
            >
              Il conto del cambiamento climatico
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Allarme+smog+in+pianura+padana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Allarme smog in pianura padana
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Quando+l%27impostore+ci+fa+crescere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quando l'impostore ci fa crescere
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Il+richiamo+della+montagna"
              target="_blank"
              rel="noopener noreferrer"
            >
              Il richiamo della montagna
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Sviluppo+immobiliare+a+Roma+Nord"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sviluppo immobiliare a Roma Nord
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Nuove+regole+Ue+per+le+batterie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuove regole Ue per le batterie
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Tecnologie+emergenti+nel+settore+energetico"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tecnologie emergenti nel settore energetico
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=L%27evoluzione+del+lavoro+remoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              L'evoluzione del lavoro remoto
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=La+resilienza+delle+città+contro+il+cambiamento+climatico"
              target="_blank"
              rel="noopener noreferrer"
            >
              La resilienza delle città contro il cambiamento climatico
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Innovazioni+nella+mobilità+urbana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Innovazioni nella mobilità urbana
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Strategie+per+una+vita+sostenibile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategie per una vita sostenibile
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Il+futuro+dell%27intelligenza+artificiale"
              target="_blank"
              rel="noopener noreferrer"
            >
              Il futuro dell'intelligenza artificiale
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Rivoluzione+digitale+nella+finanza+personale"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rivoluzione digitale nella finanza personale
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Cultura+e+tecnologia%3A+un+nuovo+dialogo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cultura e tecnologia: un nuovo dialogo
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Impatto+ambientale+dell%27e-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              Impatto ambientale dell'e-commerce
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=La+crescita+del+turismo+sostenibile"
              target="_blank"
              rel="noopener noreferrer"
            >
              La crescita del turismo sostenibile
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Le+sfide+dell%27educazione+nel+XXI+secolo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le sfide dell'educazione nel XXI secolo
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Ricerca+e+sviluppo+nei+materiali+biodegradabili"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ricerca e sviluppo nei materiali biodegradabili
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Le+nuove+frontiere+della+medicina+personalizzata"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le nuove frontiere della medicina personalizzata
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Blockchain+e+sicurezza+dei+dati"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blockchain e sicurezza dei dati
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Politiche+per+la+riduzione+dei+rifiuti+plastici"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politiche per la riduzione dei rifiuti plastici
            </a>
          </li>
        </ul>
      ) : (
        <ul style={{}}>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Come+fare+un+bilancio+di+competenze"
              target="_blank"
              rel="noopener noreferrer"
            >
              Come fare un bilancio di competenze
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Il+lato+positivo+dell'invidia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Il lato positivo dell'invidia
            </a>
          </li>
          <li style={{ fontSize: "0.9rem" }}>
            <a
              href="https://www.google.com/search?q=Ritorno+al+negozio+(del+futuro)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ritorno al negozio (del futuro)
            </a>
          </li>
        </ul>
      )}
      <div className="d-flex flex-align-center justify-content-center">
        <button style={{ width: "95%" }} onClick={handleShowMore}>
          {showMore ? "Nascondi" : "Vedi altro"}
        </button>
      </div>
    </div>
  );
};

export default CardSideBar;
