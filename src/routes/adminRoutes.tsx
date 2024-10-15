import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import CreateAdminPage from "../pages/admin/CreateAdminPage";
import CreateFacultyPage from "../pages/admin/CreateFacultyPage";
import CreateStudentPage from "../pages/admin/CreateStudentPage";

export const adminPaths2 = [
  {
    name: "Dashoboard",
    path: "/admin/dashboard",
    element: <AdminDashboardPage />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdminPage />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFacultyPage />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudentPage />,
      },
    ],
  },
];



export const adminPaths = [
  {
    index: true,
    element: <AdminDashboardPage />,
  },
  {
    path: 'dashboard',
    element: <AdminDashboardPage />,
  },
  {
    path: "create-admin",
    element: <CreateAdminPage />,
  },
  {
    path: "create-faculty",
    element: <CreateFacultyPage />,
  },
  {
    path: "create-student",
    element: <CreateStudentPage />,
  },
];