import { Layout, Menu } from "antd";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/adminRoutes";

const { Sider } = Layout;


const Sidebar = () => {
    return (
      <>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
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
            items={sidebarItemsGenerator(adminPaths, 'admin')}
          />
        </Sider>
      </>
    );
};

export default Sidebar;