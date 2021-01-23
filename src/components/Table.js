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
      title: 'Quân',
      key: 'action1',
      render: ({ _id, isOnline, isOff }) => {
        return isOnline ? (
          <Button onClick={() => onEdit(_id, isOnline, isOff)} type='primary'>
            Quân bật
          </Button>
        ) : (
          <Button onClick={() => onEdit(_id, isOnline, isOff)}>Quân tắt</Button>
        );
      },
    },
    {
      title: 'Cái',
      key: 'action2',
      render: ({ _id, isOff, isOnline }) => {
        return isOff ? (
          <Button onClick={() => onEditQuan(_id, isOnline, isOff)} type='primary'>
            Cái bật
          </Button>
        ) : (
          <Button onClick={() => onEditQuan(_id, isOnline, isOff)}>Cái tắt</Button>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={list} pagination={false} />;
};

Item.propTypes = {};

export default Item;
