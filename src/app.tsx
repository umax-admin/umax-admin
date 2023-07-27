import { AvatarDropdown, AvatarName } from '@/components';
import { Footer } from '@/components/Layout/Home';
import {
  BellOutlined,
  CommentOutlined,
  PlusOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import { FloatButton } from 'antd';
import { useState } from 'react';
import defaultSettings from '../config/defaultSettings';

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  use_name?: string;
  avatar?: string;
}> {
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    return {
      settings: defaultSettings as Partial<LayoutSettings>,
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      user_name: 'umax-admin',
    };
  }
  // 获取用户信息

  return {
    // fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    user_name: 'umax-admin',
  };
}
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  const [timeNow, setTimeNow] = useState('');
  // useEffect(()=>{
  //   const t =   setInterval(()=>{
  //     setTimeNow(dayjs().format(' YYYY-MM-DD	  HH:mm:ss  '))
  //
  //   },1000)
  //   return ()=>{
  //     clearTimeout(t)
  //   }
  // },[])
  return {
    actionsRender: () => [<BellOutlined />],
    avatarProps: {
      src: '',
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.user_name,
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
      console.log(location.pathname);
    },
    menuHeaderRender: undefined,
    token: {
      bgLayout: 'red',
    },
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          <FloatButton.Group
            trigger="click"
            type="primary"
            style={{ right: 24 }}
            icon={<WindowsOutlined />}
          >
            <FloatButton icon={<PlusOutlined />} />
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
          </FloatButton.Group>
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
