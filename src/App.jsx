import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./Component/Dashboard";
import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
import Privacypolicy from "./Component/Privacypolicy/Privacypolicy";
import Internship from "./Component/Internship/Internship";
import { auth } from "./firebase";   // <-- Make sure this path is correct



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
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
    path: "/privacypolicy",
    element: <Privacypolicy />
  },
  {
    path: "/internship",
    element: <Internship />
  }
]);


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return <RouterProvider router={appRouter} />;
}

export default App;