import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Accueil from "../pages/Accueil/Accueil";
import Fiche from '../pages/Fiche-logement/Fiche-logement';
import APropos from "../pages/A-propos/A-propos";
import Erreur from "../pages/Error/Error";


function RoutesPath() {
    const genericLoader = async( { params } ) => {
        console.log('params', params)
            const req = await fetch('./logements.json');
            const res = await req.json();
            console.log('res', res);
            return res;
    };
    const router = createBrowserRouter([
        {
            path: "/",
            loader: genericLoader,
            element: <Accueil />,
            errorElement: <Erreur />
        },
        {
            path: "/accueil",
            loader: genericLoader,
            element: <Accueil />,
            errorElement: <Erreur />
        },
        {
            path: "/logement/:id",
            loader: genericLoader,
            element: <Fiche />,
            errorElement: <Erreur />
        },
        {
            path: "/a-propos",
            loader: genericLoader,
            element: <APropos />,
            errorElement: <Erreur />
        },
        {
            path: "*",
            element: <Erreur />,
        }      
    ]);
    return (<RouterProvider router={router}></RouterProvider>)

    /*return(
        <Router>
            <Routes>
                <Route path="/" element={<Accueil />}/>
                <Route path="/accueil" element={<Accueil />}/>
                <Route path="/logement/:id" element={<Fiche />}/>
-               <Route path="/a-propos" element={<APropos />}/>
-               <Route path="*" element={<Erreur />}/>
            </Routes>
        </Router>      
    );*/
}

export default RoutesPath;

