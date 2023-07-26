
import {PageContainer} from "@ant-design/pro-components";

import React, { useState, useRef, useLayoutEffect } from 'react';

import {Button, Menu} from 'antd';
import styles from './style.less';

const { Item } = Menu;
import { GridContent } from '@ant-design/pro-layout';
const Person:React.FC =()=>{


    const [initConfig, setInitConfig] = useState<SettingsState>({
        mode: 'inline',
        selectKey: 'base',
    });

    const menuMap: Record<string, React.ReactNode> = {
        base: '基本设置',
        security: '安全设置',
        binding: '账号绑定',
        notification: '新消息通知',
    };


    const resize = () => {
        requestAnimationFrame(() => {
            if (!dom.current) {
                return;
            }
            let mode: 'inline' | 'horizontal' = 'inline';
            const { offsetWidth } = dom.current;
            if (dom.current.offsetWidth < 641 && offsetWidth > 400) {
                mode = 'horizontal';
            }
            if (window.innerWidth < 768 && offsetWidth > 400) {
                mode = 'horizontal';
            }
            setInitConfig({ ...initConfig, mode: mode as SettingsState['mode'] });
        });
    };
    const dom = useRef<HTMLDivElement>();

    useLayoutEffect(() => {
        if (dom.current) {
            window.addEventListener('resize', resize);
            resize();
        }
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [dom.current]);


    const getMenu = () => {
        return Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>);
    };

    const renderChildren = () => {
        const { selectKey } = initConfig;
        switch (selectKey) {
            case 'base':
                return <Button />;
            case 'security':
                return <Button />;
            case 'binding':
                return <Button />;
            case 'notification':
                return <Button />;
            default:
                return null;
        }
    };
    return <PageContainer>

        <GridContent>
            <div
                className={styles.main}
                ref={(ref) => {
                    if (ref) {
                        dom.current = ref;
                    }
                }}
            >
                <div className={styles.leftMenu}>
                    <Menu
                        mode={initConfig.mode}
                        selectedKeys={[initConfig.selectKey]}
                        onClick={({ key }) => {
                            setInitConfig({
                                ...initConfig,
                                selectKey: key as SettingsStateKeys,
                            });
                        }}
                    >
                        {getMenu()}
                    </Menu>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{menuMap[initConfig.selectKey]}</div>
                    {renderChildren()}
                </div>
            </div>
        </GridContent>
    </PageContainer>
}

export default Person