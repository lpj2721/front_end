/**
 * Created by WL on 2017/4/25.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';


function SiderContent() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ background: '#fff', height: '100%' }}
    >
        <Menu.Item key="1" style={{height:'64px',fontSize:'18px'}}>
          <Link to="/interface"><Icon type="appstore" style={{marginTop:'18px',marginRight:'10px', marginLeft: '10px'}}/>模板管理</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{height:'64px',fontSize:'18px'}}>
          <Link to="/headerConfig"><Icon type="setting" style={{marginTop:'18px',marginRight:'10px', marginLeft: '10px'}}/>模板配置</Link>
        </Menu.Item>
        <Menu.Item key="3" style={{height:'64px',fontSize:'18px'}}>
          <Link to="#"><Icon type="share-alt" style={{marginTop:'18px',marginRight:'10px', marginLeft: '10px'}}/>测试管理</Link>
        </Menu.Item>
        <Menu.Item key="4" style={{height:'64px',fontSize:'18px'}}>
          <Link to="#"><Icon type="bar-chart" style={{marginTop:'18px',marginRight:'10px', marginLeft: '10px'}}/>测试结果</Link>
        </Menu.Item>
    </Menu>
  );
}

export default SiderContent;
