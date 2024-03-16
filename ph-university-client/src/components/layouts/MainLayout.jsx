import {  Layout, Menu,  } from 'antd';
import React from 'react';
import {  Outlet } from 'react-router-dom';
// import  CSSProperties  from 'react';
const { Header, Content, Footer, Sider } = Layout;
import adminPaths from "../../routes/admin.routes"

import {sidebarGenerator} from '../../utils/sidebarGenerator'

const MainLayout = () => {
    

    return (
        <Layout style={{height:"100vh"}}>
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
                <div className="demo-logo-vertical" />
                <div>
                    <h1 style={{color:"white",textAlign:"center", margin:"10px"}}>PH UNi</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarGenerator(adminPaths,"admin")} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            
                        }}
                    >
                       <Outlet/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    ©{new Date().getFullYear()}  All Rights Reserved;
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;