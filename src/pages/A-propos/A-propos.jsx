import React from "react";
import sassStyles from './A-propos.module.scss'
import Collapses from "../../components/collapses/collapses";
import bannerAPropos from "../../assets/Images/Banner/Bannerapropos.png";
import Bannerapropos from "../../components/bannerapropos/bannerapropos";
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

function APropos() {
    return(
        <div>
            <Navbar/>
            <Bannerapropos image={bannerAPropos} titre=""/>
              <Collapses titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
              <Collapses titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
              <Collapses titre="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
              <Collapses titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            <Footer/>
        </div>
    );
}

export default APropos;