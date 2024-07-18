import { createBrowserRouter } from "react-router-dom";
import MainHeader from "../components/headers/mainHeader";
import Contact from "../pages/contact";

import Home from "../pages/home";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainHeader/>,
        children:[
            {
                index : true,
                element : <Home/>,
            },
            {
                path:"/contacto",
                element: <Contact/>
            }
        ]
    }
])
