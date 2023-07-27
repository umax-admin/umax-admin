import { Content, Header } from 'antd/es/layout/layout';
import React from 'react';

//   这是一个基础的Base Layout
//  @Author  ahKevinXy
//  @Date2023-07-11 10:26:32
const Index: React.FC = (props: any) => {
  return (
    <>
      <Header> 这是头部</Header>

      <Content>{props.children}</Content>
    </>
  );
};

export default Index;
