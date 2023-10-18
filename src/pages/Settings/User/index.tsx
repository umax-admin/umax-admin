import { PageContainer } from '@ant-design/pro-components';
import React,{useState,useEffect} from 'react';

import user_table_item from '@/models/table_columns/user_table_colums';
import { ProTable,ModalForm,ProForm,ProFormText } from '@ant-design/pro-components';

import { Button,Modal,message } from 'antd';

const User: React.FC = () => {
  const [isModalOpen,setIsModalOpen]= useState(false)
  const handleOk = ()=>{
    setIsModalOpen(false)
  }
  const handleCancel = ()=>{
    setIsModalOpen(false)
  }
  return (
    <PageContainer>
      <ProTable
        columns={user_table_item}
        toolBarRender={() => [<Button type={'primary'} key='submit_user' onClick={()=>{
          setIsModalOpen(true)
        }}> 添加用户</Button>]}
      ></ProTable>

      <ModalForm title="添加用户" open={isModalOpen} onFinish={async (values) => {
        
        console.log(values.name);
        message.success('提交成功');
        return true;
      }}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => {
          setIsModalOpen(false)
        },
      }}
      // layout='inline'
      >
        <ProForm.Group >
          <ProFormText
            width="md"
            name="name"
            label="用户名"
            tooltip="最长为 24 位"
            placeholder="请输入用户名"
            required
          />
        </ProForm.Group>
        <ProForm.Group >
          <ProFormText
            width="md"
            name="password"
            label="密码"
            tooltip="最长为 24 位"
            placeholder="请输入用户名"
            required
          />
        </ProForm.Group>
        <ProForm.Group >
          <ProFormText
            width="md"
            name="mobile"
            label="手机号码"
            tooltip="最长为 13 位"
            placeholder="请输入手机号码"
            required
          />
        </ProForm.Group>
        <ProForm.Group >
          <ProFormText
            width="md"
            name="email"
            label="邮箱"
            tooltip="最长为 64 位"
            placeholder="请输入邮箱"
            required
          />
        </ProForm.Group>
      </ModalForm>
    </PageContainer>
  );
};

export default User;
