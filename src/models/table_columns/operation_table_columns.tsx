const operation_table_columns = [
  {
    title: '操作ID',

    copyable: true,
    dataIndex: 'operation_id',
  },
  {
    title: '操作人',

    copyable: true,
    dataIndex: 'operation_name',
  },
  {
    title: '状态码',

    copyable: true,
    dataIndex: 'resp_code',
  },
  {
    title: '请求IP',

    copyable: true,
    dataIndex: 'req_ip',
  },
  {
    title: '请求方法',

    copyable: true,
    dataIndex: 'req_method',
  },
  {
    title: '请求路径',

    copyable: true,
    dataIndex: 'req_path',
  },
  {
    title: '响应',

    copyable: true,
    dataIndex: 'resp_content',
  },
];

export default operation_table_columns;
