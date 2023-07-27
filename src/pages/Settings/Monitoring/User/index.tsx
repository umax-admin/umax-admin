import { PageContainer, ProCard } from '@ant-design/pro-components';
import React from 'react';
import CountUp from 'react-countup';

import { Statistic } from 'antd';

const { Countdown } = Statistic;
const formatter = (value: number) => <CountUp end={value} separator="," />;

const User: React.FC = () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

  return (
    <PageContainer>
      <ProCard>
        <Statistic title="人数" formatter={formatter} value={112893} />
      </ProCard>
      <ProCard>
        <Countdown title="结束时间" value={deadline} />
      </ProCard>
    </PageContainer>
  );
};

export default User;
