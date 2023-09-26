import React from "react";
import logoFooter from "../../assets/Images/Logo/Logofooter.png";
import sassStyles from './Footer.module.scss'

function Footer() {
    return(
        <footer className={sassStyles.footer}>
            <div className={sassStyles.footercontainer}>
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;