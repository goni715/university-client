import { Button, Layout,theme } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook/hook";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content} = Layout;


const MainLayout = () => {
  const dispatch = useAppDispatch();
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    const handleLogout = ()=> {
      dispatch(logout())
    }


    return (
      <>
        <Layout style={{ height: '100vh' }}>
          <Sidebar/>
          <Layout>
            <Header> 
              <Button onClick={handleLogout}>Logout</Button> 
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet/>
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
};

export default MainLayout;