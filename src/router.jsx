import {createBrowserRouter} from "react-router-dom"
import App from "./App";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Dashboard from "./Component/Dashboard";

export const router = createBrowserRouter([
     {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]);