import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { Layout } from 'antd';
const { Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Layout
          className="site-layout-background"
          style={{
            padding: '24px 0',
          }}
        >
          <Sider className="site-layout-background" width={200}>
            <Header />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <Hero />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default App