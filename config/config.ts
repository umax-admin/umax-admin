import { defineConfig } from '@umijs/max';
import zhCN from 'antd/locale/zh_CN';

import router from './router'
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
  },
  theme:{
    primaryColor:'#25b864'
  },
  routes:router,
  npmClient: 'yarn',

  analytics: {
    ga_v2: 'G-QTKV715HW0', // google analytics 的 key (GA 4)
  },
  // copy: ["README.md", "dist/"],
  metas: [{ name: 'description', content: '服务最好的闲鱼商铺' }],
  // mountElementId: 'umax-admin',
  // writeToDisk: true
});
