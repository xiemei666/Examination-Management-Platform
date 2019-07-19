import { login ,getUserInfo,change_user_msg,change_pic} from '@/services';
import { setToken, getToken,removeToken } from '@/utils/index';
import { routerRedux } from 'dva/router';
export default {
  //命名空间
  namespace: 'login',
  //模块状态
  state: {
    isLogin: -1,
    userInfo: {},
    picUrl:''
  },
  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // 1.判断去的页面是否是登陆页面
        if (pathname.indexOf('/login') === -1) {
          // 1.1 判断是否有登陆态
          if (!getToken()) {
            // 1.1.1没有登陆态，利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}`
            }))
          }
          // 1.2用户没有登录态
        } else {
          // 1.2.1去登陆页面，如果已登陆跳回首页
          if (getToken()) {
            // 利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/main`,
            }))
          }
        }
        dispatch({
          type:'getUserInfo'
        })
      });
    },
  },

  //异步操作
  effects: {
    *login({ payload, type }, { call, put }) {  // eslint-disable-line
      // console.log('payload...',payload,type)
      // let data = yield login(payload)
      let data = yield call(login, payload)
      if (data.code == 1) {
        // 1.设置cookie
        setToken(data.token)
      }
      //调用reduce改变登录状态
      yield put({
        type: 'updataLogin',
        payload: data.code
      });
    },
    * getUserInfo(action, {call, put, select}){
      let userInfo = yield select(state=>state.login.userInfo);
      if (Object.keys(userInfo).length){
        return;
      }
      console.log('userInfo...', userInfo);
      let data = yield getUserInfo();
      console.log('data...', data);
      yield put({
        type: 'updateUserInfo',
        payload: data.data
      })
    },
    //上传图片到服务器
    *changePic({ payload, type }, { call, put }){
      let data = yield call(change_pic,payload)
      yield put({
        type:"picurl",
        payload:{picUrl:data.data[0].path}
      })
      console.log(data)
    },
    //图片更新成功
    *changeUserMsg({ payload, type }, { call, put }){
      let data = yield call(change_user_msg,payload)
      console.log(data)
    },
    *logout({ payload, type }, { call, put }){
      yield removeToken()
      window.location.reload()
    }
  },
  //同步操作
  reducers: {
    updataLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
    updateUserInfo(state, action){
      return { ...state, userInfo: action.payload };
    },
    picurl(state,action){
      return { ...state, ...action.payload };
    }
  }
};
