/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const CardSideBar = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="card" style={{backgroundColor: 'white', borderRadius: '10px', textAlign: 'left' }}>
            <h5 className='m-3 fw-semibold' >Linkedin Notizie</h5>

            {showMore?
                        <ul style={{}}>
                        <li style={{fontSize:"0.9rem"}} >Come fare un bilancio di competenze</li>
                        <li style={{fontSize:"0.9rem"}} >Il lato positivo dell invidia</li>
                        <li style={{fontSize:"0.9rem"}} >Ritorno al negozio (del futuro)</li>
                        <li style={{fontSize:"0.9rem"}} >Verso una pubblica amministrazione ...</li>
                        <li style={{fontSize:"0.9rem"}} >Il conto del cambiamento climatico</li>
                        </ul>
:
                    <ul style={{}}>
                    <li style={{fontSize:"0.9rem"}} >Come fare un bilancio di competenze</li>
                    <li style={{fontSize:"0.9rem"}} >Il lato positivo dell invidia</li>
                    <li style={{fontSize:"0.9rem"}} >Ritorno al negozio (del futuro)</li>
                    <li style={{fontSize:"0.9rem"}} >Verso una pubblica amministrazione ...</li>
                    <li style={{fontSize:"0.9rem"}} >Il conto del cambiamento climatico</li>
                    <li style={{fontSize:"0.9rem"}} >Allarme smog in pianura padana</li>
                    <li style={{fontSize:"0.9rem"}} >Quando l impostore ci fa crescere</li>
                    <li style={{fontSize:"0.9rem"}} >Il richiamo della montagna</li>
                    <li style={{fontSize:"0.9rem"}} >Sviluppo immobiliare a Roma Nord</li>
                    <li style={{fontSize:"0.9rem"}} >Nuove regole Ue per le batterie</li>
</ul>
            }
            <div className='d-flex flex-align-center justify-content-center'>
            <button style={{width:"95%"}} onClick={handleShowMore}>{showMore ? 'Vedi altro' : 'Nascondi'}</button>
            </div>
        </div>
    );
};

export default CardSideBar;
