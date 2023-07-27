const menus_table_columns = [
  {
    title: '菜单ID',

    copyable: true,
    dataIndex: 'menu_id',
  },
  {
    title: '菜单名称',
    copyable: true,
    dataIndex: 'menu_name',
  },
  {
    title: '路径',
    dataIndex: 'menu_path',
    copyable: true,
  },
  {
    title: '页面',
    dataIndex: 'menu_component',
    copyable: true,
  },

  {
    title: '是否隐藏',
    copyable: true,
    dataIndex: 'status',
  },
  {
    title: '排序',
    copyable: true,
    dataIndex: 'orders',
  },
  {
    title: '创建时间',
    copyable: true,
    dataIndex: 'created_at',
  },
  {
    title: '更新时间',
    copyable: true,
    dataIndex: 'update_time',
  },
];

export default menus_table_columns;
