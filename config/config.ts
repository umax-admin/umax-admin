import { defineConfig } from '@umijs/max';
import zhCN from 'antd/locale/zh_CN';

export default defineConfig({
  antd: {
    configProvider: {
      locale: zhCN, // 配置中文
    },
    // dark: true,
  },
  exportStatic: {},
  base: '/umax-admin/',
  publicPath: '/umax-admin/',
  // hash: true,
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Umax',
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
      component: 'Bank',
    },
    {
      name: '设置',
      path: '/settings',
      // component: 'Settings',
      routes: [
        {
          name: '用户设置',

          path: '/settings/user',
          component: 'Settings/User',
        },
        {
          name: '角色设置',

          path: '/settings/role',
          component: 'Settings/Role',
        },
        {
          name: '岗位设置',

          path: '/settings/position',
          component: 'Settings/Position',
        },
        {
          name: '系统设置',

          path: '/settings/system',
          component: 'Settings/System',
        },
        {
          name: '系统状态',

          path: '/settings/system_status',
          component: 'Settings/SystemStatus',
        },
      ],
    },
  ],
  npmClient: 'yarn',

  analytics: {
    ga_v2: 'G-QTKV715HW0', // google analytics 的 key (GA 4)
  },
  // copy: ["README.md", "dist/"],
  metas: [{ name: 'description', content: '服务最好的闲鱼商铺' }],
  // mountElementId: 'umax-admin',
  // writeToDisk: true
});
