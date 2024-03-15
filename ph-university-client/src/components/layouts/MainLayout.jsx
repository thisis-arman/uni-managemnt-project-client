import { Carousel, Layout, Menu,  } from 'antd';
import React, { createElement } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import  CSSProperties  from 'react';
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    const items = [
        {
            key: 'dashboard',
            label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
        },
        {
            key: 'profile',
            label:"Profile"
        },
        {
            key: 'user management',
            label: "User Management",
            children: [
                {
                    key: 'create admin',
                    label: <NavLink to={"/admin/create-admin"}>Create Admin </NavLink>,
                },
                {
                    key: 'create faculty',
                    label:<NavLink to={"/admin/create-faculty"}>Create Faculty </NavLink>,
                },
                {
                    key: 'create student',
                    label:<NavLink to={"/admin/create-student"}>Create Student </NavLink>,
                },
            ]
        }
    ]

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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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