import React from "react";
import sassStyles from './A-propos.module.scss'
import Collapses from "../../components/Collapses/Collapses";
import bannerAPropos from "../../assets/Images/Banner/Bannerapropos.png";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function APropos() {
    return(
        <div>
            <div className={sassStyles.bodymargin}>
            <Navbar/>
            <Banner image={bannerAPropos} titre=""/>
                <div className={sassStyles.collapsemargin}>
                    <Collapses titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                    <Collapses titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                    <Collapses titre="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                    <Collapses titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default APropos;