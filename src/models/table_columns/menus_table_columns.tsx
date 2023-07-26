const menus_table_columns = [
    {
        title:'菜单ID',

        copyable:true,
        dataIndex:'menu_id'
    },
    {
        title:'菜单名称',
        copyable:true,
        dataIndex:'menu_name'
    },
    {
        title:'菜单创建人',
        dataIndex: 'menu_master',
        copyable:true,
    },

    {
        title:'状态',
        copyable:true,
        dataIndex:'status'
    },
    {
        title:'创建时间',
        copyable:true,
        dataIndex:'created_at'
    },
    {
        title:'更新时间',
        copyable:true,
        dataIndex:'update_time'
    }
]


export default menus_table_columns