/**
 * Created by WL on 2017/5/10.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './HeaderModal.css';
import { PAGE_SIZE } from '../../constants';
import HeaderEditModal from './HeaderModal';

function HeaderConfig({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(record) {
    console.log(22244, record);
    dispatch({
      type: 'headerConfig/remove',
      payload: record,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/headerConfig',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    let data = {
      'id':id,
      'data':values
    };
    dispatch({
      type: 'headerConfig/patch',
      payload: { data },
    });
  }

  function createHandler(values) {
    console.log(2223, values);
    dispatch({
      type: 'headerConfig/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: '名称',
      dataIndex: '_id',
      key: '_id',
      width:120,
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'header参数',
      dataIndex: 'header_rules',
      key: 'InterfaceHeader',
      width:200,
    },
    {
      title: '参数配置',
      dataIndex: 'parameter_rules',
      key: 'parameter',
      width:300,
    },
    {
      title: 'Operation',
      key: 'operation',
      width:150,
      render: (text, record) => (
        <span className={styles.operation}>
          <HeaderEditModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>编辑</a>
          </HeaderEditModal>
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
  console.log(state.headerConfig);
  const { list, total, page } = state.headerConfig;
  return {
    loading: state.loading.models.headerConfig,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(HeaderConfig);
