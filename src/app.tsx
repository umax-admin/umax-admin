import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import defaultSettings from '../config/defaultSettings';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';

import { history, Link } from '@umijs/max';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;

}> {
    // 如果不是登录页面，执行
    const { location } = history;
    if (location.pathname !== loginPath) {
     
      return {
      
       
        settings: defaultSettings as Partial<LayoutSettings>,
      };
    }
  return {
   // fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    waterMarkProps: {
      content: "goofish-shop/umax-admin",
    },
   
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  }
}