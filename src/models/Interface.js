import * as usersService from '../services/Interface';

export default {
  namespace: 'interface',
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
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({ type: 'reload' });
    },
    *patch({ payload: { data } }, { call, put }) {
      const resp = yield call(usersService.modify, data);
      console.log(resp);
      if (resp.data.success){
        yield put({ type: 'reload' });
      } else {
        message.error('！');
      }

    },
    *create({ payload: values }, { call, put }) {
      yield call(usersService.create, values);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.interface.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *check({ payload: id }, { call }) {
      yield call(usersService.check, id);
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/interface') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
