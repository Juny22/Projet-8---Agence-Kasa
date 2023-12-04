import React from "react";
import { useParams, useLoaderData, Navigate } from "react-router-dom";
import sassStyles from './Fiche-logement.module.scss';
import Name from "../../components/Name/Name";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapses from "../../components/Collapses/Collapses";
import EtoileRouge from "../../assets/Images/Fiche-logement/EtoileRouge.png";
import EtoileBlanc from "../../assets/Images/Fiche-logement/EtoileBlanc.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function FicheLogementContent({ ficheLogement }) {
  // Crée une liste de composants <Name> à partir des tags du logement
  const tagsLogement = ficheLogement?.tags.map((tags, index) => (
    <Name key={index} nom={tags} />
  ));

  let noteLogement = [];
  let etoileComplete = true;
  for (let index = 0; index < 5; index++) {
      if(index === parseInt(ficheLogement?.rating)) {
          etoileComplete = false;
      }
      if(etoileComplete === true) {
          noteLogement.push(<img key={index} className={sassStyles.etoile} src={EtoileRouge} alt={`${ficheLogement?.rating}/5`}/>)
      } else {
          noteLogement.push(<img key={index} className={sassStyles.etoile} src={EtoileBlanc} alt={`${ficheLogement?.rating}/5`}/>)
      }
  }
  
  const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <div className={sassStyles.fiche}>
      <Carrousel images={ficheLogement?.pictures} />
      <div className={sassStyles.logementspropietaire}>
        <div className={sassStyles.informationlogements}>
          <span className={sassStyles.titre}>{ficheLogement?.title}</span>
          <span className={sassStyles.endroit}>{ficheLogement?.location}</span>
          <div className={sassStyles.tags}>{tagsLogement}</div>
        </div>

        <div className={sassStyles.proprietairenote}>
          <div className={sassStyles.informationpropietaire}>
            <span className={sassStyles.nomproprietaire}>{ficheLogement?.host.name}</span>
            <img className={sassStyles.photopropietaire} src={ficheLogement?.host.picture} alt="Propriétaire" />
          </div>
          <div className={sassStyles.note}>{noteLogement}</div>
        </div>
      </div>

      <div className={sassStyles.descriptionequipements}>
        <div className={`${sassStyles.collapse} ${sassStyles.description}`}>
          <Collapses titre="Description" description={ficheLogement?.description} />
        </div>
        <div className={`${sassStyles.collapse} ${sassStyles.equipements}`}>
          <Collapses titre="Équipements" description={equipementsLogement} />
        </div>
      </div>
    </div>
  );
}

function FicheLogement() {
  const { id } = useParams();
  const ListeLogements = useLoaderData();
  const ficheLogement = ListeLogements.find(logement => logement.id === id);

  return (
    <div>
      <div className={sassStyles.bodymargin}>
        <Navbar />
        {ficheLogement ? (
          <FicheLogementContent ficheLogement={ficheLogement} />
        ) : (
          <Navigate replace to="/Projet-8---Agence-Kasa/Erreur"/>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FicheLogement;

