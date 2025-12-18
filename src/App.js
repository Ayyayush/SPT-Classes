import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Signup from "./components/Signup.jsx";
import CoursesPage from "./components/CoursesPage.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Toaster } from "react-hot-toast";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/Browse",
        element: <Browse />,
    },
    {
         path: "/Login",
         element: <Login />,
    },
    {   path: "/Signup",
        element: <Signup />
    },
    {   path: "/Courses" ,
        element: <CoursesPage />
    },
    {   path: "/RegisterForm" ,
        element: <RegisterForm />
    },
    {   path: "/About" ,
        element: <AboutUs />
    },
    {   path: "/Contact" ,
        element: <ContactUs />
    },

])


function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter} />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    )
}

export default App;