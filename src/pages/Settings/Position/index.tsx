import React from 'react';
import {PageContainer, ProTable} from "@ant-design/pro-components";
import position_table_columns from "@/models/table_columns/position_table_columns";

const Position: React.FC = () => {
  return <PageContainer>
    <ProTable
        columns={position_table_columns}
    >

    </ProTable>
  </PageContainer>;
};

export default Position;
