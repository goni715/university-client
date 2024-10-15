import { Layout, Menu, MenuProps, theme } from "antd";
import { Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/adminRoutes";

const { Header, Content, Footer, Sider } = Layout;



// const items: MenuProps['items'] = [
//   {
//     key: 'Dashboard',
//     icon: <UploadOutlined/>,
//     label: <NavLink to="/admin/dashboard">Dashbaord</NavLink>
//   },
//   {
//     key: 'user',
//     icon: <UploadOutlined/>,
//     label: 'User Management',
//     children: [
//       {
//         key:'/create-admin',
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key:'/create-faculty',
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key:'/create-student',
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//     ]
//   }
// ]


const items: MenuProps['items'] = adminSidebarItems;


const MainLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();


    return (
      <>
        <Layout style={{ height: '100vh' }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              //console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              //console.log(collapsed, type);
            }}
          >
            {/* logo part */}
            <div 
              style={{
                color: 'white',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
               <h1>PH Uni</h1>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["Dashboard"]}
              items={items}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
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
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </>
    );
};

export default MainLayout;