

import {createBrowserRouter} from "react-router-dom";
import HomePage from "./view/pages/homePage/homePage.tsx";
import LoginPage from "./view/pages/loginPage/LoginPage.tsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path:"/home",
        element:<HomePage/>
    },
    {
        path: "/about",
        element:"<h1> about </h1>"
    },
    {
        path: "/contacts",
        element:"<h1> contacts </h1>"
    },
    {
        path: "/login",
        element:<LoginPage/>
    },
    {
        path: "/register",
        element:"<h1> Register </h1>"
    },

])

export default Router;