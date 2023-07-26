import React from 'react';
import {PageContainer, ProTable} from "@ant-design/pro-components";




import rule_table_columns from "@/models/table_columns/rule_table_columns";
import {Button} from "antd";

const Role: React.FC = () => {
  return <PageContainer>

    <ProTable
        columns={rule_table_columns}

        toolBarRender ={()=>[
          <Button type={'primary'}> 添加角色</Button>
        ]}
    >

    </ProTable>
  </PageContainer>;
};

export default Role;
