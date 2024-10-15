import { Layout, Menu, MenuProps, theme } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from "react";

const { Header, Content, Footer, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//       key: String(index + 1),
//       icon: createElement(icon),
//       label: `nav ${index + 1}`,
//     }),
//   );


const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <UploadOutlined/>,
    label: 'Nav 01'
  },
  {
    key: '2',
    icon: <UploadOutlined/>,
    label: 'Nav 02',
    children: [
      {
        key:'sub-1',
        label: 'sub 01',
      },
      {
        key:'sub-2',
        label: 'sub 02',
      },
    ]
  },
  {
    key: '3',
    icon: <UploadOutlined/>,
    label: 'Nav 03'
  },
  {
    key: '4',
    icon: <UploadOutlined/>,
    label: 'Nav 04'
  }
]



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
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
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
              defaultSelectedKeys={["4"]}
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
                content
                <h1>This is content part</h1>
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