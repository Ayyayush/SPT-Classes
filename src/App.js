import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Signup from "./components/Signup.jsx";
import CoursesPage from "./Pages/CoursesPage";
import RegisterForm from "./components/RegisterForm.jsx";
import { Toaster } from "react-hot-toast";


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
    {   path: "/courses" ,
        element: <CoursesPage /> 
    },
    {   path: "/registerForm" ,
        element: <RegisterForm /> 
    },

])


function App() {
    return (
        <div>
            <RouterProvider router={appRouter} />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    )
}

export default App;