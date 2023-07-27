import React, { useEffect, useState } from 'react';

import { PageContainer, ProCard, WaterMark } from '@ant-design/pro-components';

import { Layout, Statistic } from 'antd';

import { Footer, Header } from '@/components/Layout/Home';
import dayjs from 'dayjs';
import CountUp from 'react-countup';
const { Divider } = ProCard;
const formatter = (value: number) => <CountUp end={value} separator="," />;

const Index: React.FC = () => {
  const [responsive, setResponsive] = useState(false);
  const [timeNow, setTimeNow] = useState('');

  useEffect(() => {
    const t = setInterval(() => {
      setTimeNow(dayjs().format(' YYYY-MM-DD	  HH:mm:ss  '));
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);
  return (
    <WaterMark content={['    umax-admin', timeNow]} style={{}}>
      <Layout
        style={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Layout.Content style={{ padding: '0 50px' }}>
          <PageContainer>
            <ProCard.Group
              title="核心指标"
              direction={responsive ? 'column' : 'row'}
            >
              <ProCard>
                <Statistic
                  title="今日UV"
                  value={79.0}
                  precision={2}
                  formatter={formatter}
                />
              </ProCard>
              <Divider type={responsive ? 'horizontal' : 'vertical'} />
              <ProCard>
                <Statistic
                  title="平均访问时间"
                  value={112893.0}
                  precision={2}
                  formatter={formatter}
                />
              </ProCard>
              <Divider type={responsive ? 'horizontal' : 'vertical'} />
              <ProCard>
                <Statistic title="留存率" value={93} suffix="/ 100" />
              </ProCard>
              <Divider type={responsive ? 'horizontal' : 'vertical'} />
              <ProCard>
                <Statistic
                  title="总统计"
                  value={112893.0}
                  formatter={formatter}
                />
              </ProCard>
            </ProCard.Group>
          </PageContainer>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </WaterMark>
  );
};

export default Index;
