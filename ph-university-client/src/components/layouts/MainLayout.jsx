import { Carousel, Layout, Menu,  } from 'antd';
import React, { createElement } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
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

  /*   const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        (icon, index) => ({
            key: String(index + 1),
            icon: createElement(icon),
            label: `nav ${index + 1}`,
        }),
    ); */

    const items = [
        {
            key: '1',
            label:"Dashboard",
        },
        {
            key: '2',
            label:"Profile"
        },
        {
            key: '3',
            label: "User Management",
            children: [
                {
                    key: '4',
                    label:"Create User",
                },
                {
                    key: '5',
                    label:"Create Admin"
                }
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
                        <Carousel afterChange={onChange}>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
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