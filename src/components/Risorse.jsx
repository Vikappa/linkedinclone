import "../components/style.css" 
function Risorse(){
    return(
   <>
   <br />
   <br />
   <div id="container2"  className="bg-white p-2">
        <h3>Risorse</h3>
        <i className="fas fa-eye"></i>
        <p id="eye-text">Solo per te</p>
        <br /><br />
        
          <div id="container2-div1">
            <i className="fas fa-satellite-dish"></i>
    
            <a href="#" id="risorse-title">
              Modalità creazione di contenuti <span id="no">No</span>
            </a>
    
            <p id="risorse-para">
              Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi
              agli strumenti di creazione
            </p>
          </div>
    
         
    
          <i className="fas fa-user-friends" id="rete-logo"></i>
          <div id="container2-div2">
            <div>
              <p id="rete-title">La mia rete</p>
    
              <p id="rete-para">
                Salva e gestisci i tuoi collegamenti e interessi.
              </p>
            </div>
          </div>
        </div>
        <button>Mostra tutte le risorse <i className="fas fa-arrow-right"></i></button>
        <br />
        <br />
    </>
    )
} 
export default Risorse