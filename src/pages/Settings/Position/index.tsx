import position_table_columns from '@/models/table_columns/position_table_columns';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import React from 'react';

const Position: React.FC = () => {
  return (
    <PageContainer>
      <ProTable
        columns={position_table_columns}
        toolBarRender={() => [<Button type={'primary'}> 添加岗位</Button>]}
      ></ProTable>
    </PageContainer>
  );
};

export default Position;
