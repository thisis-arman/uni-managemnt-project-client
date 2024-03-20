import {  Button, Layout,  } from 'antd';
import React from 'react';
import {  Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
import Sidebar from './Sidebar';
import {useAppDispatch} from '../../redux/hooks'
import { logout } from '../../redux/features/auth/authSlice';


const MainLayout = () => {

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout())
        
    }
    
    return (
        <Layout style={{height:"100vh"}}>
            <Sidebar/>
            <Layout>
                <Header style={{ padding: 0 }} onClick={handleLogout} >
                    <Button>logout</Button>
                </Header>
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