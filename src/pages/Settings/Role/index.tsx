import React from 'react';
import {PageContainer, ProTable} from "@ant-design/pro-components";




import rule_table_columns from "@/models/table_columns/rule_table_columns";

const Role: React.FC = () => {
  return <PageContainer>

    <ProTable
        columns={rule_table_columns}
    >

    </ProTable>
  </PageContainer>;
};

export default Role;
