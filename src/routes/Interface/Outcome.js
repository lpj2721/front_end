/**
 * Created by WL on 2017/5/16.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import Outcome from '../../components/Outcome/OutCome';
import MainLayout from '../../components/MainLayout/MainLayout';

function OutcomeComponent({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Outcome />
      </div>
    </MainLayout>
  );
}

export default connect()(OutcomeComponent);
