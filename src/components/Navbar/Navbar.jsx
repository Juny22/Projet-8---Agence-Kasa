import React from "react";
import sassStyles from './Navbar.module.scss'
import logoRed from "../../assets/Images/Logo/Logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <header>
            <img src={logoRed} alt="Logo"/>
            <nav>
                <NavLink to="/accueil" className={`${sassStyles.liensite} ${sassStyles.lienmenu}`}>Accueil</NavLink>
                <NavLink to="/a-propos" className={`${sassStyles.liensite} ${sassStyles.lienmenu}`}>A propos</NavLink>
            </nav>

        </header>
    );
}

export default Navbar;