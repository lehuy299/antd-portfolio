import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

const items = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'About',
    key: 'about',
  },
  {
    label: 'Resume',
    key: 'resume',
  },
  {
    label: 'Services',
    key: 'services',
  },
  {
    label: 'Skills',
    key: 'skills',
  },
  {
    label: 'Work',
    key: 'work',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
];

const Header = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <div style={{

        }}>
        <div>
            LOGO
        </div>
        <Menu 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="inline" 
            items={items} 
        />
    </div>
};

export default Header;