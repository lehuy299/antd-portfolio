import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Typography, Menu, Avatar, Button, Space } from 'antd';
import { LinkedinOutlined, SkypeOutlined, InstagramOutlined, FacebookOutlined, HomeOutlined, UserOutlined, SnippetsOutlined, UnorderedListOutlined, CustomerServiceOutlined, AuditOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: 'About',
    key: 'about',
    icon: <UserOutlined />
  },
  {
    label: 'Resume',
    key: 'resume',
    icon: <SnippetsOutlined />
  },
  {
    label: 'Services',
    key: 'services',
    icon: <CustomerServiceOutlined />
  },
  {
    label: 'Skills',
    key: 'skills',
    icon: <UnorderedListOutlined />
  },
  {
    label: 'Work',
    key: 'work',
    icon: <AuditOutlined />
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <MailOutlined />
  },
];

const Header = () => {
  const [current, setCurrent] = useState('');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center',
          position: 'fixed',
          width: '330px',
        }}>
        <Avatar style={{border: '8px solid #2c2f3f'}} src="images/huy_face.PNG" size={160}/>
        <Title style={{color: "white"}} level={3}>Huy Tran Huu Le</Title>
        <Space size="middle">
          <Button size='large' shape="circle" icon={<FacebookOutlined />} />
          <Button size='large' shape="circle" icon={<InstagramOutlined />} />
          <Button size='large' shape="circle" icon={<SkypeOutlined />} />
          <Button size='large' shape="circle" icon={<LinkedinOutlined />} />
        </Space>
        <Menu 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="inline" 
            items={items}
            theme="dark" 
            style={{
              background: 'none',
              fontSize: '18px',
            }}
        />
    </div>
};

export default Header;