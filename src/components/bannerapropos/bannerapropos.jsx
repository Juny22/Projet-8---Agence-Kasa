import React from "react";
import sassStyles from './bannerapropos.module.scss'

function Bannerapropos({image, texte}) {
    return(
        <div className={sassStyles.banner}>
            <img className={sassStyles.bannerimg} src={image} alt="Bannière"/>
            <div className={sassStyles.bannerdark}></div>
            <span className={sassStyles.bannertxt}>{texte}</span>
        </div>
    );
}

export default Bannerapropos;