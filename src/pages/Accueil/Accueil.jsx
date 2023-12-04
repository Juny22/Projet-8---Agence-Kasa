import React from "react";
import { useLoaderData } from "react-router-dom";
import sassStyles from './Accueil.module.scss';
import Banner from "../../components/Banner/Banner";
import Bannerimg from "../../assets/Images/Banner/Banner.png";
import { NavLink } from "react-router-dom";
import Houses from "../../components/Houses/Houses";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Accueil() {
    
    const listeLogements = useLoaderData();

    return(
        <div>
            <div className={sassStyles.bodymargin}>
            <Navbar/>
            <Banner image={Bannerimg} texte="Chez vous, partout et ailleurs"/>
                <div className={sassStyles.listelogements}>
                    {listeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Houses key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Accueil;