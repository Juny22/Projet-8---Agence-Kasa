import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import sassStyles from './Navbar.module.scss'
import logoRed from "../../assets/Images/Logo/Logo.png";

function Navbar() {
    const location = useLocation();

    return (
        <header>
            <img src={logoRed} alt="Logo"/>
            <nav>
                <NavLink to="/accueil" className={`${sassStyles.liensite} ${location.pathname === "/accueil" || location.pathname === "/" ? sassStyles.active : ""}`}>Accueil</NavLink>
                <NavLink to="/a-propos" className={`${sassStyles.liensite} ${location.pathname === "/a-propos" ? sassStyles.active : ""}`}>A propos</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;