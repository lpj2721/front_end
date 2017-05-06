import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import UserModal from './InterfaceModal';

function Users({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    console.log(xxx);
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    let data = {
      'id':id,
      'values':values
    };
    console.log(2, data);
    dispatch({
      type: 'users/patch',
      payload: { data },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'users/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      width:120,
      render: text => <a href="">{text}</a>,
    },
    {
      title: '协议',
      dataIndex: 'protocol',
      key: 'protocol',
      width:120,
    },
    {
      title: 'method',
      dataIndex: 'method',
      key: 'method',
      width:120,
    },
    {
      title: '请求类型',
      dataIndex: 'dataType',
      key: 'dataType',
      width:120,
    },
    {
      title: '响应类型',
      dataIndex: 'responseType',
      key: 'responseType',
      width:120,
    },
    {
      title: '接口地址',
      dataIndex: 'InterfaceAddress',
      key: 'InterfaceAddress',
      width:250,
    },
    {
      title: '参数',
      dataIndex: 'parameter',
      key: 'parameter',
      width:100,
    },
    {
      title: 'Operation',
      key: 'operation',
      width:150,
      render: (text, record) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>

        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler}>
            <Button type="primary">添加模板</Button>
          </UserModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);
