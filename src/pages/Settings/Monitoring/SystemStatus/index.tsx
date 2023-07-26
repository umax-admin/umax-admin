import React from 'react';
import {PageContainer,ProCard} from "@ant-design/pro-components";
import RcResizeObserver from 'rc-resize-observer';
import { Gauge } from '@ant-design/plots';

import {useState} from 'react'
const SystemStatus: React.FC = () => {
  const [percent,setPercent] = useState(0.25)
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
  return <PageContainer>
    <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
    >

      <ProCard
          title="系统信息"

          split={responsive ? 'horizontal' : 'vertical'}

          headerBordered
      >
        <ProCard title="磁盘占用" colSpan="50%">
          <Gauge {...config} />
        </ProCard>
        <ProCard title="内存占用" colSpan="50%">
          <Gauge {...config} />
        </ProCard>

      </ProCard>
    </RcResizeObserver>

  </PageContainer>;
};

export default SystemStatus;
