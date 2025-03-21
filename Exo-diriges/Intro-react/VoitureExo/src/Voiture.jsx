import React from 'react';
import './Voiture.css';

function Voiture({prop}) {
    return (
        <div className="voiture-card">
            <h2 className="card-tile">{prop.marque} {prop.model}</h2>
            <p className="card-text"><strong>Couleur :</strong> {prop.couleur}</p>
            <p className="card-text"><strong>Année :</strong> {prop.annee}</p>
        </div>
    );
}

export default Voiture;