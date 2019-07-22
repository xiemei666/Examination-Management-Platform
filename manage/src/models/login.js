import { login, getUserInfo, change_user_msg, change_pic, getViewAuthority } from '@/services';
import { setToken, getToken, removeToken } from '@/utils/index';
import { routerRedux } from 'dva/router';
import allAuthority from '@/router/config';
export default {
  //命名空间
  namespace: 'login',
  //模块状态
  state: {
    isLogin: -1,
    userInfo: {},
    picUrl: '',
    myView: [],
    forbiddenView: []
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
        if(getToken()){
          dispatch({
          type:'getUserInfo'
        })
        }
        
      });
    },
  },

  //异步操作
  effects: {
    *login({ payload, type }, { call, put }) {  // eslint-disable-line
      let data = yield call(login, payload)
      if (data.code === 1) {
        // 1.设置cookie
        setToken(data.token)
      }
      //调用reduce改变登录状态
      yield put({
        type: 'updataLogin',
        payload: data.code
      });
    },
    //获取用户信息
    * getUserInfo(action, { call, put, select }) {
      //1.判断用户是否以获取用户
      let userInfo = yield select(state => state.login.userInfo);
      if (Object.keys(userInfo).length) {
        return;
      }
      //2.获取用户信息
      let data = yield getUserInfo();
      yield put({
        type: 'updateUserInfo',
        payload: data.data
      })
      // 3.获取用户权限
      let authority = yield getViewAuthority();
      //所有的用户权限信息
      console.log('authority...', authority);
      //0: {view_authority_id: "r50r9t-1p1kbm", view_authority_text: "登录", view_id: "login"}
      //1: { view_authority_id: "8olznh-943zt", view_authority_text: "主界面", view_id: "main" }
      yield put({
        type: 'updateViewAuthority',
        payload: authority.data
      })
    },
    //上传图片到服务器
    *changePic({ payload, type }, { call, put }) {
      let data = yield call(change_pic, payload)
      yield put({
        type: "picUrl",
        payload: { picUrl: data.data[0].path }
      })
    },
    //图片更新成功
    *changeUserMsg({ payload, type }, { call, put }) {
      let data = yield call(change_user_msg, payload)
      if (data.code === 1) {
        yield put({
          type: 'updateUserInfo',
          payload: {}
        })
        yield put({
          type: 'getUserInfo',
          payload: data.data
        })
      }
    },
    *logout({ payload, type }, { call, put }) {
      yield removeToken()
      window.location.reload()
    }
  },
  //同步操作
  reducers: {
    updataLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
    updateUserInfo(state, action) {
      return { ...state, userInfo: action.payload };
    },
    picUrl(state, action) {
      return { ...state, ...action.payload }
    },
    updateViewAuthority(state, action) {
      // 筛选出我拥有的路由
      let myView = [], forbiddenView = [];
      allAuthority.routes.forEach(item => {
        let obj = {
          name: item.name,
          children: []
        }
        item.children.forEach(value => {
          if (action.payload.findIndex(item => item.view_id === value.view_id) !== -1) {
            obj.children.push(value);
          } else {
            forbiddenView.push(value);
          }
        })
        myView.push(obj)
      })
      return { ...state, myView, forbiddenView }
    }
  }
};
