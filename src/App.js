import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Signup from "./components/Signup.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/browse",
        element: <Browse />,
    },
    {
         path: "/login",
         element: <Login />,
    },
    {   path: "/signup",
        element: <Signup /> 
    },
])


function App() {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default App;