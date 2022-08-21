import React from 'react'
import './App.scss'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import { Layout, Space } from 'antd';
import About from './components/About';
import Education from './components/Education';
const { Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout
      style={{background: 'white'}}
    >
      <Content
        style={{
          margin: '0 auto',
        }}
      >
        <Layout
          className="site-layout-background"
        >
          <Sider className="site-layout-background" 
            style={{
              padding: '30px 0px 30px 0',

            }}
            width={330}>
            <Sidebar />
          </Sider>
          <Content
            style={{
              minHeight: 280,
              maxWidth: '870px',
              width: '100vw',
            }}
          >
          <Hero />
          <Space direction="vertical" size={60} style={{padding: '60px 38px 0 38px'}}>
            <About />
            <Education />
          </Space>
            
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default App