import StudentDashboardPage from "../pages/student/StudentDashboardPage";
import StudentOfferedCoursesPage from "../pages/student/StudentOfferedCoursesPage";


export const studentPaths = [
  {
    label: "Dashoboard",
    path: "dashboard",
    element: <StudentDashboardPage />,
  },
  {
    label: "Offered Courses",
    path: "offered-courses",
    element: <StudentOfferedCoursesPage />,
  },
];