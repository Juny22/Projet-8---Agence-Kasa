import React from "react";
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Layout from "../Layouts/Layouts"
import Accueil from "../pages/Accueil/Accueil";
import Fiche from '../pages/Fiche-logement/Fiche-logement';
import APropos from "../pages/A-propos/A-propos";
import Erreur from "../pages/Error/Error";


function RoutesPath() {
    return(
            <Layout>
                <Routes>
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/logement/:id" element={<Fiche />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="*" element={<Erreur />}/>
                </Routes>
            </Layout>
    );
}

export default RoutesPath;