import React from 'react'
import { NavLink } from "react-router-dom";
import sassStyles from './Error.module.scss';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Erreur() {
    return(
        <div>
            <div className={sassStyles.bodymargin}>
                <Navbar/>
                    <div className={sassStyles.page404}>
                        <h1 className={sassStyles.titre404}>404</h1>
                        <span className={sassStyles.description404}>Oups! La page que vous demandez n'existe pas.</span>
                        <NavLink to="/Projet-8---Agence-Kasa/" className={`${sassStyles.liensite} ${sassStyles.lien404}`}>Retourner sur la page d’accueil</NavLink>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Erreur;