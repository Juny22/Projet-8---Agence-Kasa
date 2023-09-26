import React from "react";
import sassStyles from './Houses.module.scss'

function Houses({id, image, titre}) {
    return(
        <div className={sassStyles.tuile} id={id}>
            <img className={sassStyles.tuileimage} src={image} alt="Tuile"/>
            <div className={sassStyles.tuiledark}></div>
            <span className={sassStyles.tuiletitre}>{titre}</span>
        </div>
    );
}

export default Houses;
