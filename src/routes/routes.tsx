import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import { adminPaths } from "./adminRoutes";

const router = createBrowserRouter([
    {
      path: "/", //absolute path
      element: <App />,
      children: [
        {
          path: "about", //relative path
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "/admin", 
      element: <App />,
      children: adminPaths
    },
    {
      path: "/login", //absolute path
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    }
  ]);


export default router;