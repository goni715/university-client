import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import routesGenerator from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";
import ChangePasswordPage from "../pages/auth/ChangePasswordPage";
import PublicRoute from "../components/layout/PublicRoute";
import ProtectedRoute from "../components/layout/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/", //absolute path
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role="faculty">
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(studentPaths),
  },
  {
    path: "/login", //absolute path
    element: (
        <LoginPage />
    ),
  },
  {
    path: "/change-password", //absolute path
    element: (
      <ProtectedRoute role={undefined}>
        <ChangePasswordPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  {
    path: "/*",
    element: <h1>Page Not Found</h1>
  },
]);


export default router;