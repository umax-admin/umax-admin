import React from 'react';
import {PageContainer} from "@ant-design/pro-components";

import {ProTable} from "@ant-design/pro-components";
import user_table_item from "@/models/table_columns/user_table_colums";
const User: React.FC = () => {
  return <PageContainer>

    <ProTable
    columns={user_table_item}
    >

    </ProTable>

  </PageContainer>;
};

export default User;
