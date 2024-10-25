import FacultyDashboardPage from "../pages/faculty/FacultyDashboardPage";
import MyCoursesPage from "../pages/faculty/MyCoursesPage";
import MyStudentsPage from "../pages/faculty/MyStudentsPage";


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
  {
    label: 'NotSidebarItem',
    path: "courses/:semesterRegistrationId/:courseId",
    element: <MyStudentsPage />,
  },
];