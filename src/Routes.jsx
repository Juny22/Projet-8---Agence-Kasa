import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layouts"
import Accueil from "./pages/Accueil/Accueil";
import Fiche from './pages/Fiche-logement/Fiche-logement';
import APropos from "./pages/A-propos/A-propos";
import Erreur from "./pages/Error/Error";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/logement/:id" element={<Fiche />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="*" element={<Erreur />}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;