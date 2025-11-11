import {createBrowserRouter} from "react-router-dom"
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Dashboard from "./Component/Dashboard";
import Privacypolicy from "./Component/Privacypolicy/Privacypolicy";
import Profile from "./Component/Profile";
import Internship from "./Component/Internship/Internship";
import Trainee from "./Component/Trainee/Trainee";
import Job from "./Component/Job/Job";
import Terms from "./Component/Terms/Termsandcondion";
import Contact from "./Component/Contact/Contact";
import ProtectedRoute from "./Component/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
    },
    {
        path: "/Dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
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
    },
    {
        path: "/Terms",
        element: <Terms />
    },
    {
        path: "/Contact",
        element: <Contact />
    }
]);