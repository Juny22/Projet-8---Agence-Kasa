import React from "react";
import sassStyles from './Name.module.scss'

function Name({nom}) {
    return(
        <span className={sassStyles.name}>{nom}</span>
    );
}

export default Name;