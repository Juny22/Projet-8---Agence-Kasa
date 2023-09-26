import React, { useState } from "react";
import sassStyles from './Carrousel.module.scss';
import arrow from "../../assets/Images/Carrousel/Fleche.png";

function Carrousel({images}) {

    let [imgAfficher, changerImg] = useState(0);
    let nombreImg = images.length;

    const imgPrecedente = () => {
        if(imgAfficher === 0) {
            changerImg(nombreImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return(changerImg);
    };  

    const imgSuivante = () => {
        if(imgAfficher === nombreImg - 1) {
            changerImg(nombreImg = 0);
        } else {
            changerImg(imgAfficher + 1);
        }
        return(changerImg);
    };

    return(
        <div className={sassStyles.carrousel}>
            {
                nombreImg > 1 && <img className={`${sassStyles.arrow} ${sassStyles.leftarrow}`} src={arrow} alt="Contenu précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={`${sassStyles.carrouselimg} ${index === imgAfficher ? sassStyles.actif : ''}`} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nombreImg > 1 && <img className={`${sassStyles.arrow} ${sassStyles.rightarrow}`} src={arrow} alt="Contenu suivant" onClick={imgSuivante}/>
            }
        </div>
    );
}

export default Carrousel;