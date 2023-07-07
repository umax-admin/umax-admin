import { defineConfig } from '@umijs/max';
import zhCN from 'antd/locale/zh_CN';

export default defineConfig({
    antd: {
        configProvider: {
            locale: zhCN // 配置中文
        },
        // dark: true,
    },
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'My Admin',
    },
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: '首页',
            path: '/home',
            component: './Home',
        },
        {
            name: '权限演示',
            path: '/access',
            target: '_blank',
            component: './Access',
        },
        {
            name: '登录',
            path: '/login',
            component: './Login',
            exact: true,
            layout: false,

        },
        {
            name: '银行',
            path: '/bank',
            component: './Bank'
        },
        {
            name: ' CRUD 示例',
            path: '/table',
            component: './Table',
        },

    ],
    npmClient: 'yarn',
});