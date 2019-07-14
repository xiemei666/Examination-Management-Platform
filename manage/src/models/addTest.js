import {add_test} from '@/services'
export default {
    //命名空间
    namespace: 'addTest',
    //模块状态
    state: {
        testQuestions:{}
    },
    //订阅
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
    //异步操作
    effects: {
      *addTest({ payload }, { call, put }) {  // eslint-disable-line
        console.log(payload)
        payload.start_time = payload.start_time.valueOf()
        payload.end_time = payload.end_time.valueOf()
        // console.log(payload.start_time.valueOf())
        let data = yield call(add_test,payload)
        console.log(data)
        yield put({ type: 'save',payload :{
            testQuestions:data.data
        }
    });
      },
    },
    //同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  