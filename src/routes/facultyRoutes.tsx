import FacultyDashboardPage from "../pages/faculty/FacultyDashboardPage";
import MyCoursesPage from "../pages/faculty/MyCoursesPage";


export const facultyPaths = [
  {
    label: "Dashoboard",
    path: "dashboard",
    element: <FacultyDashboardPage />,
  },
  {
    label: "My Courses",
    path: "my-courses",
    element: <MyCoursesPage />,
  },
];