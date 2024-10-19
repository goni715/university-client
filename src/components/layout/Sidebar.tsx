import { Layout, Menu } from "antd";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";
import { useAppSelector } from "../../redux/hook/hook";
import { selectUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const UserRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student'
}


const Sidebar = () => {
  const user = useAppSelector(selectUser);
  let sidebarItems;

  switch(user!.role){
    case UserRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
        sidebarItems = sidebarItemsGenerator(studentPaths, UserRole.STUDENT);
        break;
    default:
      break;
  }
 
    return (
      <>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ height: '100vh', top: "0", left: "0" }}
        >
          {/* logo part */}
          <div
            style={{
              color: "white",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>PH Uni</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["Dashboard"]}
            items={sidebarItems}
          />
        </Sider>
      </>
    );
};

export default Sidebar;