import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import EditModal from './InterfaceModal';

function Interface({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(record) {
    dispatch({
      type: 'interface/remove',
      payload: record,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/interface',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    let data = {
      'id':id,
      'data':values
    };
    dispatch({
      type: 'interface/patch',
      payload: { data },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'interface/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: '名称',
      dataIndex: '_id',
      key: '_id',
      width:100,
      render: text => <a href="">{text}</a>,
    },
    {
      title: '协议',
      dataIndex: 'protocol',
      key: 'protocol',
      width:100,
    },
    {
      title: 'method',
      dataIndex: 'method',
      key: 'method',
      width:100,
    },
    {
      title: '请求类型',
      dataIndex: 'data_type',
      key: 'dataType',
      width:120,
    },
    {
      title: '响应类型',
      dataIndex: 'response_type',
      key: 'responseType',
      width:120,
    },
    {
      title: '接口地址',
      dataIndex: 'Interface_address',
      key: 'InterfaceAddress',
      width:120,
    },
    {
      title: 'header参数',
      dataIndex: 'Interface_header',
      key: 'InterfaceHeader',
      width:200,
    },
    {
      title: '参数',
      dataIndex: 'request_parameter',
      key: 'parameter',
      width:250,
    },
    {
      title: 'Operation',
      key: 'operation',
      width:150,
      render: (text, record) => (
        <span className={styles.operation}>
          <EditModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>编辑</a>
          </EditModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record._id)}>
            <a href="">删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <EditModal record={{}} onOk={createHandler}>
            <Button type="primary">添加模板</Button>
          </EditModal>
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
  const { list, total, page } = state.interface;
  return {
    loading: state.loading.models.interface,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Interface);
