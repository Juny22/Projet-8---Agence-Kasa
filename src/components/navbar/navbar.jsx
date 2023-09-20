import React from "react";
import sassStyles from './navbar.module.scss'
import logoHeader from "../../assets/Images/Logo/Logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/accueil" className={`${sassStyles.liensite} ${sassStyles.lienmenu}`}>Accueil</NavLink>
                <NavLink to="/a-propos" className={`${sassStyles.liensite} ${sassStyles.lienmenu}`}>À propos</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;