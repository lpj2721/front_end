import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import InterfaceComponent from '../../components/InterfaceComponent/Interface';
import MainLayout from '../../components/MainLayout/MainLayout';

function Interface({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <InterfaceComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Interface);
