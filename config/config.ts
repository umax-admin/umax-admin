import { defineConfig } from '@umijs/max';
import zhCN from 'antd/locale/zh_CN';

export default defineConfig({
    antd: {
        configProvider: {
            locale: zhCN // 配置中文
        },
        // dark: true,
    },
    base: "/umax-admin/",
    publicPath: "/umax-admin/",
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'My Admin',
    },
    headScripts: [
        "https://gw.alipayobjects.com/os/lib/react/18.1.0/umd/react.production.min.js",
        "https://gw.alipayobjects.com/os/lib/react-dom/18.1.0/umd/react-dom.production.min.js",
        "https://lib.baomitu.com/axios/0.27.2/axios.min.js",
        "https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js",
    ],
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