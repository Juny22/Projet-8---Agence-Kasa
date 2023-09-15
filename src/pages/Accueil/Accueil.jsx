import React from "react";
//import "./Accueil.css";
import sassStyles from './Accueil.module.scss'

function Accueil({isBorderBlack}) {
    /*const style = {
        'border': isBorderBlack ? '1px solid #000' : '1px solid red'
    };*/
    return(
        <div className={sassStyles.test}>
            <p className="test">Chez vous, partout et ailleurs</p>
        </div>
    );
}

export default Accueil;