import AcademicDepartmentPage from "../pages/admin/academicManagement/AcademicDepartmentPage";
import AcademicFacultyPage from "../pages/admin/academicManagement/AcademicFacultyPage";
import AcademicSemesterPage from "../pages/admin/academicManagement/AcademicSemesterPage";
import CreateAcademicDepartmentPage from "../pages/admin/academicManagement/CreateAcademicDepartmentPage";
import CreateAcademicFacultyPage from "../pages/admin/academicManagement/CreateAcademicFacultyPage";
import CreateAcademicSemesterPage from "../pages/admin/academicManagement/CreateAcademicSemesterPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import CreateSemesterRegPage from "../pages/admin/courseManagement/CreateSemesterRegPage";
import CreateAdminPage from "../pages/admin/userManagement/CreateAdminPage";
import CreateFacultyPage from "../pages/admin/userManagement/CreateFacultyPage";
import CreateStudentPage from "../pages/admin/userManagement/CreateStudentPage";
import StudentListPage from "../pages/admin/userManagement/StudentListPage";
import StudentUpdatePage from "../pages/admin/userManagement/StudentUpdatePage";

export const adminPaths = [
  {
    label: "Dashboard",
    path: "dashboard",
    element: <AdminDashboardPage />,
  },
  {
    label: "Academic Management",
    children: [
      {
        label: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemesterPage />,
      },
      {
        label: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemesterPage />,
      },
      {
        label: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFacultyPage />,
      },
      {
        label: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFacultyPage />,
      },
      {
        label: "Create A. Dept",
        path: "create-academic-department",
        element: <CreateAcademicDepartmentPage />,
      },
      {
        label: "Academic Dept",
        path: "academic-department",
        element: <AcademicDepartmentPage />,
      }
    ],
  },
  {
    label: "User Management",
    children: [
      {
        label: "Create Student",
        path: "create-student",
        element: <CreateStudentPage />,
      },
      {
        label: 'NotSidebarItem',
        path: "update-student/:id",
        element: <StudentUpdatePage />,
      },
      {
        label: "Students",
        path: "students",
        element: <StudentListPage />,
      },
      {
        label: "Create Admin",
        path: "create-admin",
        element: <CreateAdminPage />,
      },
      {
        label: "Create Faculty",
        path: "create-faculty",
        element: <CreateFacultyPage />,
      }
    ],
  },
  {
    label: "Course Management",
    children: [
      {
        label: "Create Semseter Reg",
        path: "create-semster-registration",
        element: <CreateSemesterRegPage />,
      },
      {
        label: "Semseter Registration",
        path: "semster-registration",
        element: <CreateSemesterRegPage />,
      }
    ],
  },
];


// type TSidebarItem = {
//   key: string;
//   label: ReactNode;
//   children?: TSidebarItem[] //children?: {key: string;, label: ReactNode;}[]
// }


// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item)=> {
//   if(item.path && item.element){
//     acc.push({
//       key: item.label,
//       label: <NavLink to={`/admin/${item.path}`}>{item.label}</NavLink>
//     })
//   }

//   if(item?.children){
//     acc.push({
//       key: item.label,
//       label: item.label,
//       children: item.children.map((child)=> ({
//         key: child.label,
//         label: <NavLink to={`/admin/${child.path}`}>{child.label}</NavLink>
//       }))
//     })
//   }

//   return acc;

// }, [])






// type TRoute = {
//   path: string;
//   element: ReactNode;
// }


// //* dynamically
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item)=> {
//   if(item.path && item.element){
//     acc.push({
//       path: item.path,
//       element: item.element
//     })
//   }

//   if(item?.children){
//     item.children.forEach((child)=> {
//       acc.push({
//         path: child.path,
//         element: child.element
//       })
//     })
//   }

//   return acc;

// }, [])




//! hard coded
// export const adminRoutes = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboardPage />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdminPage />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFacultyPage />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudentPage />,
//   },
// ];