import React, { useState } from "react";
import sassStyles from './Collapses.module.scss'
import chevron from "../../assets/Images/Collapses/Fleche.svg";

function Collapses({titre, description}) {
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className={sassStyles.collapses} id={`collapses-${titre}`}>
            <div className={sassStyles.header}>
                <div className={sassStyles.titre}>{titre}</div>
                <span className={`${sassStyles.chevron} ${ouvert ? sassStyles.true : ''}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={chevron} alt="Ouvrir cette liste" />
                </span>
            </div>
            {ouvert && <div className={sassStyles.content}>{description}</div>}
        </div>
    );
}

export default Collapses;