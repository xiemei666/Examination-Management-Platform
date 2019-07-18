import { get_Awaiting_approval_class, get_exam_student, get_student_exam } from "@/services"
export default {
  //命名空间
  namespace: 'mark',
  //模块状态
  state: {
    Grade: [],
    //学生试卷列表
    examStudent: []
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
      yield put({ type: 'save', payload: { Grade: data.data } });
    },
    *getExamStudent({ payload }, { call, put }) {
      let data = yield call(get_exam_student, payload)
      console.log(data)
      yield put({ type: "save", payload: { examStudent: data.exam } })
    },
    *getStudentExam({ payload }, { call, put }) {
      console.log(payload)
      let data = yield call(get_student_exam, payload)
      console.log(data)
    }
  },
  //同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
