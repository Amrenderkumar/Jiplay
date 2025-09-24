import {createBrowserRouter} from "react-router-dom"
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Dashboard from "./Component/Dashboard";
import Privacypolicy from "./Component/Privacypolicy/Privacypolicy";
import Profile from "./Component/Profile";
import Internship from "./Component/Internship/Internship";
import Trainee from "./Component/Trainee/Trainee";
import Job from "./Component/Job/Job";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/Dashboard",
        element: <Dashboard />
    },
    {
        path: "/Privacypolicy",
        element: <Privacypolicy />
    },
    {
        path: "/Profile",
        element: <Profile />
    },
    {
        path: "/internship",
        element: <Internship />
    },
    {
        path: "/Trainee",
        element: <Trainee />
    },
    {
        path: "/Job",
        element: <Job />
    }
]);