import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import { FundProjectionScreenOutlined, FileOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default function PlaygroundBase({ children, title }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={true}
        style={{ background: "#fff" }}
      >
        <div className="logo">
          <Link to="/">
            <svg
              width="32"
              height="28"
              viewBox="0 0 48 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2415 0H32.6816L23.9964 42H13.5563L22.2415 0Z"
                fill="#5965E0"
              />
              <path
                d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z"
                fill="#5965E0"
              />
              <path
                d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z"
                fill="#5965E0"
              />
            </svg>
          </Link>
        </div>
        <Menu style={{ background: "#fff" }} mode="inline">
          <Menu.Item
            key="1"
            icon={
              <FileOutlined style={{ fontSize: "24px", color: "#5965E0" }} />
            }
          >
            <Link to="/">Write</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <FundProjectionScreenOutlined
                style={{ fontSize: "24px", color: "#5965E0" }}
              />
            }
          >
            <Link to="/slides">Slides</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "inherit" }} />
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <h3>{title}</h3>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "inherit" }}>
          Made with ❤ by{" "}
          <a
            href="https://joaopedro.dev?utm_source=slidesquick"
            target="_blank"
            rel="noopener noreferrer"
          >
            João Pedro Schmitz
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
}

PlaygroundBase.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
