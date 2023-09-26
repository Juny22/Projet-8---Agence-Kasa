import React, { useState } from "react";
import sassStyles from './Collapses.module.scss'
import fleche from "../../assets/Images/Collapses/Fleche.svg";

function Collapses({titre, description}) {
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className={sassStyles.collapses} id={`collapses-${titre}`}>
            <div className={sassStyles.headercollapses}>
                <div className={sassStyles.titrecollapses}>{titre}</div>
                <span className={`${sassStyles.flechecollapses} ${ouvert ? sassStyles.true : ''}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste" />
                </span>
            </div>
            {ouvert && <div className={sassStyles.descriptioncollapses}>{description}</div>}
        </div>
    );
}

export default Collapses;