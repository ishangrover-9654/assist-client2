import React from "react";
import * as Icon from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RupeeIcon from "../RupeeIcon";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

//import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSpring } from "react-spring";
import { useWindowSize } from "react-use";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  MedicineBoxTwoTone,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import createPres2 from "./medical/CreatePres2";
import findPrescription from "./medical/findPrescription";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Navbar({ pages }) {
  const windowSize = useWindowSize();

  const [spring, set, stop] = useSpring(() => ({ opacity: 0 }));
  set({ opacity: 1 });
  stop();

  return (
    <Router>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">FAQs</Menu.Item>
            <Menu.Item key="3">Settings</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  icon={<MedicineBoxTwoTone />}
                  title="Medical"
                >
                  <Menu.Item key="/createPres2">
                    <Link to="/createPres2">Create</Link>
                  </Menu.Item>
                  <Menu.Item key="/findPrescription">
                    <Link to="/findPrescription">Find</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<RupeeIcon style={{ color: "hotpink" }} />}
                  title="Finance"
                >
                  <Menu.Item key="5">Expenses</Menu.Item>
                  <Menu.Item key="6">Investment</Menu.Item>
                  <Menu.Item key="7">Income</Menu.Item>
                  <Menu.Item key="8">Reports</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <Route
                  path="/createPres2"
                  exact
                  component={createPres2}
                ></Route>
                <Route
                  path="/findPrescription"
                  exact
                  component={findPrescription}
                ></Route>
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2020 Developed by Ishan
        </Footer>
      </Layout>
    </Router>
  );
}

export default Navbar;

const navLinkProps = (path, animationDelay) => ({
  className: `fadeInUp ${window.location.pathname === path ? "focused" : ""}`,
  style: {
    animationDelay: `${animationDelay}s`,
  },
});

const activeNavIcon = (path) => ({
  style: {
    stroke: window.location.pathname === path ? "#4c75f2" : "",
  },
});
