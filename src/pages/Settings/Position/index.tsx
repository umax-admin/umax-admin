import React from 'react';
import {PageContainer, ProTable} from "@ant-design/pro-components";
import position_table_columns from "@/models/table_columns/position_table_columns";
import {Button} from "antd";

const Position: React.FC = () => {
  return <PageContainer>
    <ProTable
        columns={position_table_columns}
        toolBarRender ={()=>[
          <Button type={'primary'}> 添加岗位</Button>
        ]}
    >

    </ProTable>
  </PageContainer>;
};

export default Position;
