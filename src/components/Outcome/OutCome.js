/**
 * Created by WL on 2017/5/16.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Input, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './OutCome.css';
import { PAGE_SIZE } from '../../constants';
const Search = Input.Search;
function Outcome({ dispatch, list: dataSource, loading, total, page: current }) {

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/Outcome',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    let data = {
      'id':id,
      'data':values
    };
    dispatch({
      type: 'Outcome/patch',
      payload: { data },
    });
  }
function Search(value) {
  console.log(1111222,value);
  return null
}

  function createHandler(values) {
    console.log(2223, values);
    dispatch({
      type: 'Outcome/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: '编号',
      dataIndex: 'serial_num',
      key: 'serial_num',
      width:120,
    },
    {
      title: '名称',
      dataIndex: 'test_name',
      key: 'test_name',
      width:120,
    },
    {
      title: 'header参数',
      dataIndex: 'Interface_header',
      key: 'Interface_header',
      width:200,
    },
    {
      title: '参数',
      dataIndex: 'request_parameter',
      key: 'request_parameter',
      width:200,
    },
    {
      title: '响应码',
      dataIndex: 'status-code',
      key: 'status-code',
      width:100,
    },
    {
      title: '响应结果',
      dataIndex: 'response',
      key: 'response',
      width:300,
    },
  ];
  return (
    <div className={styles.normal}>
      <div>
        <div>
          <Search
            placeholder="input search text"
            style={{ width: 200 }}
            onSearch={value => Search(value)}
          />
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
  console.log(state.Outcome);
  const { list, total, page } = state.Outcome;
  return {
    loading: state.loading.models.Outcome,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Outcome);
