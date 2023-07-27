const position_table_columns = [
  {
    title: '岗位ID',

    copyable: true,
    dataIndex: 'position_id',
  },
  {
    title: '岗位名称',
    copyable: true,
    dataIndex: 'position_name',
  },
  {
    title: '岗位负责人',
    dataIndex: 'position_master',
    copyable: true,
  },
  {
    title: '创建时间',
    copyable: true,
    dataIndex: 'created_at',
  },
  {
    title: '状态',
    copyable: true,
    dataIndex: 'status',
  },
  {
    title: '加入时间',
    copyable: true,
    dataIndex: 'update_time',
  },
];

export default position_table_columns;
