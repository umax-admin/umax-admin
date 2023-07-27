import React from 'react';

import login_log_columns from '@/models/table_columns/login_log_columns';
import { PageContainer, ProTable } from '@ant-design/pro-components';

const LoginLog: React.FC = () => {
  return (
    <PageContainer>
      <ProTable columns={login_log_columns}></ProTable>
    </PageContainer>
  );
};

export default LoginLog;
