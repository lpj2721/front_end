/**
 * Created by WL on 2017/4/25.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { SubMenu } = Menu;

function SiderContent() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ background: '#fff', height: '100%' }}
    >
        <Menu.Item key="1" style={{height:'64',fontSize:'18'}}>
          <Link to="users"><Icon type="bars" style={{marginTop:'18',marginRight:'10', marginLeft: '10'}}/>模板管理</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{height:'64',fontSize:'18'}}>
          <Link to="#"><Icon type="bars" style={{marginTop:'18',marginRight:'10', marginLeft: '10'}}/>模板配置</Link>
        </Menu.Item>
        <Menu.Item key="3" style={{height:'64',fontSize:'18'}}>
          <Link to="#"><Icon type="bars" style={{marginTop:'18',marginRight:'10', marginLeft: '10'}}/>测试管理</Link>
        </Menu.Item>
        <Menu.Item key="4" style={{height:'64',fontSize:'18'}}>
          <Link to="#"><Icon type="bars" style={{marginTop:'18',marginRight:'10', marginLeft: '10'}}/>测试结果</Link>
        </Menu.Item>
    </Menu>
  );
}

export default SiderContent;
