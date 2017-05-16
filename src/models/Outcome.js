/**
 * Created by WL on 2017/5/16.
 */
import * as usersService from '../services/Outcome';
export default {
  namespace: 'Outcome',
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

    *reload(action, { put, select }) {
      const page = yield select(state => state.Outcome.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/Outcome') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
