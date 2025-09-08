import {createBrowserRouter} from "react-router-dom"
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Dashboard from "./Component/Dashboard";
import Privacypolicy from "./Component/Privacypolicy";
import Profile from "./Component/Profile";
import Internship from "./Internship/Internship";
import Trainee from "./Trainee/Trainee";
import Job from "./Job/Job";

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