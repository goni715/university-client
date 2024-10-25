import MySchedulePage from "../pages/student/MySchedulePage";
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
  {
    label: "Schedule",
    path: "schedule",
    element: <MySchedulePage />,
  },
];