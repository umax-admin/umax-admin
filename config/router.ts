
const developerRouter = [
    {
        name:'对象存储配置',
        path:'oss',
        component:'Settings/Developer/Oss'
    },{
        name:'企业微信配置',
        path:'qwx',
        component:'Settings/Developer/Qwx'
    }
]

const dashboardRouter = [
    {
        name:'用户分析页',
        path:'user',
        component:'Dashboard/User'
    }
]

const sysSettings =[
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
        name:'系统监控',
        path:'/settings/monitoring',
        routes:[
            {
                name: '系统状态',

                path: '/settings/monitoring/system_status',
                component: 'Settings/Monitoring/SystemStatus',
            },
            {
                name:'在线用户',
                path:'user',
                component:'Settings/Monitoring/User'
            }
        ]
    },
    {
        name:'开发者配置',
        path:'/settings/developer',
        routes: developerRouter
    }
]

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
        // component: 'Bank',
        routes: dashboardRouter
    },
    {
        name: '设置',
        path: '/settings',
        // component: 'Settings',
        routes: sysSettings
    },
]


export default router