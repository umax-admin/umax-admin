import  React from 'react'

import {PageContainer,ProCard,ProTable} from "@ant-design/pro-components";
import login_log_columns from "@/models/table_columns/login_log_columns";

const LoginLog:React.FC =()=>{

    return <PageContainer>

        <ProTable
            columns={login_log_columns}
        ></ProTable>
    </PageContainer>
}

export default LoginLog