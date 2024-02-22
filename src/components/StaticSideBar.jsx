/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Card = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="card">
            <h2>Titolo della Card</h2>
            <ul>
                <li>Come fare un bilancio di competenze</li>
                <li> Il lato positivo dell invidia</li>
                <li>Ritorno al negozio (del futuro)</li>
                <li>Verso una pubblica amministrazione ...</li>
                <li>Il conto del cambiamento climatico</li>
            </ul>
            {showMore && (
                <ul>
                    <li>Allarme smog in pianura padana</li>
                    <li>Quando l impostore ci fa crescere</li>
                    <li>Il richiamo della montagna</li>
                    <li>Sviluppo immobiliare a Roma Nord</li>
                    <li>Nuove regole Ue per le batterie</li>
                </ul>
            )}
            <button onClick={handleShowMore}>{showMore ? 'Nascondi' : 'Vedi altro'}</button>
        </div>
    );
};

export default Card;
