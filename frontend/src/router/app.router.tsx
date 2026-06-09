
import { InicioMain } from "../pages/inicio/InicioMain";
import { Layout } from "../componentes/Layout";
import { NosotrosMain } from "../pages/nosotros/NosotrosMain";


import { createBrowserRouter }   from "react-router";
import { CatalogoMain } from "../pages/catalogo/CatalogoMain";



export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <InicioMain/>,
            },
            {
                path: "nosotros",
                element: <NosotrosMain/>,
            },
            {
                path: "catalogo",
                element: <CatalogoMain/>,
            }
        ]
    },
])