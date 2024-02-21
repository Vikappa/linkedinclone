import "../components/style.css" 

function analisi(){
return(
    <>
    <h3>Analisi</h3>
    <i className="fas fa-eye"></i>
    <p id="eye-text">Solo per te</p>

    <div id="container">
      <div id="first-div">
        <br />
        <i className="fas fa-user-friends" id="friends"></i>
        <div id="user-friends">
          <br />
          <a href="#" id="user-friends-title">8 visualizzazioni del profilo</a>
          <p id="user-friends-para">
            Aggiorna il tuo profilo per <br />
            attrarre visitatori.
          </p>
        </div>
      </div>

      <div id="second-div">
        <div id="ricerca">
          <i className="fas fa-search"></i>
          <p id="ricerca-title">2 comparse nei motori di ricerca</p>
          <p id="ricerca-para">
            vedi quanto volte compare nel <br />risultati di ricerca
          </p>
        </div>
      </div>
    </div>

    <button>Mostra tutte le analisi <i className="fas fa-arrow-right"></i></button>
    </>
)

}

export default analisi
