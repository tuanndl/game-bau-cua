import React from 'react';
import { Table, Tag, Space, Button } from 'antd';

const Item = (props) => {
  const { list, onEdit } = props;

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      render: (code) => <Tag>{code}</Tag>,
    },
    {
      title: 'Action',
      key: 'action',
      render: ({ _id, isOnline }) => {
        return isOnline ? (
          <Button onClick={() => onEdit(_id, isOnline)} type='primary'>
            Đang bật
          </Button>
        ) : (
          <Button onClick={() => onEdit(_id, isOnline)}>Đang tắt</Button>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={list} pagination={false} />;
};

Item.propTypes = {};

export default Item;
