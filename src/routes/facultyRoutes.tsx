import FacultyDashboardPage from "../pages/faculty/FacultyDashboardPage";
import OfferedCoursePage from "../pages/faculty/OfferedCoursePage";


export const facultyPaths = [
  {
    label: "Dashoboard",
    path: "dashboard",
    element: <FacultyDashboardPage />,
  },
  {
    label: "Offered Course",
    path: "offered-course",
    element: <OfferedCoursePage />,
  },
];