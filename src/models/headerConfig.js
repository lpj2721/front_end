/**
 * Created by WL on 2017/5/10.
 */
import * as usersService from '../services/headerConfig';

export default {
  namespace: 'headerConfig',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(usersService.fetch, { page });
      const list = data.data;
      const total = data.total;
      yield put({
        type: 'save',
        payload: {
          data:list,
          total: parseInt(total, 10),
          page: parseInt(page, 10),
        },
      });
    },
    *patch({ payload: { data } }, { call, put }) {
      yield call(usersService.modify, data);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.headerConfig.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *post({ payload: {record} }, { call }) {
      console.log(22333, record);
      yield call(usersService.post, record);
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/headerConfig') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
