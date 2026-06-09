import { RouterProvider } from "react-router";

import { appRouter } from "./router/app.router";

import "./css/PatitasAdoptativasApp.css";


export function PatitasAdoptivasApp() {

    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    )

}