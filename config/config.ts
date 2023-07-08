import { defineConfig } from '@umijs/max';
import zhCN from 'antd/locale/zh_CN';

export default defineConfig({
    antd: {
        configProvider: {
            locale: zhCN // 配置中文
        },
        // dark: true,
    },

    exportStatic: {


    },
    base: "/umax-admin/",
    publicPath: "/umax-admin/",
    // hash: true,
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'Umax Admin',
    },

    routes: [
        //默认页面
        {
            path: '/',
            component: 'Index',
            layout: false,
        },
        {
            name: '首页',
            path: '/home',
            component: 'Home',
        },

        {
            name: '登录',
            path: '/login',
            component: 'Login',
            exact: true,
            layout: false,

        },
        {
            name: '银行',
            path: '/bank',
            component: 'Bank'
        },


    ],
    npmClient: 'yarn',

    analytics: {
        ga_v2: 'G-RXDN42SD0T', // google analytics 的 key (GA 4)
    },
    copy: ["README.md", "dist/"],
    metas: [
        { name: 'keywords', content: 'umi, umijs' },
        { name: 'description', content: '服务最好的闲鱼商铺' }

    ],
    // mountElementId: 'umax-admin',
    // writeToDisk: true


});