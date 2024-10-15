import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import CreateAdminPage from "../pages/admin/CreateAdminPage";
import CreateFacultyPage from "../pages/admin/CreateFacultyPage";
import CreateStudentPage from "../pages/admin/CreateStudentPage";

export const adminPaths = [
  {
    label: "Dashboard",
    path: "dashboard",
    element: <AdminDashboardPage />,
  },
  {
    label: "User Management",
    children: [
      {
        label: "Create Admin",
        path: "create-admin",
        element: <CreateAdminPage />,
      },
      {
        label: "Create Faculty",
        path: "create-faculty",
        element: <CreateFacultyPage />,
      },
      {
        label: "Create Student",
        path: "create-student",
        element: <CreateStudentPage />,
      },
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