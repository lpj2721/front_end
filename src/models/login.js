/**
 * Created by WL on 2017/5/2.
 */
import * as loginServer from '../services/login';
import { browserHistory } from 'dva/router';
import {message} from 'antd';

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
  },

  effects: {
    *login({ payload, }, { call, put }) {
      yield put({ type: 'showLoginLoading' });
      const data = yield call(loginServer.sign, payload);
      yield put({ type: 'hideLoginLoading' });
      if (data.data.success){
        message.success('登录成功！');
        yield put(browserHistory.push('/'));
      } else {
        message.error('用户名或密码错误！');
      }
    },
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
  },
}
