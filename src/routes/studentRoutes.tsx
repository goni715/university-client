import OfferedCoursePage from "../pages/faculty/OfferedCoursePage";
import StudentDashboardPage from "../pages/student/StudentDashboardPage";


export const studentPaths = [
  {
    label: "Dashoboard",
    path: "dashboard",
    element: <StudentDashboardPage />,
  },
  {
    label: "Offered Student",
    path: "offered-course",
    element: <OfferedCoursePage />,
  },
];