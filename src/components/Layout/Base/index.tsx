import React from 'react'
import {Content, Header} from "antd/es/layout/layout";




//   这是一个基础的Base Layout
//  @Author  ahKevinXy
//  @Date2023-07-11 10:26:32
const Index:React.FC = (props)=>{


    return <>

    <Header> 这是头部</Header>

        <Content>
            {props.children}
        </Content>
    </>
}


export default Index