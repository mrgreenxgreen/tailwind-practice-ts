import {createBrowserRouter} from "react-router-dom";
import Homepage from "./view/pages/HomePage/Homepage.tsx";
import LoginPage from "./view/pages/LoginPage/LoginPage.tsx";
import RegisterPage from "./view/pages/RegistrationPage/RegisterPage.tsx";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Homepage/>,

    },
    {
        path:"/login",
        element:<LoginPage/>,
    },
    {
        path:"/register",
        element:<RegisterPage/>,
    }
    ]
)

export default Router;