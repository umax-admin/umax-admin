import ProForm, {
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { Input, message } from 'antd';
import React from 'react';

const validatorPhone = (
  rule: any,
  value: string[],
  callback: (message?: string) => void,
) => {
  if (!value[0]) {
    callback('Please input your area code!');
  }
  if (!value[1]) {
    callback('Please input your phone number!');
  }
  callback();
};
const BaseView: React.FC = () => {
  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };
  return (
    <>
      <ProForm
        layout="vertical"
        onFinish={handleFinish}
        submitter={{
          searchConfig: {
            submitText: '更新基本信息',
          },
          render: (_, dom) => dom[1],
        }}
      >
        <ProFormText
          width="md"
          name="email"
          label="邮箱"
          rules={[
            {
              required: true,
              message: '请输入您的邮箱!',
            },
          ]}
        />
        <ProFormText
          width="md"
          name="name"
          label="昵称"
          rules={[
            {
              required: true,
              message: '请输入您的昵称!',
            },
          ]}
        />

        <ProFormTextArea
          name="profile"
          label="个人简介"
          rules={[
            {
              required: true,
              message: '请输入个人简介!',
            },
          ]}
          placeholder="个人简介"
        />
        <ProFormSelect
          width="sm"
          name="country"
          label="国家/地区"
          rules={[
            {
              required: true,
              message: '请输入您的国家或地区!',
            },
          ]}
          options={[
            {
              label: '中国',
              value: 'China',
            },
          ]}
        />
        <ProFormFieldSet
          name="phone"
          label="联系电话"
          rules={[
            {
              required: true,
              message: '请输入您的联系电话!',
            },
            { validator: validatorPhone },
          ]}
        >
          <Input />
          <Input />
        </ProFormFieldSet>
      </ProForm>
    </>
  );
};

export default BaseView;
