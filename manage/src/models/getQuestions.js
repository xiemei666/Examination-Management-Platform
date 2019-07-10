import { getQuestions, getexamType, getQuestionsType,getSubject } from '@/services'

export default {
    //命名空间
    namespace: 'questions',
    //模块状态
    state: {
        //所有的试题
        qustions: [],
        //所有的考试类型
        examType: [],
        //所有的试题类型
        QuestionsType: [],
        //所有的课程
        subjects:[]

    },
    //订阅
    // subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //   },
    // },
    //异步操作
    effects: {
        *questions({ payload }, { call, put }) {  // eslint-disable-line
            console.log('payload...')
            let data = yield call(getQuestions)
            // console.log('question...', data.data)
            yield put({ type: 'save', payload: { qustions: data.data } });
        },
        *examTypes({ payload }, { call, put }) {
            let data = yield call(getexamType)
            // console.log('question...', data.data)
            yield put({ type: 'save', payload: { examType: data.data } });
        },
        *QuestionsTypes({ payload }, { call, put }) {
            let data = yield call(getQuestionsType)
            // console.log('question...', data.data)
            yield put({ type: 'save', payload: { QuestionsType: data.data } });
        },
        *Subject({ payload }, { call, put }){
            let data = yield call(getSubject)
            // console.log('question...', data.data)
            yield put({ type: 'save', payload: { subjects: data.data } });
        }
    },
    //同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
