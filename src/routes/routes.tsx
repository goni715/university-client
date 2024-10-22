import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import routesGenerator from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";
import StudentUpdatePage from "../pages/admin/userManagement/StudentUpdatePage";

const router = createBrowserRouter([
  {
    path: "/", //absolute path
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "update-student/:id",
        element: <StudentUpdatePage />,
      },
      ...routesGenerator(adminPaths),
    ],
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
  },
  {
    path: "/login", //absolute path
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);


export default router;