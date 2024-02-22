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
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
                <li>Elemento 4</li>
                <li>Elemento 5</li>
            </ul>
            {showMore && (
                <ul>
                    <li>Elemento 6</li>
                    <li>Elemento 7</li>
                    <li>Elemento 8</li>
                    <li>Elemento 9</li>
                    <li>Elemento 10</li>
                </ul>
            )}
            <button onClick={handleShowMore}>{showMore ? 'Nascondi' : 'Vedi altro'}</button>
        </div>
    );
};

export default Card;
