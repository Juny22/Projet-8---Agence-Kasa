import React from "react";
//import "./Accueil.css";
import sassStyles from './Accueil.module.scss'
import Banner from "../../components/banner/banner"
import Bannerimg from "../../assets/Images/Banner/Banner.png"
import { NavLink } from "react-router-dom";
import ListeLogements from "../../assets/api/logements.json";
import Houses from "../../components/houses/houses";
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

function Accueil({isBorderBlack}) {
    /*const style = {
        'border': isBorderBlack ? '1px solid #000' : '1px solid red'
    };*/
    return(
        <div>
            <Navbar/>
            <Banner image={Bannerimg} texte="Chez vous, partout et ailleurs"/>
            <div className={sassStyles.listelogements}>
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Houses key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
            <Footer/>
        </div>
    );
}

export default Accueil;