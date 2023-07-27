import { Line } from '@ant-design/plots';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import React from 'react';

import { useEffect, useState } from 'react';
const SystemStatus: React.FC = () => {
  const [percent, setPercent] = useState(0.25);
  const [data, setData] = useState([]);

  const [responsive, setResponsive] = useState(false);
  const config = {
    percent: percent,
    range: {
      color: '#30BF78',
    },

    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => ` ${(percent * 100).toFixed(0)}%`,
        style: {
          color: 'rgba(0,0,0,0.65)',
        },
      },
    },
  };

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const lineConfig = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  return (
    <PageContainer>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard title="平均负载">
          <Line {...lineConfig} />
        </ProCard>
        <ProCard
          title="系统信息"
          split={responsive ? 'horizontal' : 'vertical'}
          bordered
        >
          <ProCard title="CPU" colSpan="50%" bordered>
            <Line {...lineConfig} />
          </ProCard>
          <ProCard title="内存" colSpan="50%" bordered>
            <Line {...lineConfig} />
          </ProCard>
        </ProCard>
        <ProCard
          title="系统信息"
          split={responsive ? 'horizontal' : 'vertical'}
          bordered
        >
          <ProCard title="磁盘IO" colSpan="50%" bordered>
            <Line {...lineConfig} />
          </ProCard>
          <ProCard title="网络IO" colSpan="50%" bordered>
            <Line {...lineConfig} />
          </ProCard>
        </ProCard>
      </RcResizeObserver>
    </PageContainer>
  );
};

export default SystemStatus;
