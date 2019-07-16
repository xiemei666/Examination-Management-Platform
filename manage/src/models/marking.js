import {get_Awaiting_approval_class} from "@/services"
export default {
    //命名空间
    namespace: 'mark',
    //模块状态
    state: {
      Grade:[]
    },
    //订阅
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
    //异步操作
    effects: {
      *getGrade({ payload }, { call, put }) {  // eslint-disable-line
        let data = yield call(get_Awaiting_approval_class)
        console.log(data)
        yield put({ type: 'save',payload:{Grade:data.data} });
      },
    },
    //同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  