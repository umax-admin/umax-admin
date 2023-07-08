import React ,{ useState } from 'react';


import { PageContainer,WaterMark ,ProCard} from '@ant-design/pro-components';

import{Button,Statistic} from 'antd'


import {
    Footer,
    Header
} from '@/components/Layout/Home'
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
          <Statistic title="平均访问时间" value={112893.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="留存率" value={93} suffix="/ 100" />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="总统计" value={112893.0} />
        </ProCard>
      </ProCard.Group>
   
        </PageContainer>


        <Footer></Footer>
    </WaterMark>
}


export default Index