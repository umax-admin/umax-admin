import React ,{ useState } from 'react';


import { PageContainer,WaterMark ,ProCard} from '@ant-design/pro-components';

import{Button,Statistic} from 'antd'

import {Header} from '@/components/Layout/Home'
const { Divider } = ProCard;

const Index:React.FC =()=>{
    const [responsive, setResponsive] = useState(false);

    return <WaterMark
        content="goofish-shop/umax-admin"
    >
    
    <Header></Header>
     <PageContainer
   
   
  
  >
     <ProCard.Group title="核心指标" direction={responsive ? 'column' : 'row'}>
        <ProCard>
          <Statistic title="今日UV" value={79.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="冻结金额" value={112893.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="信息完整度" value={93} suffix="/ 100" />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="冻结金额" value={112893.0} />
        </ProCard>
      </ProCard.Group>
   
        </PageContainer>
    </WaterMark>
}


export default Index