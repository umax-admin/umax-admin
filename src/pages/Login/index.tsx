import { useLocation, Outlet } from 'umi';
import {

  LockOutlined,
  MobileOutlined,

  UserOutlined,

} from '@ant-design/icons';
import React, { useState } from 'react';
import {
  LoginForm,
  ProFormCaptcha,

  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { WaterMark } from '@ant-design/pro-components';

import { Alert, message, Tabs } from 'antd';
import {Footer} from "@/components/Layout/Home";

// WaterMark

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  

  return <WaterMark content="goofish-shop/umax-admin">
 
        <LoginForm>
              <Tabs
                  activeKey={type}
                  onChange={setType}
                  centered
                  items={[
                    {
                      key: 'account',
                      label:"账号"
                    },
                    {
                      key: 'mobile',
                      label:"手机号码"
                    },
                  ]}
                />

        {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={"用户名"}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={"输入密码"}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}


        {type === 'mobile' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined />,
                }}
                name="mobile"
                placeholder={"手机号码"}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.required"
                        defaultMessage="请输入手机号！"
                      />
                    ),
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.invalid"
                        defaultMessage="手机号格式错误！"
                      />
                    ),
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.captcha.required"
                        defaultMessage="请输入验证码！"
                      />
                    ),
                  },
                ]}
                onGetCaptcha={async (phone) => {
                  const result = true
                  if (!result) {
                    return;
                  }
                  message.success('获取验证码成功！验证码为：1234');
                }}
              />
            </>
          )}


    </LoginForm>
 

      <Footer/>
   
  </WaterMark>
}




export default Login