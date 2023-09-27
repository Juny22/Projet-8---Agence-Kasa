import React, { useState } from "react";
import sassStyles from './Collapses.module.scss'
import chevron from "../../assets/Images/Collapses/Fleche.svg";

function Collapses({ titre, description }) {
    const [ouvert, setOuvert] = useState(false);

    // Fonction pour basculer l'état "ouvert" lors du clic
    const toggleOuvert = () => {
        setOuvert(!ouvert);
    };

    return (
        <div className={sassStyles.collapses} id={`collapses-${titre}`}>
            <div className={sassStyles.header}>
                <div className={sassStyles.titre}>{titre}</div>
                <span className={`${sassStyles.chevron} ${ouvert ? sassStyles.true : ''}`} onClick={toggleOuvert}>
                    <img className={ouvert ? 'rotate' : ''} src={chevron} alt="Chevron" />
                </span>
            </div>
            <div>
            {ouvert && <div className={sassStyles.content}>{description}</div>}
            </div>
        </div>
    );
}

export default Collapses;



