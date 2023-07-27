import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

import user_table_item from '@/models/table_columns/user_table_colums';
import { ProTable } from '@ant-design/pro-components';

import { Button } from 'antd';

const User: React.FC = () => {
  return (
    <PageContainer>
      <ProTable
        columns={user_table_item}
        toolBarRender={() => [<Button type={'primary'}> 添加用户</Button>]}
      ></ProTable>
    </PageContainer>
  );
};

export default User;
