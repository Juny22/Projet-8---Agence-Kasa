import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from "../pages/Accueil/Accueil";
import FicheLogement from '../pages/Fiche-logement/Fiche-logement';
import APropos from "../pages/A-propos/A-propos";
import Erreur from "../pages/Error/Error";

function RoutesPath() {
  const genericLoader = async ({ params }) => {
    const { id } = params;
    
    const req = await fetch(`./logements.json?id=${id}`);
    const res = await req.json();
    
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
}

export default RoutesPath;


