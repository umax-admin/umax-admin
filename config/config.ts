import { defineConfig } from '@umijs/max';
import zhCN from 'antd/locale/zh_CN';
import defaultSettings from './defaultSettings';
import router from './router';
export default defineConfig({
  antd: {
    configProvider: {
      locale: zhCN, // 配置中文
    },
    // dark: true,
    // compact: true,
    // dark: true,
  },
  clientLoader: {},
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
    locale: true,
    ...defaultSettings,
  },
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    'root-entry-name': 'variable',
  },
  ignoreMomentLocale: true,
  routes: router,
  fastRefresh: true,
  npmClient: 'yarn',

  analytics: {
    ga_v2: 'G-QTKV715HW0', // google analytics 的 key (GA 4)
  },

  // copy: ["README.md", "dist/"],
  metas: [{ name: 'description', content: '最好的后台管理' }],
  mountElementId: 'umax-admin',
  // writeToDisk: true
  // plugins.push(['umi-plugin-antd-theme', themePluginConfig])
});
