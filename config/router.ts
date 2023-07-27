const developerRouter = [
  {
    name: '对象存储配置',
    path: 'oss',
    component: 'Settings/Developer/Oss',
  },
  {
    name: '企业微信配置',
    path: 'qwx',
    component: 'Settings/Developer/Qwx',
  },
];

const dashboardRouter = [
  {
    name: '用户分析页',
    path: 'user',
    component: 'Dashboard/User',
  },
  {
    name: '位置分析页',
    path: 'map',
    component: 'Dashboard/UserMap',
  },
];

const sysSettings = [
  {
    name: '用户管理',

    path: '/settings/user',
    component: 'Settings/User',
  },
  {
    name: '角色管理',

    path: '/settings/role',
    component: 'Settings/Role',
  },
  {
    name: '岗位管理',

    path: '/settings/position',
    component: 'Settings/Position',
  },
  {
    name: '菜单管理',

    path: '/settings/menus',
    component: 'Settings/Menus',
  },
  {
    name: '个人设置',

    path: '/settings/person',
    component: 'Settings/Person',
  },
  {
    name: '系统管理',

    path: '/settings/system',
    component: 'Settings/System',
  },
  // {
  //     name: '字典管理',
  //
  //     path: '/settings/dictionary',
  //     component: 'Settings/Dictionary',
  // },

  {
    name: '系统监控',
    path: '/settings/monitoring',
    routes: [
      {
        name: '系统状态',

        path: '/settings/monitoring/system_status',
        component: 'Settings/Monitoring/SystemStatus',
      },
      {
        name: '在线用户',
        path: 'user',
        component: 'Settings/Monitoring/User',
      },
      {
        name: '登录日志',
        path: 'login_log',
        component: 'Settings/Monitoring/LoginLog',
      },
      {
        name: '操作日志',
        path: 'operaction_log',
        component: 'Settings/Monitoring/Operation',
      },
    ],
  },
  {
    name: '开发者配置',
    path: '/settings/developer',
    routes: developerRouter,
  },
];

const router = [
  //默认页面
  {
    path: '/',
    component: 'Index',
    layout: false,
  },
  {
    name: '首页',
    path: '/home',
    icon: 'home',
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
    name: '仪表盘',
    path: '/dashboard',
    icon: 'dashboard',
    // component: 'Bank',
    routes: dashboardRouter,
  },
  {
    name: '设置',
    path: '/settings',
    icon: 'setting',
    // component: 'Settings',
    routes: sysSettings,
  },
];

export default router;
