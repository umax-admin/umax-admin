import React from 'react'
import {PageContainer,ProCard,ProTable} from "@ant-design/pro-components";

import operation_table_columns from "@/models/table_columns/operation_table_columns";

const Operation:React.FC = ()=>{

    return <PageContainer>
        <ProTable columns={operation_table_columns}></ProTable>
    </PageContainer>
}


export default Operation