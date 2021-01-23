import React, { useEffect, useState } from 'react';
import { Row, Col, message } from 'antd';
import { ApiCaller } from '../utils';
import Table from './Table';

const Body = (props) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const getData = () => {
    try {
      ApiCaller.get('game')
        .then((res) => {
          console.log('res', res);
          setList(res?.result ?? []);
        })
        .catch((error) => {
          setError('ERROR');
        });
    } catch (e) {
      setError('ERROR');
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onEdit = (id, isOnline) => {
    ApiCaller.put('game/' + id, { isOnline: !isOnline })
      .then((res) => {
        message.info('Thành công');
        getData();
      })
      .catch((error) => {
        message.error('Có lỗi xảy ra');
      });
  };

  const onEditQuan = (id, isOff) => {
    ApiCaller.put('game/' + id, { isOff: !isOff })
      .then((res) => {
        message.info('Thành công');
        getData();
      })
      .catch((error) => {
        message.error('Có lỗi xảy ra');
      });
  };

  if (error) {
    return <h1>Xem lại kết nối internet và báo lỗi với Admin</h1>;
  }

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Table list={list} onEdit={onEdit} onEditQuan={onEditQuan} />
      </Col>
    </Row>
  );
};

Body.propTypes = {};

export default Body;
