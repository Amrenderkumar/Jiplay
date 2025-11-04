import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
import Privacypolicy from "./Component/Privacypolicy/Privacypolicy";
import Internship from "./Component/Internship/Internship";
import { router } from "./router";


const appRouter = createBrowserRouter([
 {
  path: "/",
  element: <Dashboard />,
 },
 {
  path: "/login",
  element: <Login />,
 },
 {
  path: "/signup",
  element: <Signup />,
 },
 {
  path: "/Privacypolicy",
  element: <Privacypolicy />
 },
 {
  path: "/internship",
  element: <Internship />
 }
]);

function App() {
  return (
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  );
}


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <RouterProvider router={appRouter} />
    </BrowserRouter>
  );
}

export default App;
