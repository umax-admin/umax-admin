import React, { useState } from 'react';

import { HomeOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Button, Col, Layout, Menu, Row } from 'antd';
import styles from './styles.less';
const Header: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const menuItems: MenuProps['items'] = [
    {
      label: '首页',
      key: 'home',
      icon: <HomeOutlined />,
    },
  ];
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Layout.Header className={styles.headerStyle}>
        <Row>
          <Col span={20}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={menuItems}
              inlineIndent={48}
            />
          </Col>
          <Col span={4}>
            <Button
              type="link"
              onClick={() => {
                history.push('/login');
              }}
            >
              {' '}
              登录
            </Button>
          </Col>
        </Row>
      </Layout.Header>
    </>
  );
};

export default Header;
