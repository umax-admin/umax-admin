import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import {SettingOutlined,BellOutlined} from '@ant-design/icons'
import  {AvatarDropdown, AvatarName } from '@/components';
import {useState,useEffect} from 'react'
import { history } from '@umijs/max';
import {Footer} from "@/components/Layout/Home";
// const isDev = process.env.NODE_ENV === 'development';
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
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {

  return {
    actionsRender:() => [<BellOutlined />,<>邮件</>],
    avatarProps: {
      src:'',
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      }},
    waterMarkProps: {
      content: 'umax-admin',
    },
    // disableContentMargin: false,
    // loading:true,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
      console.log(location.pathname)
    },
    menuHeaderRender: undefined,
    token:{
      bgLayout:'red'
    },
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}

          <SettingDrawer

              disableUrlParams
              enableDarkTheme={true}
              hideHintAlert={true}
              hideCopyButton={true}


              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
          />


        </>
      );
    },
    ...initialState?.settings,
  };
};
