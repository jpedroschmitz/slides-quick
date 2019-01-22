import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {
    Layout, Menu, Icon,
} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;

class PlaygroundBase extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider style={{background: '#4B7BEC'}}>
                    <div className="logo"><Link to="/">SlidesQuick</Link></div>
                    <Menu style={{background: '#4B7BEC'}} theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="file-text" />
                                <span>Text</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/playground-slides">
                                <Icon type="fund" />
                                <span>Slide</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{background: '#fff'}}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <h3>{this.props.title}</h3>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', background: '#FFFFFF' }}>
                        Made with ❤ by João Pedro Schmitz
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default PlaygroundBase;