import React,{useState}from 'react'
import {ProTable,PageContainer} from "@ant-design/pro-components";
import menus_table_columns from "@/models/table_columns/menus_table_columns";
import {Button} from "antd";


const Menus:React.FC = ()=>{


    return <PageContainer>
        <ProTable
            columns={menus_table_columns}
            toolBarRender ={()=>[
                <Button type={'primary'}> 添加主菜单</Button>
            ]}
        >

        </ProTable>
    </PageContainer>
}

export default Menus