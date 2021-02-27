import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FileTextFilled, FundFilled } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default function PlaygroundBase({ children, title }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ background: "#4B7BEC" }}>
        <div className="logo">
          <Link to="/">SlidesQuick</Link>
        </div>
        <Menu style={{ background: "#4B7BEC" }} theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <FileTextFilled />
              <span>Text</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/playground-slides">
              <FundFilled />
              <span>Slide</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ background: "#fff" }}>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <h3>{title}</h3>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#FFFFFF" }}>
          Made with ❤ by João Pedro Schmitz
        </Footer>
      </Layout>
    </Layout>
  );
}

PlaygroundBase.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};