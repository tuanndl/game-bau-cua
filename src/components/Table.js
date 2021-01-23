import React from 'react';
import { Table, Tag, Space, Button } from 'antd';

const Item = (props) => {
  const { list, onEdit, onEditQuan } = props;

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      render: (code) => <Tag>{code}</Tag>,
    },
    {
      title: 'Cái',
      key: 'action1',
      render: ({ _id, isOnline }) => {
        return isOnline ? (
          <Button onClick={() => onEdit(_id, isOnline)} type='primary'>
            Cái bật
          </Button>
        ) : (
          <Button onClick={() => onEdit(_id, isOnline)}>Cái tắt</Button>
        );
      },
    },
    {
      title: 'Quân',
      key: 'action2',
      render: ({ _id, isOff }) => {
        return isOff ? (
          <Button onClick={() => onEditQuan(_id, isOff)} type='primary'>
            Quân bật
          </Button>
        ) : (
          <Button onClick={() => onEditQuan(_id, isOff)}>Quân tắt</Button>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={list} pagination={false} />;
};

Item.propTypes = {};

export default Item;
