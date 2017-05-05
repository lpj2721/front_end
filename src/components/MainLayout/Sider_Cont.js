/**
 * Created by WL on 2017/5/3.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { SubMenu } = Menu;

function SiderContents() {
  return (
    <SubMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
      <Icon type="user" />
      <span className="nav-text">nav 1</span>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="video-camera" />
      <span className="nav-text">nav 2</span>
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="upload" />
      <span className="nav-text">nav 3</span>
    </Menu.Item>
    </SubMenu>
  );
}

export default SiderContents;
