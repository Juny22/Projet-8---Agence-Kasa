import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from "../pages/Accueil/Accueil";
import FicheLogement from '../pages/Fiche-logement/Fiche-logement';
import APropos from "../pages/A-propos/A-propos";
import Erreur from "../pages/Error/Error";

function RoutesPath() {
  /*const genericLoader = async ({ params }) => {
    console.log('params', params);
    const req = await fetch('/logements.json');
    const res = await req.json();
    console.log('res', res);
    return res;
  };*/
  const genericLoader = async ({ params }) => {
    const { id } = params; // Extrayez l'ID du paramètre d'URL
    console.log('ID du logement', id);
    
    // Chargez les données spécifiques au logement avec l'ID donné
    const req = await fetch(`/logements.json?id=${id}`);
    const res = await req.json();
    console.log('Données du logement', res);
    
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
      element: <FicheLogement />,
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

  return (
    <RouterProvider router={router}></RouterProvider>
  );

  /*return(
        <Router>
            <Routes>
                <Route path="/" element={<Accueil />}/>
                <Route path="/accueil" element={<Accueil />}/>
                <Route path="/logement/:id" element={<Fiche />}/>
                <Route path="/a-propos" element={<APropos />}/>
                <Route path="*" element={<Erreur />}/>
            </Routes>
        </Router>      
    );*/
}

export default RoutesPath;


