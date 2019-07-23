import { add_test, del_test, updated_test, get_test, get_test_detail } from '@/services'
export default {
  //命名空间
  namespace: 'addTest',
  //模块状态
  state: {
    testQuestions: {},
    exam: [],
    detailTest:[]
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
      let data = yield call(add_test, payload)
      console.log(data)
      window.localStorage.setItem('test',JSON.stringify(data.data))
      // yield put({
      //   type: 'save', payload: {
      //     testQuestions: data.data
      //   }
      // });
    },
    *delTest({ payload }, { call, put }) {
      let data = yield call(del_test, payload)
      console.log(data)
    },
    *updatedTest({ payload }, { call, put }) {
      let data = yield call(updated_test, payload)
      if(data.code===1){
        yield put({
          type: "getExam",
          payload: {
            exam: data.exam
          }
        })
      }
      console.log(data, "123123")
    },
    *getExam({ payload }, { call, put }) {
      let data = yield call(get_test)
      console.log(data)
      yield put({
        type: "save",
        payload: {
          exam: data.exam
        }
      })
    },
    *getExamDetail({ payload }, { call, put }) {
      let data = yield call(get_test_detail,payload)
      console.log(data)
      yield put({
        type:"save",
        payload:{
          detailTest:data.data.questions
        }
      })
    }
  },
  //同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
