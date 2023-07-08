import React, { useState } from 'react'

import {Layout,Menu,Button,Col, Row} from 'antd'
import styles from './styles.less';
import type { MenuProps } from 'antd';
import {   HomeOutlined} from '@ant-design/icons';

const Header:React.FC=()=>{

    const [current, setCurrent] = useState('mail');

    const menuItems: MenuProps['items'] = [
        {
            label: '首页',
            key: 'home',
            icon: <HomeOutlined />,
        },

    ]
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return <>
        <Layout.Header className={styles.headerStyle}>

            <Row>
                <Col span={20}><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems} inlineIndent={48}/></Col>
                <Col span={4}>

                    <Button type="link"> 登录</Button>

                    </Col>
            </Row>



        </Layout.Header>

    </>
}

export default Header