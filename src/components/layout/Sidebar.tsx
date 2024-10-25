import { Layout, Menu } from "antd";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";
import { useAppSelector } from "../../redux/hook/hook";
import { selectToken, TUser } from "../../redux/features/auth/authSlice";
import { useLocation } from "react-router-dom";
import verifyToken from "../../utils/verifyToken";
import { TSidebarItem } from "../../types";

const { Sider } = Layout;

const UserRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student'
}


const Sidebar = () => {
  const { pathname } = useLocation();
  const token = useAppSelector(selectToken);
  let user;
  if(token){
      user = verifyToken(token)
  }
  let sidebarItems: any[] = []

  switch((user as TUser)!.role){
    case UserRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, UserRole.ADMIN) as TSidebarItem[];
      break;
    case UserRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, UserRole.FACULTY) as TSidebarItem[];
      break;
    case UserRole.STUDENT:
        sidebarItems = sidebarItemsGenerator(studentPaths, UserRole.STUDENT) as TSidebarItem[];
        break;
    default:
      break;
  }

 
    return (
      <>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ height: '100vh', position: 'sticky', top: "0", left: "0" }}
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
            defaultSelectedKeys={[pathname]}
            items={sidebarItems}
          />
        </Sider>
      </>
    );
};

export default Sidebar;