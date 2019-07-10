import { login } from '../services/login'
export default {
  //命名空间
  namespace: 'login',
  //模块状态
  state: {
    isLogin: false
  },

  //异步操作
  effects: {
    *login({ payload, type }, { call, put }) {  // eslint-disable-line
      // console.log('payload...',payload,type)
      let data = yield call(login, payload)
      console.log('data...', data)
      //调用reduce改变登录状态
      yield put({
        type: 'updataLogin',
        payload: data.code == 1
      });
    },
  },
  //同步操作
  reducers: {
    updataLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
  },

};
