/**
 * Created by WL on 2017/5/10.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import HeaderComponent from '../../components/ConfigurationModule/HeaderConfig';
import MainLayout from '../../components/MainLayout/MainLayout';

function HeaderConfig({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <HeaderComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(HeaderConfig);
